import img2 from '../../../assets/coming_soon-assets/Images/img2.png';

import classes from './LeftAligned.module.css';

const LeftAligned = () => {
  return (
    <div className={classes.leftaligned} data-testid='coming__left'>
      <div className={classes.left}>
        <h2 className={classes.h2}>IOS Platform</h2>
        <p className={classes.p}>
          OpsPad Lauches on iOS Platform,with awesome features like screen
          reader and voice typing.
        </p>
      </div>
      <figure className={classes.right}>
        <img src={img2} alt='IOS Platform' className={classes.img} />
      </figure>
    </div>
  );
};
export default LeftAligned;
