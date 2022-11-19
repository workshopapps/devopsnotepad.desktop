import img5 from '../../../assets/career_page-assets/Images/img5.png';

import classes from './LeftAligned.module.css';

const LeftAligned = () => {
  return (
    <section data-testid='left__aligned'>
      <h1 className={classes.h1}>
        Make a lasting impact on the future of work
      </h1>
      <li className={classes.leftaligned}>
        <div className={classes.left}>
          <h2 className={classes.h2}>
            Our app started as solutions to our own challenges
          </h2>
          <p className={classes.p}>
            Now, they shape the workday for millions worldwide.
          </p>
          <p className={classes.p}>
            More than 10 million people rely on Opspad to monitor their server
            activities, so they can optimize their network accessibility and
            productivity.
          </p>
        </div>
        <figure className={classes.right}>
          <img
            src={img5}
            alt='our app solves our problem'
            className={classes.img}
          />
        </figure>
      </li>
    </section>
  );
};
export default LeftAligned;
