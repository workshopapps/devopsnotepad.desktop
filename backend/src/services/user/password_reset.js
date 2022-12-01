import sendEmail from "../../utils/email/sendEmail.js";
import * as JWT from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcrypt";

export const sendResetLink = async(email, name, id) => {
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    //saveToken

    const link = `${process.env.BASE_URL}/auth/reset-password?token=${resetToken}&id=${id}`;

    sendEmail(email, "Password Reset Request", {name: name, link: link}, "./template/requestResetPassword.handlebars");
};