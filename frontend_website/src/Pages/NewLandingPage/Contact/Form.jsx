import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../CareerPage/Button/Button';
import { ValidateEmail } from '../../SignUp/lib';
import Input from './Input';

import classes from './Form.module.css';
const Form = (props) => {
  const [form, setForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
    companyName: '',
    job: '',
    emailIsFocus: false,
    lastNameIsFocus: false,
    firstNameIsFocus: false,
    companyNameIsFocus: false,
    jobNameIsFocus: false,
    emailIsValid: false,
    firstNameIsValid: false,
    lastNameIsValid: false,
    companyNameIsValid: false,
    jobIsValid: false,
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

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    const isValid = ValidateEmail(form.email);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };
  const firstNameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, firstNameIsFocus: true };
    });
    if (e.target.value.length > 4) {
      setForm((prev) => {
        return { ...prev, firstNameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, firstNameIsValid: false };
      });
    }
  };
  const lastNameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, lastNameIsFocus: true };
    });
    if (e.target.value.length > 4) {
      setForm((prev) => {
        return { ...prev, lastNameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, lastNameIsValid: false };
      });
    }
  };
  const companyNameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, companyNameIsFocus: true };
    });
    if (e.target.value.length > 4) {
      setForm((prev) => {
        return { ...prev, companyNameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, companyNameIsValid: false };
      });
    }
  };
  const jobOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, jobIsFocus: true };
    });
    if (e.target.value.length > 4) {
      setForm((prev) => {
        return { ...prev, jobIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, jobIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      job: form.job,
      companyName: form.companyName,
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
            invalid={
              !form.firstNameIsValid && form.firstNameIsFocus ? 'invalid' : ''
            }
            placeholder="What's your first name?"
            value={form.firstName}
            onChange={firstNameOnChangeHandler}
            onBlur={firstNameOnBlurHandler}
          />
          {form.firstNameIsFocus && !form.firstNameIsValid && (
            <pre className={classes.invalid__input}>MinLength(3)</pre>
          )}
        </div>
        <div className={classes.row__right}>
          <Input
            id='lastName'
            label='Last Name'
            type='text'
            invalid={
              !form.lastNameIsValid && form.irstNameIsFocus ? 'invalid' : ''
            }
            placeholder="What's your last name?"
            value={form.lastName}
            onChange={lastNameOnChangeHandler}
            onBlur={lastNameOnBlurHandler}
          />
          {form.lastNameIsFocus && !form.lastNameIsValid && (
            <pre className={classes.invalid__input}>MinLength(4)</pre>
          )}
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
            onBlur={emailOnBlurHandler}
          />
          {form.emailIsFocus && !form.emailIsValid && (
            <pre className={classes.invalid__input}>Enter a valid email</pre>
          )}
        </div>
        <div className={classes.row__right}>
          <Input
            id='companyName'
            label='Company Name'
            type='text'
            invalid={
              !form.companyNameIsValid && form.companyNameIsFocus
                ? 'invalid'
                : ''
            }
            placeholder='Where do you work?'
            value={form.companyName}
            onChange={companyNameOnChangeHandler}
            onBlur={companyNameOnBlurHandler}
          />
          {form.companyNameIsFocus && !form.companyNameIsValid && (
            <pre className={classes.invalid__input}>
              Enter a valid Company name
            </pre>
          )}
        </div>
      </div>
      <div className={classes.row}>
        <div className={classes.row__left}>
          <Input
            id='job'
            label='Job Function'
            type='text'
            invalid={!form.jobIsValid && form.jobIsFocus ? 'invalid' : ''}
            placeholder='What do you do?'
            value={form.job}
            onChange={jobOnChangeHandler}
            onBlur={jobOnBlurHandler}
          />
          {form.jobIsFocus && !form.jobIsValid && (
            <pre className={classes.invalid__input}>Enter a valid job</pre>
          )}
        </div>
        <div className={classes.row__right}>&nbsp;</div>
      </div>
      <h3 className={classes.h3}>
        By submitting this form, I confirm that I have read and agree to the{' '}
        <Link to='/privacy-policy' className={classes.link}>
          Privacy Policy.
        </Link>
      </h3>
      {/* <div style={{ margin: '3rem 0 0' }}>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p className={classes.error__message}>
            {`Sign in failed! - ${props.error.message}`}
          </p>
        )}
        {props.message && <p className={classes.verifyMsg}>
          {props.message}
        </p>}
        
      </div>
*/}
      <div className={classes.btn__box}>
        <Button id='btn__submit' type='submit' className={classes.button}>
          Get Started
        </Button>
      </div>
    </form>
  );
};
export default Form;
