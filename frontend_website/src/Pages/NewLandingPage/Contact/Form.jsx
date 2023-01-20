import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../CareerPage/Button/Button';
// import { ValidateEmail } from '../../SignUp/lib';
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
    emailIsFocus: false,
    lastNameIsFocus: false,
    firstNameIsFocus: false,
    companyNameIsFocus: false,
    emailIsValid: false,
    firstNameIsValid: false,
    lastNameIsValid: false,
    companyNameIsValid: false,
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

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });

    if (e.target.value.includes('@')) {
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
    if (e.target.value.length > 3) {
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

  const submitHandler = (event) => {
    event.preventDefault();

    const job = form.job === 'others' ? form.others : form.job;

    // Send form details to backend
    props.onSubmit({
      email: form.email,
      firstName: form.firstName,
      lastName: form.lastName,
      job: job,
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
              !form.lastNameIsValid && form.firstNameIsFocus ? 'invalid' : ''
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
          <label className={classes.label}>Job Function</label>
          <select
            value={form.job}
            onChange={jobOnChangeHandler}
            className={classes.select}
          >
            <option value='what'>What do you do?</option>
            <option value='devops'>DevOps</option>
            <option value='it_admin'>IT Admin</option>
            <option value='sofware_engineers'>Software Engineer</option>
            <option value='server__system--admin'>Server/System Admin</option>
            <option value='Executive'>Executive</option>
            <option value='others'>Others</option>
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
          <p className={classes.error__message}>{`${props?.error?.message}`}</p>
        )}
        {!props?.isLoading && !props?.error?.hasError && (
          <div className={classes.success__message}>
            {props?.response?.message}
          </div>
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
