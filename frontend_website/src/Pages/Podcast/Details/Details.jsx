import { useNavigate } from 'react-router-dom';
import Button from '../../CareerPage/Button/Button';
import mark from '../images/mark.png';

import classes from './Detail.module.css';

const Details = () => {
  const navigate = useNavigate();
  return (
    <section className={classes.box}>
      <div className={classes.detail}>
        <h1 className={classes.h1}>
          “To learn more about how Opspad is helping thousands of users achieve
          the right balance. Click the register button below.”
        </h1>
        <Button className={classes.button} onClick={() => navigate('/signup')}>
          Register now
        </Button>
        <p className={classes.p}>
          Visit our websites to get access the eventful package of all the
          podcast available to you.
          <br />
          <span className={classes.span}>www.opspad.com</span>
        </p>

        <h2 className={classes.h2}>
          The DevOps Lifestyle Podcast isi brought to you by Team SandPaper,
          creators of the OpsPad
        </h2>
        <p className={classes.p}>
          We appreciate your decision to jon the Devops Lifestyle Podcast{' '}
        </p>

        <div className={classes.div}>
          <figure className={classes.figure}>
            <img src={mark} alt='Mark' className={classes.img} />
          </figure>
          <div className={classes.name__box}>
            <div className={classes.name}>Mark</div>
            <div className={classes.ceo}>CEO Opspad</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Details;
