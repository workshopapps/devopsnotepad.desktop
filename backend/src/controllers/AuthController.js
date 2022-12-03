import create from "../services/user/create.js";
import UserRepo from "../database/repositories/UserRepo.js";
import login from "../services/user/login.js";
import ResetTokenRepo from "../database/repositories/ResetTokenRepo.js";
import {NotFoundError} from "../lib/errors/index.js";
import { sendResetLink } from "../services/user/password_reset.js";
import EmailVerificationTokenRepo from "../database/repositories/emailVerificationRepo.js";
import bcrypt from "bcrypt";

export default class AuthController {
    static signup = async (req, res, next) => {
        try {
            await create(req.body);

            res.status(201).json({
                success: true,
                message: "signup successful",
                user: req.body
            });
        } catch (error) {
            next(error);
        }
    };

    static loginUser = async (req, res, next) => {
        const body = req.body;
        try {
            const loggedInUser = await login(body, req, res);
   
            //set request cookie
            if (loggedInUser.user && loggedInUser.token){
                req.session.user = loggedInUser.user;
                req.session.authorized = true;
  
                return res.send({ 
                    message: "Logged in Successfully",
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
            res.clearCookie("connect.sid");
            return res.send({
                message: "logout successful"
            });
        } catch (error) {
            next(error);
        }
    };
    
    static loginStatus = async (req, res) => {
        if (req.user) {
            res.status(200).json({
                success: true,
                message: "Login was successful",
                user: req.user,
            });
        } else {
            res.status(401).json({
                success: false,
                message: "Not Authenticated",
            });
        }
    };
    static loginFailed = async (req, res) => {
        res.status(401).json({
            success: false,
            message: "Not Authenticated",
        });
    };
    static logout = async (req, res) => {
        req.logout();
        res.status(200).json({
            success: true,
            message: "Logout successful",
        });
    };

    static getResetLink = async (req, res) => {
        const {email} = req.body;

        try {
            const registeredUser = await UserRepo.getUserByEmail(email);

            if (!registeredUser) throw new NotFoundError("Please input a valid registered email.");

            const {name, id} = registeredUser;

            sendResetLink(email, name, id);

            res.status(200).redirect("/login");
            return ({message: "A password reset link has been sent to your email address"});
        
        } catch (error) {
            console.error(error);
        }
    };

    static updateUserPassword = async (req, res) => {
        const {token, id, password} = req.body;
        
        await ResetTokenRepo.deleteExpiredTokens();

        const storedToken = await ResetTokenRepo.getToken(token, id);

        if (!storedToken) {
            throw new Error("Invalid or expired password reset token");
        }
        
        const isValid = await bcrypt.compare(token, storedToken.token);
        
        if (!isValid) {
            throw new Error("Invalid or expired password reset token");
        }

        const hashedPassword = await bcrypt.hash(password, Number(10));

        const updatedUser = await UserRepo.updatePasswordById(id, hashedPassword);

        if(!updatedUser)throw new NotFoundError("User not found");

        res.status(200).redirect("/login");
        return ({   
            success: true,
            message: "Password has been updated successfully",
            updatedUser
        });
    };

    static verifyEmail = async (req, res) => {
        const { token, id } = req.query;

        await EmailVerificationTokenRepo.deleteExpiredTokens();

        const storedToken = await EmailVerificationTokenRepo.getToken(id);

        if (!storedToken) {
            throw new Error("Invalid or expired email verification token");
        }
    
        const isValid = await bcrypt.compare(token, storedToken.token);
    
        if (!isValid) {
            throw new Error("Invalid or expired email verification token");
        }

        await UserRepo.updateById(id, {email_verified: "true"});

        return ({message: "email verified successfully"});
    };
  
}
