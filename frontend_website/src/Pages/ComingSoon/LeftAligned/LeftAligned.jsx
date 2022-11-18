import img2 from "../../../assets/coming_soon-assets/Images/img2.png";

import classes from "./LeftAligned.module.css";

const LeftAligned = () => {
  return (
    <div className={classes.leftaligned}>
      <div className={classes.left}>
        <h2 className={classes.h2}>IOS Platform</h2>
        <p className={classes.p}>
          We are lauching our Product on the IOS Platform, to enale our end
          users enjoy awesome features like the Screen reader and also have
          access to Voice typing.
        </p>
      </div>
      <figure className={classes.right}>
        <img src={img2} alt="IOS Platform" className={classes.img} />
      </figure>
    </div>
  );
};
export default LeftAligned;
