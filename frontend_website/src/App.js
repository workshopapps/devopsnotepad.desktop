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
import NewsRoomViewMore from './Pages/NewsRoom/NewsRoomViewMore';
import DemoPage from './Pages/DemoPage/DemoPage';
import Csr from './Pages/Csr/Csr';
import ErrorPage from './Pages/404Page/ErrorPage';
import DevopsCommunity from './Pages/DevopsCompunity/DevopsCommunity';
import PodCast from './Pages/Podcast/Podcasts.jsx';
import Prices from './Pages/Prices/Prices';
import PricePayment from './Pages/PricePayment/PricePayment';
import ForgetPassword from './Pages/ForgetPassword/ForgotPassword';
import CheckEmail from './Pages/ForgetPassword/CheckEmail';
import Verification from './Pages/ForgetPassword/Verification';
import Success from './Pages/ForgetPassword/Success';
import NewPassword from './Pages/ForgetPassword/NewPassword';
import { About } from './Pages/About/About';
import BestPractice from './Pages/BestPractice/BestPractices';
import TermsOfService from './Pages/TermsOfUSe/Index';
import Settings from './Pages/Settings/MainSettings';

import classes from './App.module.css';
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
          <Route path='/news-room/view-all' exact element={<NewsRoomViewMore />} />
          <Route path='/demo' exact element={<DemoPage />} />
          <Route path='/our-team' exact element={<OurTeam />} />
          <Route path='/devops-community' exact element={<DevopsCommunity />} />
          <Route path='/our-team/all-teams' exact element={<AllTeam />} />
          <Route path='/partner' exact element={<Partner />} />
          <Route path='/csr' exact element={<Csr />} />
          <Route path='/podcasts' exact element={<PodCast />} />
          <Route path='/prices' exact element={<Prices />} />
          <Route
            path='/prices/payment/:state/:id'
            exact
            element={<PricePayment />}
          />
          <Route path='/partners' exact element={<Partner />} />
          <Route path='/csr' exact element={<Csr />} />
          <Route path='/forgot-password' exact element={<ForgetPassword />} />
          <Route path='/checkemail' element={<CheckEmail />} />
          <Route path='/verfication' element={<Verification />} />
          <Route path='/newpassword' element={<NewPassword />} />
          <Route path='/success' element={<Success />} />
          <Route path='/best-practices' exact element={<BestPractice />} />
          <Route path='/settings' exact element={<Settings />} />

          {/* This will be rendered on going to a path that does not exist in any of the paths above */}
          <Route path='*' exact element={<ErrorPage />} />
        </Routes>
      </ErrorBoundary>
      <Footer />
    </React.Fragment>
  );
}

export default App;
