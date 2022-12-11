import { useContext, useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../store/UserContext';

// import google from '../../assets/login_page-assets/google.png';
import useFetch from '../../hooks/useFetch';

import Form from './Form';
import classes from './SignUp.module.css';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

const SignUp = () => {
  const [message, setMessage] = useState('');

  const { addUserHandler } = useContext(UserContext);
  // Using a custom hook
  const { isLoading, error, fetchRequest: createAccount } = useFetch();
  // A function that will get response from the request made
  const getResponseData = (responseObj) => {
    console.log(responseObj, 'Login Fresponse');
    addUserHandler(responseObj?.user);
    const userObj = JSON.stringify(responseObj);
    localStorage.setItem('signedInUser', userObj);
    if (responseObj?.success) {
      setMessage('Success!!!');
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
      client_id: process.env.REACT_APP_GOOGLE_ID,
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

  const signUpHandler = async (formData) => {
    createAccount(
      {
        url: 'https://opspad.hng.tech/api/auth/signup',
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
      <div className={classes.login} data-testid='signup__page'>
        <h1 className={classes.h1}>Hello!</h1>
        <Form
          onSubmit={signUpHandler}
          isLoading={isLoading}
          error={error}
          message={message}
        />
        <div className={classes.p__box}>
          <div className={classes.div}></div>
          <p className={classes.p}>or sign up with</p>
          <div className={classes.div}></div>
        </div>
        <div className={classes.svg__box}>
          <div id='google-login'></div>
        </div>
        <h4 className={classes.h4}>
          Already have an acount?{' '}
          <Link to='/login' className={classes.a}>
            Sign In
          </Link>
        </h4>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
