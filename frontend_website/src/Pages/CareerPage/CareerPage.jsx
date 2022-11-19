import Header from './Header/Header';
import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';
import Perks from './Perks/Perks';
import Openings from './Openings/Openings';
import SignUp from './SignUp/SignUp';
import Values from './Values/Values';
import Words from './Words/Words';

import classes from './CareerPage.module.css';

const CareerPage = () => {
  return (
    <div className={classes.careerpage} data-testid='career__page'>
      <Header />
      <LeftAligned />
      <RightAligned />
      <Values />
      <Words />
      <Perks />
      <Openings />
      <SignUp />
    </div>
  );
};
export default CareerPage;
