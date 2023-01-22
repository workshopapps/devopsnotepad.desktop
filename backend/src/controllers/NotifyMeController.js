import Email from "../utils/email/sendemail.js"
import Joi from 'joi';
import { presentYear } from "../utils/index.js";

export default class NotifyMeController {
    static create = async (req, res, next) => {
        try {
            const year = presentYear();
            const mail = new Email(
                config.email.opspad_email_user,
                config.email.opspad_email_pass
            );

            const { email } = req.body;

            // Validate with Joi
            const notifyEmail = Joi.object({
                email:Joi.string().required().email()
            }).strict();

            if (notifyEmail.validate(req.body).error) {
                return res.status(400).json(notifyEmail.validate(req.body).error.details);
            }


            mail.sendEmail(email, "Message received", { email, year }, "./template/notifyMe.handlebars");

            res.json({
                success: true,
                message: "Email saved successfully",
            });

        } catch (error) {
            next(error);
        }
    };
}
