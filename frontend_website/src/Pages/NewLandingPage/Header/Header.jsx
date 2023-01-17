import headerImg from '../assets/header_img.png';
import Button from '../../CareerPage/Button/Button';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <h1 className={classes.h1}>
          The <span className={classes.span}>Ultimate Notepad</span>
        </h1>
        <h4 className={classes.h4}>
          designed to help you take notes on your server and track your server
          activities, so you can stay organized and efficient.
        </h4>
        <p className={classes.p}>
          Take Notes, Track server activities and Manage your server logs- On
          the go
        </p>
        <div className={classes.btn__box}>
          <Button className={`${classes.btn} ${classes.btn__primary}`}>
            Try Free
          </Button>
          <Button className={`${classes.btn} ${classes.btn__secondary}`}>
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
