import sendEmail from "../../utils/email/sendEmail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import ResetTokenRepo from "../../database/repositories/ResetTokenRepo.js";

export const sendEmailVerificationLink = async(email, name, id) => {
    let verificationToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(verificationToken, Number(10));

    ResetTokenRepo.create({userId: id, token: hash});
    
    const link = `${process.env.BASE_URL}/auth/verify-mail?token=${verificationToken}&id=${id}`;

    sendEmail(email, "Password Reset Request", {name: name, link: link}, "./template/emailVerification.handlebars");
};

