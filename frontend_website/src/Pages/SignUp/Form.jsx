import { useState } from 'react';

import { ValidateEmail, ValidatePassword } from './lib';

import Button from '../CareerPage/Button/Button';
import Input from '../Login/Input';
import LoadingSpinner from '../../Component/LoadingSpinner/LoadingSpinner';
import { useNavigate } from 'react-router-dom';

import classes from './Form.module.css';

const Form = (props) => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false)
  const [passwordIcon] = useState(true)
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    nameIsValid: false,
    emailIsValid: false,
    passwordIsValid: false,
    nameIsFocus: false,
    emailIsFocus: false,
    passwordIsFocus: false,
    formIsValid: false,
  });

  const nameOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, username: e.target.value };
    });
  };

  const emailOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, email: e.target.value };
    });
    const { passwordIsValid } = form;
    const isValid = ValidateEmail(e.target.value);

    if (passwordIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  const passwordOnChangeHandler = (e) => {
    setForm((prev) => {
      return { ...prev, password: e.target.value };
    });

    const { emailIsValid } = form;
    const isValid = ValidatePassword(e.target.value);

    if (emailIsValid && isValid) {
      setForm((prev) => {
        return { ...prev, formIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, formIsValid: false };
      });
    }
  };

  // Allowing the user to unfocus the input field before checking if the input field is correct.
  const nameOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, nameIsFocus: true };
    });

    if (form.username.length >= 3 && form.username.length <= 8) {
      setForm((prev) => {
        return { ...prev, nameIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, nameIsValid: false };
      });
    }
  };

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

  const passwordOnBlurHandler = (e) => {
    setForm((prev) => {
      return { ...prev, passwordIsFocus: true };
    });

    const isValid = ValidatePassword(form.password);
    if (isValid) {
      setForm((prev) => {
        return { ...prev, passwordIsValid: true };
      });
    } else {
      setForm((prev) => {
        return { ...prev, passwordIsValid: false };
      });
    }
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Send form details to backend
    props.onSubmit({
      name: form.username,
      email: form.email,
      password: form.password,
    });

    setForm({
      username: '',
      email: '',
      password: '',
      nameIsValid: false,
      emailIsValid: false,
      passwordIsValid: false,
      nameIsFocus: false,
      emailIsFocus: false,
      passwordIsFocus: false,
      formIsValid: false,
    });
  };

  return (
    <form
      className={classes.login__form}
      onSubmit={submitHandler}
      data-testid='login__form'
    >
      <Input
        id='username'
        label='Username'
        type='text'
        invalid={!form.nameIsValid && form.nameIsFocus ? 'invalid' : ''}
        placeholder='Enter your username'
        value={form.username}
        onChange={nameOnChangeHandler}
        onBlur={nameOnBlurHandler}
      />
      {form.nameIsFocus && !form.nameIsValid && (
        <pre className={classes.invalid__input}>
          Enter a username of length above 3 & not more than 8
        </pre>
      )}
      <Input
        id='email'
        label='Email'
        type='email'
        invalid={!form.emailIsValid && form.emailIsFocus ? 'invalid' : ''}
        placeholder='example@email.com'
        value={form.email}
        onChange={emailOnChangeHandler}
        onBlur={emailOnBlurHandler}
      />
      {form.emailIsFocus && !form.emailIsValid && (
        <pre className={classes.invalid__input}>Enter a valid email.</pre>
      )}
      <Input
        id='password'
        label='Password'
        type={showPassword ? 'text' : 'password'}
        invalid={!form.passwordIsValid && form.passwordIsFocus ? 'invalid' : ''}
        placeholder='MinLength(8), uppercase, lowercase, character, number.'
        value={form.password}
        onChange={passwordOnChangeHandler}
        onBlur={passwordOnBlurHandler}
        passwordIcon={passwordIcon}
        showPassword={showPassword}
        setShowPassword={setShowPassword}
      />
      {form.passwordIsFocus && !form.passwordIsValid && (
        <pre className={classes.invalid__input}>
          MinLength(8), uppercase, lowercase, character, number
        </pre>
      )}
      <div>
        {props.isLoading && <LoadingSpinner />}
        {!props.isLoading && props.error.hasError && (
          <p
            style={{ textAlign: 'center' }}
          >{`Sign up failed! - ${props.error.message}`}</p>
        )}
        {props.message && (
          <p className={classes.span__box}>
            Kindly check your inbox to verify your email
            <span>
              <Button
                className={classes.success_button}
                onClick={() => navigate('/login')}
              >
                and then Login to continue
              </Button>
            </span>
          </p>
        )}
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
