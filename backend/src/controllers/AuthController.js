import UserRepo from "../database/repositories/UserRepo.js";
import {NotFoundError} from "../lib/errors/index.js";
import { sendResetLink } from "../services/user/password_reset.js";
//

export default class AuthController {
    //
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
    //
}