import img4 from '../../../assets/career_page-assets/Images/img4.png';

import Button from '../Button/Button';

import classes from './Header.module.css';

const Header = () => {
  const scrollHandler = () => {
    const section = document.querySelector('#openings');
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className={classes.leftAligned} data-testid='header' id='header'>
      <div className={classes.left}>
        <h1 className={classes.h1}>
          Join <span className={classes.span}>Our Team</span>
        </h1>
        <p className={classes.p}>
          Team Sandpaper is guided by respect, transparency and direct feedback.
          We are a customer-based company committed to creating a safe working
          environment for our user. We’re building a culture at Team Sandpaper
          where amazing people (like you) can do their best work. Get started
          with us today!
        </p>

        <Button className={classes.button} onClick={scrollHandler}>
          View Open Positions
        </Button>
      </div>
      <figure className={classes.right}>
        <img src={img4} alt='updates' className={classes.img} />
      </figure>
    </div>
  );
};
export default Header;
