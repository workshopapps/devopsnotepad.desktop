import pod2 from '../images/pod2.png';

import classes from './RightAligned.module.css';

const RightAligned = () => {
  return (
    <div className={classes.rightaligned} data-testid='coming__right'>
      <figure className={classes.left}>
        <img src={pod2} alt='Why join our community' className={classes.img} />
      </figure>
      <div className={classes.right}>
        <h2 className={classes.h2}>Why join our community?</h2>
        <p className={classes.p}>
          Joining the community allows you access to information about the
          DevOps community, and it helps us better understand the challenges our
          users have so we can better focus on solving them and improving our
          software.
        </p>
      </div>
    </div>
  );
};
export default RightAligned;
