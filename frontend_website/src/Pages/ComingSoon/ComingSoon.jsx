import { Helmet } from 'react-helmet-async';

import Header from './Header/Header';
import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';

import classes from './ComingSoon.module.css';

const ComingSoon = () => {
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Coming soon</title>
        <meta name='description' content='Our future release' />
        <link rel='canonical' href='/coming-soon' />
      </Helmet>

      {/* Application */}
      <section className={classes.comingsoon} data-testid='coming__soon'>
        <Header />
        <LeftAligned />
        <RightAligned />
      </section>
    </>
  );
};
export default ComingSoon;
