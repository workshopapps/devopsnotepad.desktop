import classes from './Values.module.css';
const Values = () => {
  return (
    <section className={classes.section}>
      <div className={`${classes.box} ${classes.box_1}`}>Act swiftly</div>
      <div className={`${classes.box} ${classes.box_2}`}>Do great work</div>
      <div className={`${classes.box} ${classes.box_3}`}>Team work</div>
      <div className={`${classes.box} ${classes.box_4}`}>
        Build amazing stuff
      </div>
      <div className={`${classes.box} ${classes.box_5}`}>Bond together</div>
      <div className={`${classes.box} ${classes.box_6}`}>
        Shoot for the stars
      </div>
    </section>
  );
};
export default Values;
