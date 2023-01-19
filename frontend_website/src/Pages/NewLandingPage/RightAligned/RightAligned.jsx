import macBook from '../assets/group.gif';
import classes from './RightAligned.module.css';
const RightAligned = () => {
  return (
    <div className={classes.right_aligned}>
      <div className={classes.left}>
        <img src={macBook} alt='MacBook' className={classes.img} />
      </div>
      <div className={classes.right}>
        <h4 className={classes.h4}>
          Manage your business servers in one easy-to-use application
        </h4>
        <p className={`${classes.p} ${classes.p1}`}>
          Opspad makes it easy for you to access all your server information in
          one place across multiple devices.
        </p>
        <p className={`${classes.p} ${classes.p2}`}>
          With Opspad, you can- analyze server logs.Track server performance.
          Take notes on server performance. Securely store access credentials.
          Get live updates on your server status.
        </p>
      </div>
    </div>
  );
};
export default RightAligned;
