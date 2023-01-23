import config from "../../config/index.js";
import Email from "../../utils/email/sendEmail.js";
import { presentYear } from "../../utils/index.js";

export default async function support(payload){
    const year = presentYear();

    let mail = new Email(
        config.email.support_email_user,
        config.email.support_email_pass
    )

    mail.sendEmail("support@opspad.dev", "Opspad Support", {...payload, year}, "./template/contactUs.handlebars");

    return { message: "successfully sent" };
}