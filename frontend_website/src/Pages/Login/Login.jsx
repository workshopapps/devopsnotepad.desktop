import { Link } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';

import Form from './Form';
import { useContext } from 'react';
import classes from './Login.module.css';
import { UserContext } from '../../store/UserContext';

const Login = () => {
  const { addUserHandler } = useContext(UserContext);
  // const navigate = useNavigate();

  const googleSignInHandler = async () => {
    const response = await window.open(
      'http://opspad.onrender.com/auth/google',
      _self,
    );
    console.log(response);
    const responseBody = await response.json();
    console.log(responseBody);
  };

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
