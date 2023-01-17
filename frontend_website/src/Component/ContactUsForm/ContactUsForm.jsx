import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ContactUsForm.module.css';
import LoadingAnimation from '../LoadingAnimation/LoadingAnimation';

function ContactUsForm({ closeContact }) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    job: '',
    feedback: '',
  });

  const { firstName, lastName, email, company, job, feedback } = formData;

  function onMutateForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://opspad.dev/api/contact-us', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setLoading(false);
      setMessage('Successfully submitted your message');
      console.log(data);
    } catch (error) {
      console.log(error);
      setMessage(
        'An error occurred while submitting your message, please try again.',
      );
    }
    setTimeout(() => {
      setMessage('');
    }, 5000);
    setLoading(false);
    console.log(formData);
  }

  const navigate = useNavigate();
  function onClickPrivacy() {
    closeContact();
    navigate('/terms-of-service');
    setTimeout(() => {}, 500);
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
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            placeholder='What’s your first name?'
            value={firstName}
            onChange={onMutateForm}
            required
          />
        </div>
        <div className={`${style.form_control} ${style.last_name}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            placeholder='What’s your last name?'
            value={lastName}
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
          <label htmlFor='job'>Job Function</label>
          <input
            type='text'
            id='job'
            placeholder='What do you do?'
            value={job}
            onChange={onMutateForm}
          />
        </div>
        <div className={`${style.form_control} ${style.feedback}`}>
          <label htmlFor='feedback'>Comment your feedback</label>
          <textarea
            name='feedback'
            id='feedback'
            placeholder='Drop a comment'
            value={feedback}
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
          {message && <span>{message}</span>}
        </div>
      </form>
    </div>
  );
}

export default ContactUsForm;
