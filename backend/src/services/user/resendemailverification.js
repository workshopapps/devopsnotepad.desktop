import { sendEmailVerificationLink } from "./emailVerification.js";
import UserRepo from "../../database/repositories/UserRepo.js";

export default async function resendEmailVerification(body) {
    body.email = body.email.toLowerCase();

    const registeredUser = await UserRepo.getUserByEmail(body.email);


    if (!registeredUser) {
        return "User Not found"
    }

    const { email, name, id } = registeredUser;

    await sendEmailVerificationLink(email, name, id);

    return {
        prompt: "A verification link has been sent to your e-mail. Kindly verify to complete registration",
    }
}