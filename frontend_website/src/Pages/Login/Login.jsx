import { useCallback, useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import google from '../../assets/login_page-assets/google.png';
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
    console.log(responseObj, 'Login response');
    if (responseObj?.message === 'Logged in Successfully') {
      addUserHandler(responseObj);
      const userObj = JSON.stringify(responseObj);
      localStorage.setItem('loggedInUser', userObj);
      navigate('/server');
    } else {
      console.log(responseObj, 'error');
    }
  };

  // Sigin up with google
  const googleSignInHandler = useCallback(async (response) => {
    const req = await fetch('https://opspad.hng.tech/api/auth/google-login', {
      method: 'POST',
      body: JSON.stringify({ token: response.credential }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const res = await req.json();
    getResponseData(res);
  }, []);

  useEffect(() => {
    window.google?.accounts?.id.initialize({
      client_id:
        '336204185207-fhl85d0e7soq2fbukuv6bqb926re03gp.apps.googleusercontent.com',
      callback: googleSignInHandler,
    });

    window.google?.accounts?.id.renderButton(
      document.getElementById('google-login'),
      {
        theme: 'outline',
        size: 'large',
      },
    );
    window.google?.accounts?.id.prompt();
  }, [googleSignInHandler]);

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
          <div id='google-login'></div>
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
