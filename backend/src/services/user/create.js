import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import { sendEmailVerificationLink } from "../../services/user/emailVerification.js";

export default async function create(body) {
    body.email = body.email.toLowerCase();

    //hash password
    const hash =  await bcrypt.hash(body.password, Number(process.env.BCRYPT_SALT));
    body.password = hash;

    await UserRepo.create(body);

    const registeredUser = await UserRepo.getUserByEmail(body.email);

    const {email, name, id} = registeredUser;

    await sendEmailVerificationLink(email, name, id);

}