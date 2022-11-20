import { useNavigate } from 'react-router-dom';
import img6 from '../../../assets/career_page-assets/Images/img6.png';

import Button from '../Button/Button';

import classes from './RightAligned.module.css';

const RightAligned = () => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate('/about-us');
  };
  return (
    <li className={classes.rightaligned} data-testid='right__aligned'>
      <figure className={classes.left}>
        <img src={img6} alt='who are we' className={classes.img} />
      </figure>
      <div className={classes.right}>
        <h2 className={classes.h2}>Who we are</h2>
        <p className={classes.p}>
          We are a small team of highly dedicated and ambitious people. We are
          curious, funny radically honest yet kind, and we thrive on
          collaboration and transparency.If you are interested in working in a
          fast growth environnment see our openings below.
        </p>
        <Button className={classes.button} onClick={navigateHandler}>
          See more about us
        </Button>
      </div>
    </li>
  );
};
export default RightAligned;
