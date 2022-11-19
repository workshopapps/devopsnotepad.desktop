import classes from './Values.module.css';
const Values = () => {
  return (
    <>
      <h1 className={classes.h1}>We take pride in our values</h1>
      <section className={classes.section} data-testid='career__values'>
        <div className={`${classes.box} ${classes.box_1}`}>
          Build amazing stuff <br />
          together
        </div>
        <div className={`${classes.box} ${classes.box_2}`}>
          Do <br />
          great work
        </div>
        <div className={`${classes.box} ${classes.box_3}`}>
          Shoot for the <br /> stars
        </div>
        <div className={`${classes.box} ${classes.box_4}`}>Teamwork</div>
        <div className={`${classes.box} ${classes.box_5}`}>
          Bond <br /> together
        </div>
        <div className={`${classes.box} ${classes.box_6}`}>Act swiftly</div>
      </section>
    </>
  );
};
export default Values;
