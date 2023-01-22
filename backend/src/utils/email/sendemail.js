import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { ServiceError } from "../../lib/errors/index.js";
import config from "../../config/index.js";


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class Email {
    constructor (user, password) {
        this.user = user;
        this.password = password;
    }

    createTransport() {
        let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: config.email.host,
            port: config.email.port,
            secure: false, // true for 465, false for other ports
            logger: true,
            debug: true,
            auth: {
                user: this.user, // generated ethereal user
                pass: this.password, // generated ethereal password
            },
        });

        return transporter;
    };

    send(transporter, mailOptions) {
        transporter.sendMail(mailOptions, function (error) {
            if (error) {
                throw new ServiceError(error);
            }
        });
    }

    sendEmail(email, subject, payload, templatePath) {
        try {
            // Transporter authenticates with support email credentials
            const transporter = this.createTransport();
            const source = fs.readFileSync(path.join(__dirname, templatePath), "utf8");
            const compiledTemplate = handlebars.compile(source);

            const mailOptions = {
                to: email,
                subject,
                html: compiledTemplate(payload),
            };

            this.send(transporter, mailOptions);

        } catch (error) {
            return error;
        }
    }
}