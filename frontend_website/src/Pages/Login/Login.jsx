import { GoogleLogin } from 'react-google-login';

import { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import useFetch from '../../hooks/useFetch';
import { UserContext } from '../../store/UserContext';

import Form from './Form';
import classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const { addUserHandler } = useContext(UserContext);

  // Using a custom hook
  const { isLoading, error, fetchRequest: LoginRequest } = useFetch();

  // A function that will get response from the request made
  const getResponseData = (responseObj) => {
    if (responseObj?.message === 'Logged in Successfully') {
      addUserHandler(responseObj);
      const userObj = JSON.stringify(responseObj);
      localStorage.setItem('loggedInUser', userObj);
      navigate('/server');
    } else {
      console.log(responseObj, 'error');
    }
  };

  const signInHandler = async (formData) => {
    LoginRequest(
      {
        url: 'https://opspad.hng.tech/api/auth/login',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'application/json',
        },
      },
      getResponseData,
    );
  };

  // Google login
  const getGoogleResponseData = (responseObj) => {
    console.log(responseObj, 'google');
  };

  const successHandler = (response) => {
    console.log(response);

    const { tokenId } = response;
    LoginRequest(
      {
        url: 'https://opspad.hng.tech/api/auth/google-login',
        method: 'POST',
        body: { token: tokenId },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      getGoogleResponseData,
    );
  };
  const failureHandler = (responseObj) => {
    console.log(responseObj);
  };
  return (
    <>
      <Navigation />
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
            // onClick={googleSignInHandler}
          />
          <GoogleLogin
            buttonText=''
            clientId='336204185207-fhl85d0e7soq2fbukuv6bqb926re03gp.apps.googleusercontent.com'
            onSuccess={successHandler}
            onFailure={failureHandler}
            cookiePolicy={'single_host-origin'}
            className={classes.invisible}
          />
        </div>
        <h4 className={classes.h4}>
          Don’t have an account yet?{'  '}
          <Link to='/signup' className={classes.a}>
            Sign Up
          </Link>
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default Login;
