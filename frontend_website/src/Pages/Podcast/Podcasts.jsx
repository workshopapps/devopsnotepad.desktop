import Header from './Header/Header';
import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';
import SubHeader from './SubHeader/SubHeader';

const PodCast = () => {
  return (
    <section>
      <Header />
      <SubHeader />
      <RightAligned />
      <LeftAligned />
    </section>
  );
};

export default PodCast;
