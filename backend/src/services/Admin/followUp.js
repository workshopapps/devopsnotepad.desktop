import config from "../../config/index.js";
import AdminRepo from "../../database/repositories/adminRepo.js";
import Email from "../../utils/email/sendemail.js";
import { presentYear } from "../../utils/index.js";

export default async function create(params) {
    const {email, firstName, lastName} = params;
    const year = presentYear();
    const videoUrl = "www.google.com";

    await AdminRepo.createContact(params);
    
    let mail = new Email(
        config.email.opspad_email_user,
        config.email.opspad_email_pass
      );

      mail.sendEmail(
        email,
        'Welcome to Opspad',
        { firstName, lastName, videoUrl, year },
        './template/followup.handlebars'
      );
}

