
import sendEmail from "../utils/email/sendEmail.js";
import Joi from 'joi';

export default class NotifyMeController {
    static create = async (req, res, next) => {
        try {

            const { email } = req.body;

            // Validate with Joi
            const notifyEmail = Joi.object({
                email:Joi.string().required().email()
            }).strict();

            if (notifyEmail.validate(req.body).error) {
                return res.status(400).json(notifyEmail.validate(req.body).error.details);
            }


            sendEmail(email, "Message received", { email }, "./template/notifyMe.handlebars");

            res.json({
                success: true,
                message: "Email saved successfully",
             });

        } catch (error) {
            next(error);
        }
    };
}
