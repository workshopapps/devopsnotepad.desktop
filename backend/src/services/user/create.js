import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import { sendEmailVerificationLink } from "../../services/user/emailVerification.js";
import { ValidationError } from '../../lib/errors/index.js';

export default async function create(body) {
    body.email = body.email.toLowerCase();

    //hash password
    const hash =  await bcrypt.hash(body.password, Number(process.env.BCRYPT_SALT));
    body.password = hash;

    //check if user already exist
    const userDetails = await UserRepo.getUserByEmail(body.email);
    
    if (userDetails) {
        throw new ValidationError("user already exists!!!");
    }

    const user = await UserRepo.create(body);

    const registeredUser = await UserRepo.getUserByEmail(body.email);

    const {email, name, id} = registeredUser;

    await sendEmailVerificationLink(email, name, id);

    return {
        prompt: "A verification link has been sent to your e-mail. Kindly verify to complete registration",
        user
    }
}