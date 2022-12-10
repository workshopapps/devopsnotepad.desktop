import create from "../services/contactUs/create.js";
import { validatePayload } from "../utils";
import sendEmail from "../utils/email/sendEmail.js";

export default class ContactUsController {
    static create = async (req, res, next) => {
        try {

            const errors = validatePayload(req);
            if (errors && Object.keys(errors).length > 0) throw errors;

            const { email } = req.body;

            const payload = await create(req.body);

            sendEmail(email, "Message received", { email: email}, "./template/contactUs.handlebars");

            res.json({
                success: true,
                message: "message sent successfully",
                ...payload
            });

        }catch (error){
            next(error);
        }
    };
}
