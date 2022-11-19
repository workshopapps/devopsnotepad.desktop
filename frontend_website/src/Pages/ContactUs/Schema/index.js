import * as yup from "yup";

export const contactUsSchema = yup.object().shape({
    firstName: yup.string().required("First Name Required"),
    lastName: yup.string().required("Last Name Required"),
    phone: yup.number().positive().integer().required("Phone Number Required"),
    subject: yup.string().required("Subject Required"),
    message: yup.string().required("Message Required"),
    
})