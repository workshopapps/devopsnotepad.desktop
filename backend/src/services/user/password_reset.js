import crypto from "crypto";
import bcrypt from "bcrypt";
import ResetTokenRepo from "../../database/repositories/ResetTokenRepo.js";
import Email from "../../utils/email/sendEmail.js";

export const sendResetLink = async(email, name, id) => {
    const mail = new Email(
        config.email.opspad_email_user,
        config.email.opspad_email_pass
    );
    let resetToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(resetToken, Number(10));

    ResetTokenRepo.create({userId: id, token: hash});
    
    const link = `${process.env.BASE_URL}/auth/update-password?token=${resetToken}&id=${id}`;

    mail.sendEmail(email, "Password Reset Request", {name: name, link: link}, "./template/requestResetPassword.handlebars");
};
