import React from 'react';
import mission from './images/mission.png';
import vision from './images/vision.png';
import assist from './images/assist.png';
import classes from './About.module.css';
export const About = () => {
  return (
    <div className={classes.aboutContainer}>
      <div className={classes.banner}>
        <h1>We’re changing the whole DevOps system.</h1>

        <p>
          We are a team of techies passionate about refining excellence in the
          Tech ecosystem. This passion ispired us to create OpsPad-an elegant,
          all-in-one tool that fosters boundless creativity for DevOps engineers
          by helping them stay organized.
        </p>
      </div>

      <div className={classes.flexrow}>
        <div className={classes.flexcol}>

          <p className={classes.storyhead1}>Our Mission</p>

          <p className={classes.p_}>
            To ensure a smooth workflow for our users. Easier log analysis and
            infrastural performance. Instead of thinking, counting and
            remembering all you are doing, OpsPad helps you become more
            productive by seeing all your activities in one place. We’ve adopted
            a minimalist design aesthetic and userfriendly software that offers
            a wonderful experience for DevOps engineers.
          </p>

        </div>

        <div className={classes.imgbox}>
          <img src={mission} className={classes.imgsize} alt='img' />
        </div>
         
      </div>

      <div className={classes.flexrow2}>
        <div className={classes.flexcol}>
          <p className={classes.storyhead2}>Our Vision</p>
          <p className={classes.p_}>
            Our goal is to continue to create innovations that help techies
            manage and accomplish their goals in real time by developing
            gaol-setting software, apps, and tools to help them achieve this.
          </p>

        </div>

        <div className={classes.imgbox}>
          <img src={vision} className={classes.imgsize} alt='img' />
        </div>
      </div>

      <div className={classes.bluerow}>
        <div className={classes.flexcol}>
          <p className={classes.assist}>
            Have a question?Our team is happy to assist you
          </p>
          <p className={classes.p_}>
            Ask about DevOps Notepad, blogs, or anything else. Our highly
            trained developers are standing by, ready to help.{' '}
          </p>
          <button className={classes.btn}>Contact us</button>
        </div>
        <div className={classes.colorbglg}>
          <img src={assist} className={classes.imgsize} alt='img' />
        </div>

      </div>

    </div>
  );
};
