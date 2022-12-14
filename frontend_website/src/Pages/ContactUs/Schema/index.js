import * as yup from 'yup';

export const contactUsSchema = yup.object().shape({
  firstname: yup.string().required('First Name Required'),
  lastname: yup.string().required('Last Name Required'),
  email: yup.string().email().required('Email is Required'),
  subject: yup.string().required('Subject Required'),
  message: yup.string().required('Message Required'),
});
