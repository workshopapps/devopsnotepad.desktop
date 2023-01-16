import React, { useState } from 'react';
import style from './ContactUsForm.module.css';

function ContactUsForm({ closeContact }) {
  const [formData, setFormData] = useState({});
  return (
    <div className={style.container}>
      <input
        type='button'
        className={style.dark_overlay}
        onClick={closeContact}
      />
      <form className={style.form}>
        <h2>Contact Support</h2>
        <div className={`${style.form_control} ${style.first_name}`}>
          <label htmlFor='firstName'>First Name</label>
          <input
            type='text'
            id='firstName'
            placeholder='What’s your first name?'
          />
        </div>
        <div className={`${style.form_control} ${style.last_name}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input
            type='text'
            id='lastName'
            placeholder='What’s your last name?'
          />
        </div>
        <div className={`${style.form_control} ${style.email}`}>
          <label htmlFor='email'>Email Address</label>
          <input
            type='text'
            id='email'
            placeholder='What’s your email address?'
          />
        </div>
        <div className={`${style.form_control} ${style.company}`}>
          <label htmlFor='companyName'>Company Name</label>
          <input
            type='text'
            id='companyName'
            placeholder='Where do you work?'
          />
        </div>
        <div className={`${style.form_control} ${style.job}`}>
          <label htmlFor='JobFunction'>Job Function</label>
          <input type='text' id='JobFunction' placeholder='What do you do?' />
        </div>
        <div className={`${style.form_control} ${style.feedback}`}>
          <label htmlFor='feedback'>Comment your feedback</label>
          <textarea
            name='feedback'
            id='feedback'
            placeholder='Drop a comment '
          ></textarea>{' '}
        </div>

        <span className={style.terms}>
          By submitting this form, I confirm that I have read and agree to the{' '}
          <span>Privacy Policy</span>
        </span>

        <button className={style.submit} type='submit'>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ContactUsForm;
