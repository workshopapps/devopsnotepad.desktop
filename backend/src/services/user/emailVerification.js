import sendEmail from "../../utils/email/sendEmail.js";
import crypto from "crypto";
import bcrypt from "bcrypt";
import EmailVerificationTokenRepo from "../../database/repositories/emailVerificationRepo.js";
import Email from "../../utils/email/sendemail.js";
import config from "../../config/index.js";


export const sendEmailVerificationLink = async (email, name, id) => {
    const mail = new Email(
        config.email.opspad_email_user,
        config.email.opspad_email_pass
    );

    let verificationToken = crypto.randomBytes(32).toString("hex");
    const hash = await bcrypt.hash(verificationToken, Number(10));

    EmailVerificationTokenRepo.create({ userId: id, token: hash });

    const link = `${process.env.BASE_URL}/verifyemail?token=${verificationToken}&id=${id}`;

    mail.sendEmail(email, { name: name, link: link }, "./template/emailVerification.handlebars");
};

