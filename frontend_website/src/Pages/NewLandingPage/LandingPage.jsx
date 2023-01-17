import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import Faqs from './AskQuestions/Faqs';
import Centered from './Centered/Centered';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import LefttAligned from './LeftAligned/LeftAlighned';
import RightAligned from './RightAligned/RightAligned';

const LandingPage = () => {
  return (
    <section>
      <Navigation />
      <Header />
      <RightAligned />
      <LefttAligned />
      <Centered />
      <Faqs />
      <Contact />
      <Footer />
    </section>
  );
};
export default LandingPage;
