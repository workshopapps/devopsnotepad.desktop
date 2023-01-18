import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import Testimonial from '../FreeTrial/Testimonial/Testimonial';
import Slide from '../FreeTrial/Slide/Slide'
import Faqs from './AskQuestions/Faqs';
// import Centered from './Centered/Centered';
import Contact from './Contact/Contact';
import Header from './Header/Header';
import LefttAligned from './LeftAligned/LeftAlighned';
import RightAligned from './RightAligned/RightAligned';
import style from './LandingPage.module.css'

const LandingPage = () => {
  return (
    <section className={style.wrapper}>
      <Navigation />
      <Header />
      <RightAligned />
      <LefttAligned />
      {/* <Centered /> */}
      <Testimonial />
      <Slide />
      <Faqs />
      <Contact />
      <Footer />
    </section>
  );
};
export default LandingPage;
