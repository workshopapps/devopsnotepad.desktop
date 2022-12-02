import classes from './SubHeader.module.css';

const SubHeader = () => {
  return (
    <div className={classes.div}>
      <h2 className={classes.h2}>PODCAST CHANNEL- The Devops Lifestyle</h2>
      <p className={classes.p}>
        The DevOps lifestyle Podcast is a weekly show for Devops professionals
        at all career levels looking for a way to manage work efficientlyand
        reduce stress. These sessions are opportunities to talk shop, get career
        advice from leadinfg lights in the industry, learn how to balance work
        and life, get the industry latest news, ask questions from experts and
        get answers.
      </p>
    </div>
  );
};

export default SubHeader;
