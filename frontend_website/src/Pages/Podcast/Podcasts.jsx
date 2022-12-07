import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import Details from './Details/Details';
import Header from './Header/Header';
import LeftAligned from './LeftAligned/LeftAligned';
import RightAligned from './RightAligned/RightAligned';
import SubHeader from './SubHeader/SubHeader';

const PodCast = () => {
  return (
    <>
      <Navigation />
      <section>
        <Header />
        <SubHeader />
        <RightAligned />
        <LeftAligned />
        <Details />
      </section>
      <Footer />
    </>
  );
};

export default PodCast;
