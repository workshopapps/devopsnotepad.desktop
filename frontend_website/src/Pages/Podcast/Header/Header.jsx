import pod1 from '../images/pod1.png';

import Button from '../../CareerPage/Button/Button';

import classes from './Header.module.css';

const Header = () => {
  return (
    <div className={classes.leftAligned} data-testid='header' id='header'>
      <div className={classes.left}>
        <h1 className={classes.h1}>
          Welcome To <span className={classes.span}> Opspad Podcast</span> and
          Your Hosting Platform
        </h1>
        <p className={classes.p}>
          Opspad podcast is an easy and amazing way to create, transmit and
          promote your podcast. All you need for thriving & productive podcast.
        </p>

        <Button className={classes.button}>Get started</Button>
      </div>
      <figure className={classes.right}>
        <img src={pod1} alt='updates' className={classes.img} />
      </figure>
    </div>
  );
};
export default Header;
