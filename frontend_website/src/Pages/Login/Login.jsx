import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';
import useFetch from '../../hooks/useFetch';
import { UserContext } from '../../store/UserContext';

import Form from './Form';
import classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const { addUserHandler } = useContext(UserContext);

  // Using a custom hook
  const { isLoading, error, fetchRequest: LoginRequest } = useFetch();

  // Sigin up with google
  const googleSignInHandler = () => {
    window.open('https://opspad.onrender.com/auth/google', '_self');
  };

  // A function that will get response from the request made
  const getResponseData = (responseObj) => {
    if (responseObj?.message === 'Logged in Successfully') {
      addUserHandler(responseObj?.user);
      navigate('/');
    } else {
      console.log(responseObj, 'error');
    }
  };

  const signInHandler = async (formData) => {
    LoginRequest(
      {
        url: 'https://opspad.onrender.com/auth/login',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      getResponseData,
    );
  };

  return (
    <div className={classes.login} data-testid='login__page'>
      <h1 className={classes.h1}>Welcome back!</h1>
      <Form onSubmit={signInHandler} isLoading={isLoading} error={error} />
      <div className={classes.p__box}>
        <div className={classes.div}></div>
        <p className={classes.p}>or sign in with</p>
        <div className={classes.div}></div>
      </div>
      <div className={classes.svg__box}>
        <img
          src={google}
          alt='Google'
          className={classes.svg}
          onClick={googleSignInHandler}
        />
      </div>
      <h4 className={classes.h4}>
        Don’t have an account yet?{'  '}
        <Link to='/signup' className={classes.a}>
          Sign Up
        </Link>
      </h4>
    </div>
  );
};

export default Login;
