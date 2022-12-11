import UserRepo from "../../database/repositories/UserRepo.js";
import bcrypt from "bcrypt";
import isEmailVerified from "../../middleware/authentication/isEmailVerified.js";
import { AuthenticationError } from "../../lib/errors/index.js";

export default async function login(body) {

    body.email = body.email.toLowerCase();

    const user = await UserRepo.getUserByEmail(body.email);

    if (!user) {
        throw new AuthenticationError("Email or password incorrect")
    }

    if (!user.password === null) {
        throw new AuthenticationError('Error. You probably signed up via google')
    }

    const comparePassword = await bcrypt.compare(body.password, user.password);

    if (!comparePassword) {
        throw new AuthenticationError("Email or password incorrect")
    } 

    isEmailVerified(user);

    return {
        user,
    };
}