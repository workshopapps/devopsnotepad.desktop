import sendEmail from "../../utils/email/sendEmail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import EmailVerificationTokenRepo from "../../database/repositories/emailVerificationRepo.js";

export const sendEmailVerificationLink = async(email, name, id) => {
    let verificationToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(verificationToken, Number(10));

    EmailVerificationTokenRepo.create({userId: id, token: hash});
    
    const link = `${process.env.BASE_URL}/verifyemail?token=${verificationToken}&id=${id}`;

    sendEmail(email, "Email verification Request", {name: name, link: link}, "./template/emailVerification.handlebars");
};

