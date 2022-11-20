import { BsFacebook } from 'react-icons/bs';
import { Link, useNavigate } from 'react-router-dom';

import Form from './Form';
import classes from './SignUp.module.css';

const SignUp = () => {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/facebook');
  };
  return (
    <div className={classes.login} data-testid='signup__page'>
      <h1 className={classes.h1}>Hello!</h1>
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
        Already have an acount?{' '}
        <Link to='/login' className={classes.a}>
          Sign In
        </Link>
      </h4>
    </div>
  );
};

export default SignUp;
