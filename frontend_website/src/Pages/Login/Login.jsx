import { BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import Form from './Form';
import classes from './Login.module.css';

const Login = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/signup');
  };
  return (
    <div className={classes.login} data-testid='login__page'>
      <h1 className={classes.h1}>Welcome back!</h1>
      <Form />
      <div className={classes.p__box}>
        <div className={classes.div}></div>
        <p className={classes.p}>or sign up with</p>
        <div className={classes.div}></div>
      </div>
      <div className={classes.svg__box}>
        <BsFacebook className={classes.svg} onClick={navigateHandler} />
      </div>
      <h4 className={classes.h4}>
        Don’t have an account yet?{' '}
        <Link to='/signup' className={classes.a}>
          Sign Up
        </Link>
      </h4>
    </div>
  );
};

export default Login;
