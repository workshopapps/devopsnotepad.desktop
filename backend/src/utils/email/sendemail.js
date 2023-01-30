import nodemailer from "nodemailer";
import handlebars from "handlebars";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default class Email {
    constructor (user, password) {
        this.user = user;
        this.password = password;
    }

    createTransport() {
        let transporter = nodemailer.createTransport({
            host: config.email.host,
            port: config.email.port,
            secure: true, // true for 465, false for other ports
            logger: true,
            debug: true,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const source = fs.readFileSync(path.join(__dirname, template), "utf8");
        const compiledTemplate = handlebars.compile(source);

        const mailOptions = {
            from: process.env.FROM_EMAIL,
            to: email,
            subject: subject,
            html: compiledTemplate(payload),
        };

        transporter.sendMail(mailOptions, function (error, info) {
            if (error) {
                console.log(error);
            } else {
                console.log("Email sent: " + info.response);
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
                from: this.user,
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