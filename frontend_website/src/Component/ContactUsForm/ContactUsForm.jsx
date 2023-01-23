import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ContactUsForm.module.css';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

function ContactUsForm({ closeContact }) {
  const [loading, setLoading] = useState(false);
  const [errorSuccessMessage, setErrorSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    role: '',
    message: '',
  });

  const { firstname, lastname, email, company, role, message } = formData;

  function onMutateForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  // Submits form to the server on click submit button
  async function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        'https://opspad.dev/api/admin/contact-support',
        {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify(formData),
        },
      );

      // If response is not successful, throw an error
      if (!response.ok) {
        throw new Error('Bad fetch response');
      }

      // const data = await response.json();
      setLoading(false);
      setErrorSuccessMessage('Successfully submitted your message');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        role: '',
        message: '',
      });
    } catch (error) {
      setErrorSuccessMessage(`An error occurred: ${error.message}, 
      Please try again later`);
    }
    setTimeout(() => {
      setErrorSuccessMessage('');
    }, 5000);
    setLoading(false);
  }

  // Redirects user to terms of service page on call
  const navigate = useNavigate();
  function onClickPrivacy() {
    closeContact();
    navigate('/terms-of-service');
  }

  return (
    <div className={style.container}>
      <input
        type='button'
        className={style.dark_overlay}
        onClick={closeContact}
      />
      <form className={style.form} onSubmit={onSubmitForm}>
        <button className={style.close} type='button' onClick={closeContact}>
          <p>&times;</p>
        </button>
        <h2>Contact Support</h2>
        <div className={`${style.form_control} ${style.first_name}`}>
          <label htmlFor='firstname'>First Name</label>
          <input
            type='text'
            id='firstname'
            placeholder='What’s your first name?'
            value={firstname}
            onChange={onMutateForm}
            required
          />
        </div>
        <div className={`${style.form_control} ${style.last_name}`}>
          <label htmlFor='lastname'>Last Name</label>
          <input
            type='text'
            id='lastname'
            placeholder='What’s your last name?'
            value={lastname}
            onChange={onMutateForm}
            required
          />
        </div>
        <div className={`${style.form_control} ${style.email}`}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='email'
            id='email'
            placeholder='What’s your email address?'
            value={email}
            onChange={onMutateForm}
            required
          />
        </div>
        <div className={`${style.form_control} ${style.company}`}>
          <label htmlFor='company'>Company Name</label>
          <input
            type='text'
            id='company'
            placeholder='Where do you work?'
            value={company}
            onChange={onMutateForm}
          />
        </div>
        <div className={`${style.form_control} ${style.job}`}>
          <label htmlFor='role'>Job Function</label>
          <select
            className={role === '' ? style.none : ''}
            name='role'
            id='role'
            value={role}
            onChange={onMutateForm}
            required
          >
            <option className={style.none} value=''>
              What do you do?
            </option>
            <option value='DevOps'>DevOps</option>
            <option value='IT Admin'>IT Admin</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Server/System Admin'>Server/System Admin</option>
            <option value='Executive'>Executive</option>
            <option value='Others'>Others</option>
          </select>
        </div>
        <div className={`${style.form_control} ${style.feedback}`}>
          <label htmlFor='message'>Comment your feedback</label>
          <textarea
            name='message'
            id='message'
            placeholder='Drop a comment'
            value={message}
            onChange={onMutateForm}
            required
          />
        </div>

        <span className={style.terms}>
          By submitting this form, I confirm that I have read and agree to the{' '}
          <span onClick={onClickPrivacy}>Privacy Policy</span>
        </span>

        <div className={style.submit}>
          <button className={style.btn} type='submit'>
            Submit
          </button>
          {loading && <LoadingAnimation />}
          {errorSuccessMessage && <span>{errorSuccessMessage}</span>}
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
