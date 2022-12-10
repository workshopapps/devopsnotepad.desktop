import { body } from "express-validator";

import { subjectValMsg, messageValMsg, nameValMsg, emailValMsg } from "./validationMsg"; 

export const contactUsValidator = [
    body("firstname", nameValMsg)
        .notEmpty()
        .custom((value) => value.length > 1),

    body("lastname", nameValMsg)
        .notEmpty()
        .custom((value) => value.length > 1),

    body("subject", subjectValMsg)
        .notEmpty()
        .custom((value) => value.length > 1),

    body("message", messageValMsg)
        .notEmpty()
        .custom((value) => value.length > 1),

    body("email", emailValMsg).notEmpty().isEmail(),
]; 