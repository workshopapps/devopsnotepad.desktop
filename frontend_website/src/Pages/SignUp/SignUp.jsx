import { Link } from 'react-router-dom';

import google from '../../assets/login_page-assets/google.png';

import Form from './Form';
import classes from './SignUp.module.css';

const SignUp = () => {
  // const navigate = useNavigate();

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
        <img src={google} alt='Google' className={classes.svg} />
        {/* <GoogleLogin
          clientId={clientId}
          buttonText=''
          className={`${classes.button}`}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        /> */}
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
