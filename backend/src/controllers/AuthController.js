import create from '../services/user/create.js';
import UserRepo from '../database/repositories/UserRepo.js';
import login from '../services/user/login.js';
import ResetTokenRepo from '../database/repositories/ResetTokenRepo.js';
import { NotFoundError, ServiceError } from '../lib/errors/index.js';
import { sendResetLink } from '../services/user/password_reset.js';
import EmailVerificationTokenRepo from '../database/repositories/emailVerificationRepo.js';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import PasswordComplexity from 'joi-password-complexity';
import { OAuth2Client } from 'google-auth-library';
import { generateJWTToken, validatePayload } from '../utils/index.js';
import config from '../config/index.js';
// import signJWT from '../utils/jwthelper.js';

const client = new OAuth2Client({ clientId: config.google.CLIENT_ID, clientSecret: config.google.CLIENT_SECRET });

export default class AuthController {
  static signup = async (req, res, next) => {
    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      const user = await create(req.body);

      res.status(201).json({
        success: true,
        message: 'signup successful',
        user,
      });
    } catch (error) {
      next(error);
    }
  };

  static loginUser = async (req, res, next) => {
    const body = req.body;
    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;
      const loggedInUser = await login(body, req, res);

      //set request cookie
      if (loggedInUser.user) {
        req.session.user = loggedInUser.user;
        req.session.authorized = true;

        if (body.rememberMe) {
          req.session.user.maxAge = 30 * 24 * 60 * 60 * 1000; // Cookie expires after 30 days
        } else {
          req.session.user.expires = false; // Cookie expires at end of session
        }

        return res.status(200).send({
          message: 'Logged in Successfully',
          user: loggedInUser.user,
        });
      }
    } catch (error) {
      next(error);
    }
  };

  static logoutUser = async (req, res, next) => {
    try {
      res.clearCookie('connect.sid');
      return res.send({
        message: 'logout successful',
      });
    } catch (error) {
      next(error);
    }
  };

  static logout = async (req, res) => {
    req.logout();
    res.status(200).json({
      success: true,
      message: 'Logout successful',
    });
  };

  static getResetLink = async (req, res, next) => {
    const { email } = req.body;

    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      const registeredUser = await UserRepo.getUserByEmail(email);

      if (!registeredUser) throw new NotFoundError('Please input a valid registered email.');

      const { name, id } = registeredUser;

      sendResetLink(email, name, id);

      res.status(200).json({ message: 'A password reset link has been sent to your email address' });
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static updateUserPassword = async (req, res, next) => {
    try {
      const { token, id, password } = req.body;

      await ResetTokenRepo.deleteExpiredTokens();

      const storedTokens = await ResetTokenRepo.getTokens(token, id);

      if (!storedTokens) {
        throw new Error('Invalid or expired password reset token');
      }
      const currentToken = storedTokens.filter((record) => bcrypt.compare(token, record.token));

      if (!currentToken) {
        throw new Error('Invalid or expired password reset token');
      }

      const hashedPassword = await bcrypt.hash(password, Number(10));

      const updatedUser = await UserRepo.updatePasswordById(id, hashedPassword);

      if (!updatedUser) throw new NotFoundError('User not found');

      res.status(200).json({
        success: true,
        message: 'Password has been updated successfully',
        updatedUser,
      });
    } catch (error) {
      next(error);
    }
  };

  static verifyEmail = async (req, res, next) => {
    try {
      const { token, id } = req.body;
      if (!token || !id) throw new NotFoundError('invalid link, request for a new link');

      await EmailVerificationTokenRepo.deleteExpiredTokens();

      const storedToken = await EmailVerificationTokenRepo.getToken(id);

      if (!storedToken) throw new NotFoundError('Invalid or expired email verification token');

      const isValid = await bcrypt.compare(token, storedToken.token);

      if (!isValid) {
        throw new Error('Invalid or expired email verification token');
      }

      await UserRepo.updateById(id, { email_verified: 1 });

      res.status(200).send({ message: 'email verified successfully' });
    } catch (error) {
      next(error);
    }
  };

  static updateUserPasswordFromMobile = async (req, res) => {
    try {
      // Validate with Joi
      const updateUserPassword = Joi.object({
        oldPassword: Joi.string().required(),
        newPassword: new PasswordComplexity({
          min: 8,
          max: 25,
          lowerCase: 1,
          upperCase: 1,
          numeric: 1,
          symbol: 1,
          requirementCount: 4,
        }),
      }).strict();

      if (updateUserPassword.validate(req.body).error) {
        return res.status(400).json(updateUserPassword.validate(req.body).error.details);
      }

      if (!req.body.newPassword) return res.status(400).send(' New Password is required..');
      const { id } = req.session.user;

      // destruct request body
      const { oldPassword, newPassword } = req.body;

      // Get user from database
      const user = await UserRepo.getUserById(id);

      // Throw error if user not found
      if (!user) {
        return res.status(400).send('User Not Found');
      }

      const comparePassword = await bcrypt.compare(oldPassword, user.password);

      // Compare Old Password with new Password
      if (!comparePassword) {
        return res.status(400).send('User Passwords do not match');
      }

      //hash new password
      const hashedPassword = await bcrypt.hash(newPassword, Number(process.env.BCRYPT_SALT));

      // Save new password
      await UserRepo.updatePasswordById(id, hashedPassword);
      // Success
      return res.status(201).send('Password Successfully Updated');
    } catch (error) {
      return res.status(500).send(`An error occurred whiles updating user password ${error}`);
    }
  };

  static googleLogin = async (req, res, next) => {
    try {
      const { token } = req.body;
      const ticket = await client.verifyIdToken({ idToken: token, audience: config.google.CLIENT_ID });

      const payload = ticket.getPayload();
      let user = await UserRepo.getUserByEmail(payload.email);
      if (!user) {
        user = await UserRepo.create({
          email: payload.email,
          name: payload.name,
          email_verified: payload.email_verified,
        });
      }
      const userToken = await generateJWTToken(user);
      req.session.user = user;
      req.session.authorized = true;

      res.status(200).json({ user, userToken });
    } catch (error) {
      return next(error);
    }
  };
}
