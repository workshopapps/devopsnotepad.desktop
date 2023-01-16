import React from 'react';
import style from './ContactUsForm.module.css';

function ContactUsForm() {
  return (
    <div className={style.container}>
      <input type='button' className={style.dark_overlay} />
      <form className={style.form}>
        <h2>Contact Support</h2>
        <div className={`${style.form_control} ${style.first_name}`}>
          <label htmlFor='firstName'>First Name</label>
          <input type='text' id='firstName' />
        </div>
        <div className={`${style.form_control} ${style.last_name}`}>
          <label htmlFor='lastName'>Last Name</label>
          <input type='text' id='lastName' />
        </div>
        <div className={`${style.form_control} ${style.email}`}>
          <label htmlFor='email'>Email Address</label>
          <input type='text' id='email' />
        </div>
        <div className={`${style.form_control} ${style.company}`}>
          <label htmlFor='companyName'>Company Name</label>
          <input type='text' id='companyName' />
        </div>
        <div className={`${style.form_control} ${style.job}`}>
          <label htmlFor='JobFunction'>Job Function</label>
          <input type='text' id='JobFunction' />
        </div>
        <div className={`${style.form_control} ${style.feedback}`}>
          <label htmlFor='feedback'>Comment your feedback</label>
          <textarea name='feedback' id='feedback'></textarea>{' '}
        </div>

        <span className={style.terms}>
          By submitting this form, I confirm that I have read and agree to the
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
