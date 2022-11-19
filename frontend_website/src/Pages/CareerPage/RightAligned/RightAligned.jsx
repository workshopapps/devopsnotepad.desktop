import img6 from "../../../assets/career_page-assets/Images/img6.png";

import Button from "../Button/Button";

import classes from "./RightAligned.module.css";

const RightAligned = (props) => {
  return (
    <li className={classes.rightaligned}>
      <figure className={classes.left}>
        <img src={img6} alt="who are we" className={classes.img} />
      </figure>
      <div className={classes.right}>
        <h2 className={classes.h2}>Who we are</h2>
        <p className={classes.p}>
          We are a small team of highly dedicated and ambitious people. We are
          curious, funny radicall honest yet kind, and we thrive on
          collaboration and transparency.If you are interested in working in a
          fast growth environnment see our openings below.
        </p>
        <Button className={classes.button}>See more about us</Button>
      </div>
    </li>
  );
};
export default RightAligned;
