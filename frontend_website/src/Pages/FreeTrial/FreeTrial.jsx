import React from 'react';
import { Helmet } from 'react-helmet-async';
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
<<<<<<< HEAD
import style from './FreeTrial.module.css';
=======
import Faq from './FAQ/Faq'
import style from './FreeTrial.module.css'
>>>>>>> 2b1b327f0d13d5152e5fa59cf5fe5de54fbb14ff
import HeroSection from './HeroSection/HeroSection';
import Info from './Info/Info';
import MailSection from './MailSection/MailSection';
import Faqs from './NewFaqs/Faqs';
import Slide from './Slide/Slide';
import Testimonial from './Testimonial/Testimonial';

const FreeTrial = () => {
  return (
    <>
      {/* SEO optimazation */}
      <Helmet>
        <title>Free trial</title>
        <meta name='description' content='Free trial' />
        <link rel='canonical' href='/free-trial' />
      </Helmet>
      <Navigation />
      {/* Application */}
      <section className={style.TWrapper}>
        <HeroSection />
        <Info />
        <Testimonial />
        <Slide />
        <MailSection />
        <Faqs />
      </section>
      <Footer />
    </>
  );
};

export default FreeTrial;
