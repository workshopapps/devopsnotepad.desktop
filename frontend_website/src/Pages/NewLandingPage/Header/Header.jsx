import headerImg from '../assets/header_img.png';
import Button from '../../CareerPage/Button/Button';
import classes from './Header.module.css';
import { useNavigate } from 'react-router-dom';
const Header = () => {
  const navigate = useNavigate();
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <h1 className={classes.h1}>
          <span className={classes.span}>Reduce</span> downtime and{' '}
          <span className={classes.span}>simplify</span> server management with
          our all in one tool
        </h1>
        {/* <h4 className={classes.h4}>
          
        </h4> */}
        <p className={classes.p}>
          Setup environment in less than 100 seconds, fetch real-time logs,
          manage passwords for server tools, receive notifications of your
          server status on mobile
        </p>

        <div className={classes.btn__box}>
          <Button
            className={`${classes.btn} ${classes.btn__primary}`}
            onClick={() => navigate('/free-trial')}
          >
            Try Free
          </Button>
          <Button
            className={`${classes.btn} ${classes.btn__secondary}`}
            onClick={() => navigate('/demo')}
          >
            Get a Demo
          </Button>
        </div>
      </div>
      <div className={classes.right}>
        <img src={headerImg} alt='Opspad' className={classes.img} />
      </div>
    </header>
  );
};
export default Header;
