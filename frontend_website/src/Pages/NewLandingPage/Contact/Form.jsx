import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../CareerPage/Button/Button';
import Input from './Input';

import classes from './Form.module.css';
import LoadingSpinner from '../../../Component/LoadingSpinner/LoadingSpinner';
const Form = (props) => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    job: 'what',
    others: '',
  });
  const firstNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstName: e.target.value };
    });
  };
  const lastNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastName: e.target.value };
    });
  };
  const companyNameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, companyName: e.target.value };
    });
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
  };
  const jobOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, job: e.target.value };
    });
  };

  const othersOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, others: e.target.value };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const job = form.job === 'others' ? form.others : form.job;

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      firstname: form.firstName,
      lastname: form.lastName,
      role: job,
      company: form.companyName,
    });
  };

  return (
    <form className={classes.contact__form} onSubmit={submitHandler}>
      <h1 className={classes.h1}>Find out more...</h1>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id='firstName'
            label='First Name'
            type='text'
            placeholder="What's your first name?"
            value={form.firstName}
            onChange={firstNameOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id='lastName'
            label='Last Name'
            type='text'
            placeholder="What's your last name?"
            value={form.lastName}
            onChange={lastNameOnChangeHandler}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id='email'
            label='Email'
            type='email'
            invalid={!form.emailIsValid && form.emailIsFocus ? 'invalid' : ''}
            placeholder="What's your email address?"
            value={form.email}
            onChange={emailOnChangeHandler}
          />
        </div>
        <div className={classes.row__right}>
          <Input
            id='companyName'
            label='Company Name'
            type='text'
            placeholder='Where do you work?'
            value={form.companyName}
            onChange={companyNameOnChangeHandler}
          />
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <label className={classes.label}>Job Function</label>
          <select
            value={form.job}
            onChange={jobOnChangeHandler}
            className={classes.select}
          >
            <option value=''>What do you do?</option>
            <option value='DevOps'>DevOps</option>
            <option value='IT Admin'>IT Admin</option>
            <option value='Software Engineer'>Software Engineer</option>
            <option value='Server/System Admin'>Server/System Admin</option>
            <option value='Executive'>Executive</option>
            <option value='Others'>Others</option>
          </select>
        </div>
        {form.job !== 'others' && (
          <div className={classes.row__right}>&nbsp;</div>
        )}
        {form.job === 'others' && (
          <div className={classes.row__right}>
            <div>&nbsp;</div>
            <input
              className={classes.input}
              placeholder='What do you do?'
              value={form.others}
              onChange={othersOnChangeHandler}
            />
          </div>
        )}
      </div>
      <h3 className={classes.h3}>
        By submitting this form, I confirm that I have read and agree to the{' '}
        <Link to='/terms-of-service' className={classes.link}>
          Privacy Policy.
        </Link>
      </h3>
      <div style={{ margin: '3rem 0' }}>
        {props?.isLoading && <LoadingSpinner />}
        {!props?.isLoading && props?.error?.hasError && (
          <p className={classes.error__message}>
            {`${props?.error?.message}. Try again!!!`}{' '}
          </p>
        )}
        {!props?.isLoading &&
          !props?.error?.hasError &&
          props.response?.message === 'successful' && (
            <p className={classes.success__message}>
              Your details has been submitted successfully.
            </p>
          )}
      </div>

      <div className={classes.btn__box}>
        <Button id='btn__submit' type='submit' className={classes.button}>
          Get Started
        </Button>
      </div>
    </form>
  );
};
export default Form;
