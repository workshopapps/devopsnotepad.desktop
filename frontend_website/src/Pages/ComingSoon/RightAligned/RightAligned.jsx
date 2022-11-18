import img3 from "../../../assets/coming_soon-assets/Images/img3.png";

import classes from "./RightAligned.module.css";

const RightAligned = () => {
  return (
    <div className={classes.rightaligned}>
      <figure className={classes.left}>
        <img
          src={img3}
          alt="Added Marketing Channels"
          className={classes.img}
        />
      </figure>
      <div className={classes.right}>
        <h2 className={classes.h2}>Added Marketing Channels</h2>
        <p className={classes.p}>
          We are incoperating marketig channels into our new version to enable
          end users access social-media adverts and Email marketing.
        </p>
      </div>
    </div>
  );
};
export default RightAligned;
