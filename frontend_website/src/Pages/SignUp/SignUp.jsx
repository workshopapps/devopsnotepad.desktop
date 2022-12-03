import { Link, useNavigate } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';
import useFetch from '../../hooks/useFetch';

import Form from './Form';
import classes from './SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();

  // Using a custom hook
  const { isLoading, error, fetchRequest: createAccount } = useFetch();

  // Sigin up with google
  const googleSignInHandler = () => {
    window.open('https://opspad.onrender.com/auth/google', '_self');
  };

  // A function that will get response from the request made
  const getResponseData = (responseObj) => {
    console.log(responseObj);
    navigate('/login');
  };

  const signUpHandler = async (formData) => {
    createAccount(
      {
        url: 'http://opspad.onrender.com/auth/signup',
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
    <div className={classes.login} data-testid='signup__page'>
      <h1 className={classes.h1}>Hello!</h1>
      <Form onSubmit={signUpHandler} isLoading={isLoading} error={error} />
      <div className={classes.p__box}>
        <div className={classes.div}></div>
        <p className={classes.p}>or sign up with</p>
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
        Already have an acount?{' '}
        <Link to='/login' className={classes.a}>
          Sign In
        </Link>
      </h4>
    </div>
  );
};

export default SignUp;
