import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../CareerPage/Button/Button';
import Input from './Input';

import classes from './Form.module.css';

const Form = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    emailIsValid: false,
    passwordIsValid: false,
    emailIsFocus: false,
    passwordIsFocus: false,
    formIsValid: false,
  });

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });

    if (form.email.includes('@')) {
      setForm((prev) => {
        return { ...prev, emailIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, emailIsValid: false };
      });
    }
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });

    if (form.password.length > 6) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }

    const { emailIsValid, passwordIsValid } = form;

    if (emailIsValid && passwordIsValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct
  const emailOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, emailIsFocus: true };
    });
  };

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
  };

  return (
    <form className={classes.login__form} onSubmit={submitHandler}>
      <Input
        id='email'
        label='Email'
        type='email'
        invalid={!form.emailIsValid && form.emailIsFocus ? 'invalid' : ''}
        placeholder='example@email.com'
        value={form.name}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>
          Enter a email with the @ symbol
        </pre>
      )}
      <Input
        id='password'
        label='Password'
        type='text'
        invalid={!form.passwordIsValid && form.passwordIsFocus ? 'invalid' : ''}
        placeholder='Must be 7 characters'
        value={form.email}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          Enter a password of length 7 and above
        </pre>
      )}

      <div className={classes.checkbox}>
        <div>
          <input
            type='checkbox'
            name='checkbox'
            value='value'
            id='checkbox'
            className={classes.checkbox__input}
          />
          <label htmlFor='checkbox' className={classes.label}>
            Remember me.
          </label>
        </div>
        <Link className={classes.password}>Forgot password</Link>
      </div>
      <div className={classes.btn__box}>
        <Button
          id='btn__submit'
          type='submit'
          disabled={!form.formIsValid}
          className={classes.button}
        >
          Sign up
        </Button>
      </div>
    </form>
  );
};
export default Form;
