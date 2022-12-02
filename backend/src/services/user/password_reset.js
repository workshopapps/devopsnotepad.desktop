import sendEmail from "../../utils/email/sendEmail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import ResetTokenRepo from "../../database/repositories/ResetTokenRepo.js";

export const sendResetLink = async(email, name, id) => {
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    ResetTokenRepo.create({userId: id, token: hash});
    console.log(resetToken);
    const link = `${process.env.BASE_URL}/auth/update-password?token=${resetToken}&id=${id}`;

    sendEmail(email, "Password Reset Request", {name: name, link: link}, "./template/requestResetPassword.handlebars");
};