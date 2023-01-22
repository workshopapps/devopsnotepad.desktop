import config from "../../config/index.js";
import ContactUsRepo from "../../database/repositories/contactUsRepo.js";
import Email from "../../utils/email/sendEmail.js";
import { presentYear } from "../../utils/index.js";

export default async function create(params) {
    const {email, firstName, lastName, company, role} = params;
    const year = presentYear();
    const videoUrl = "www.google.com";

    await ContactUsRepo.create(params);
    
    let mail = new Email(
        config.email.opspad_email_user,
        config.email.opspad_email_pass
      );

      mail.sendEmail(
        email,
        'Welcom to Opspad',
        { firstName, lastName, videoUrl, year },
        './template/followup.handlebars'
      );
}

