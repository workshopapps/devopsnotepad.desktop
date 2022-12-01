import UserRepo from "../database/repositories/UserRepo.js";
import {NotFoundError} from "../lib/errors/index.js";
import { sendResetLink } from "../services/user/password_reset.js";

export default class AuthController {
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
}