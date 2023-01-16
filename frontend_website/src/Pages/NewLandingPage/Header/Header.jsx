import Button from '../../CareerPage/Button/Button';
import classes from './Header.module.css';
const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.left}>
        <h1>
          The <span>Ultimate Notepad</span>
        </h1>
        <h4 className={classes.h4}></h4>
        <p className={classes.p}></p>
        <div className={classes.btn__box}>
          <Button className={`${classes.btn} ${classes.btn__primary}`}>
            Try Free
          </Button>
          <Button className={`${classes.btn} ${classes.btn__scondary}`}>
            Get a Demo
          </Button>
        </div>
      </div>
      <div className={classes.right}></div>
    </header>
  );
};
export default Header;
