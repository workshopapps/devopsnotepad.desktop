import create from '../services/user/create.js';
import UserRepo from '../database/repositories/UserRepo.js';
import login from '../services/user/login.js';
import ResetTokenRepo from '../database/repositories/ResetTokenRepo.js';
import { NotFoundError } from '../lib/errors/index.js';
import { sendResetLink } from '../services/user/password_reset.js';
import EmailVerificationTokenRepo from '../database/repositories/emailVerificationRepo.js';
import bcrypt from 'bcrypt';
import Joi from 'joi';
import PasswordComplexity from 'joi-password-complexity';

import { validatePayload } from '../utils/index.js';

export default class AuthController {
  static signup = async (req, res, next) => {
    try {
      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      await create(req.body);

      res.status(201).json({
        success: true,
        message: 'signup successful',
        user: req.body,
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
      if (loggedInUser.user && loggedInUser.token) {
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
          token: loggedInUser.token,
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

  static loginStatus = async (req, res) => {
    if (req.user) {
      res.status(200).json({
        success: true,
        message: 'Login was successful',
        user: req.user,
      });
    } else {
      res.status(401).json({
        success: false,
        message: 'Not Authenticated',
      });
    }
  };
  static loginFailed = async (req, res) => {
    res.status(401).json({
      success: false,
      message: 'Not Authenticated',
    });
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

      res.status(200).redirect('/login');
      return { message: 'A password reset link has been sent to your email address' };
    } catch (error) {
      console.error(error);
      next(error);
    }
  };

  static updateUserPassword = async (req, res) => {
    try {
      const { token, id, password } = req.body;

      /**
       * Validate Request
       */
      const errors = validatePayload(req);

      // Update this latter
      if (errors && Object.keys(errors).length > 0) throw errors;

      await ResetTokenRepo.deleteExpiredTokens();

      const storedToken = await ResetTokenRepo.getToken(token, id);

      if (!storedToken) {
        throw new Error('Invalid or expired password reset token');
      }

      const isValid = await bcrypt.compare(token, storedToken.token);

      if (!isValid) {
        throw new Error('Invalid or expired password reset token');
      }

      const hashedPassword = await bcrypt.hash(password, Number(10));

      const updatedUser = await UserRepo.updatePasswordById(id, hashedPassword);

      if (!updatedUser) throw new NotFoundError('User not found');

      res.status(200).redirect('/login');
      return {
        success: true,
        message: 'Password has been updated successfully',
        updatedUser,
      };
    } catch (error) {
      next(error);
    }
  };

  static verifyEmail = async (req, res, next) => {
    try {
      const { token, id } = req.query;
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
      const { id } = req.session.user;

      // destruct request body
      const {oldPassword, newPassword } = req.body;

      // Get user from database
      const user = await UserRepo.getUserById(id);

      // Throw error if user not found
      if (!user) {
        return res.status(400).send('User Not Found');
      }

      const comparePassword =  await bcrypt.compare(oldPassword, user.password);

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
}
