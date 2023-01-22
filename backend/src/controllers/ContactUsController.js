import create from "../services/contactUs/create.js";
import { validatePayload, presentYear } from "../utils/index.js";
import config from "../config/index.js";
import Email from "../utils/email/sendEmail.js";
import contacts from '../services/contactUs/getContacts.js';
import get from "../services/user/getFollowUpUsers.js";


export default class ContactUsController {
    static create = async (req, res, next) => {
        try {
            const year = presentYear();

            let mail = new Email(
                config.email.support_email_user,
                config.email.support_email_pass
            )

            const errors = validatePayload(req);
            if (errors && Object.keys(errors).length > 0) throw errors;

            const { email, firstname, lastname, message, company, role } = req.body;

            const payload = await create(req.body);

            mail.sendEmail("support@opspad.dev", "Opspad Support", { firstname, lastname, email, message, company, role, year}, "./template/contactUs.handlebars");

            res.json({
                success: true,
                message: "message sent successfully",
                ...payload
            });

        }catch (error){
            next(error);
        }
    };

    static getContact = async (req, res, next) => {
        try {
            const csv = await contacts();
            res.set({ 'Content-Disposition': 'attachment; filename="contacts.csv"', 'Content-type': 'text/csv' });
            res.send(csv);

        } catch (error) {
            next(error);
        }
    }

    static getFollowUpUsers = async (req, res, next) => {
        try {
            const csv = await get();
            res.set({ 'Content-Disposition': 'attachment; filename="contacts.csv"', 'Content-type': 'text/csv' });
            res.send(csv);

        } catch (error) {
            next(error);
        }
    }
}
