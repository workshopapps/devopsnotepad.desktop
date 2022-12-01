import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

import LandingPage from './Pages/LandingPage/LandingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Integration from './Pages/Integration/Integration';
import Faq from './Pages/Faq/Faq';
import OurTeam from './Pages/TeamPage/OurTeam';
import AllTeam from './Pages/TeamPage/AllTeam';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import CareerPage from './Pages/CareerPage/CareerPage';
import Partner from './Pages/Partner/Partner';
import Features from './Pages/Features/Features';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NewsRoom from './Pages/NewsRoom/NewsRoom';
import DemoPage from './Pages/DemoPage/DemoPage';
import Csr from './Pages/Csr/Csr';
import ErrorPage from './Pages/404Page/ErrorPage';
import DevopsCommunity from './Pages/DevopsCompunity/DevopsCommunity';
import Blog from './Pages/Blog/Blog';
import Prices from './Pages/Prices/Prices';
import PricePayment from './Pages/PricePayment/PricePayment';
import ForgetPassword from './Pages/ForgetPassword/ForgotPassword';
import Podcast from './Pages/Podcast/Podcasts';
import { About } from './Pages/About/About';
// import Form from './Pages/Partner/Form';
import BestPractice from './Pages/BestPractice/BestPractices';

import classes from './App.module.css';
import Terms from './Pages/TermsOfUSe/Terms';
import TermsOfService from './Pages/TermsOfUSe/Index';
// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role='alert' className={classes.error}>
      <p className={classes.p}>Something went wrong!</p>
      <pre className={classes.pre}>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary} className={classes.button}>
        Restart app
      </button>
    </div>
  );
};

function App() {
  const navigate = useNavigate();

  return (
    <React.Fragment>
      <Navigation />

      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Routes>
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/integrations' element={<Integration />} />
          <Route path='/faq' exact element={<Faq />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/coming-soon' exact element={<ComingSoon />} />
          <Route path='/careers' exact element={<CareerPage />} />
          <Route path='/contact-us' exact element={<ContactUs />} />
          <Route path='/terms-of-service' exact element={<TermsOfService />} />
          <Route path='/about-us' exact element={<About />} />
          <Route path='/features' exact element={<Features />} />
          <Route path='/news-room' exact element={<NewsRoom />} />
          <Route path='/demo' exact element={<DemoPage />} />
          <Route path='/our-team' exact element={<OurTeam />} />
          <Route path='/devops-community' exact element={<DevopsCommunity />} />
          <Route path='/blog' exact element={<Blog />} />
          <Route path='/our-team/all-teams' exact element={<AllTeam />} />
          <Route path='/prices' exact element={<Prices />} />
          <Route
            path='/prices/payment/:state/:id'
            exact
            element={<PricePayment />}
          />
          <Route path='/partners' exact element={<Partner />} />
          <Route path='/csr' exact element={<Csr />} />
          <Route path='/forgot-password' exact element={<ForgetPassword />} />
          <Route path='/podcasts' exact element={<Podcast />} />
          {/* <Route path='/form' exact element={<Form />} /> */}
          <Route path='/best-practices' exact element={<BestPractice />} />
          <Route path='/terms-of-service' exact element={<Terms />} />

          {/* This will be rendered on going to a path that does not exist in any of the paths above */}
          <Route path='*' exact element={<ErrorPage />} />
        </Routes >
      </ErrorBoundary >
      <Footer />
    </React.Fragment >
  );
}

export default App;
