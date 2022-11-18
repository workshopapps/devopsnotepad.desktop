import Header from './Header/Header';

import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';

import classes from './ComingSoon.module.css';

const ComingSoon = () => {
  return (
    <section className={classes.comingsoon}>
      <Header />
      <LeftAligned />
      <RightAligned />
    </section>
  );
};
export default ComingSoon;
