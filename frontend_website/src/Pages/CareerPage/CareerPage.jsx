import { Helmet } from 'react-helmet-async';

import Header from './Header/Header';
import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';
import Perks from './Perks/Perks';
import Openings from './Openings/Openings';
import SignUp from './SignUp/SignUp';
import Values from './Values/Values';
import Words from './Words/Words';

import classes from './CareerPage.module.css';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

const CareerPage = () => {
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Careers</title>
        <meta name='description' content='join our team' />
        <link rel='canonical' href='/careers' />
      </Helmet>
      <Navigation />
      {/* Application */}
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
      <Footer />
    </>
  );
};
export default CareerPage;
