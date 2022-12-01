import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';

import { Link } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';

import Form from './Form';
import { useContext, useEffect } from 'react';
import classes from './Login.module.css';
import { UserContext } from '../../store/UserContext';

const clientId =
  '336204185207-fhl85d0e7soq2fbukuv6bqb926re03gp.apps.googleusercontent.com';

const Login = () => {
  const { addUserHandler } = useContext(UserContext);
  // const navigate = useNavigate();

  const onSuccess = (res) => {
    // console.log('success:', res);
    addUserHandler(res);
    // navigate('/');
  };
  const onFailure = (err) => {
    console.log('failed:', err);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <div className={classes.login} data-testid='login__page'>
      <h1 className={classes.h1}>Welcome back!</h1>
      <Form />
      <div className={classes.p__box}>
        <div className={classes.div}></div>
        <p className={classes.p}>or sign in with</p>
        <div className={classes.div}></div>
      </div>
      <div className={classes.svg__box}>
        <img src={google} alt='Google' className={classes.svg} />
        <GoogleLogin
          clientId={clientId}
          buttonText=''
          className={`${classes.button}`}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
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
