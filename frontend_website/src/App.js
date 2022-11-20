import React from 'react';
import LandingPage from './Pages/Landing page/LandingPage';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';
import ContactUs from './Pages/ContactUs/ContactUs';
import { About } from './Pages/About/About';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Integration from './Pages/Integration/Integration';
import Faq from './Pages/Faq/Faq';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import CareerPage from './Pages/CareerPage/CareerPage';
import Features from './Pages/Features/Features';

import classes from './App.module.css';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import NewsRoom from './Pages/NewsRoom/NewsRoom';
import DemoPage from "./Pages/DemoPage/DemoPage";
import ErrorPage from './Pages/404Page/ErrorPage';

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
          <Route path="/" exact element={<LandingPage />} />
          <Route path="/integrations" element={<Integration />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/coming-soon" exact element={<ComingSoon />} />
          <Route path="/career" exact element={<CareerPage />} />
          <Route path='/' exact element={<LandingPage />} />
          <Route path='/integrations' element={<Integration />} />
          <Route path='/faq' exact element={<Faq />} />
          <Route path='/signup' exact element={<SignUp />} />
          <Route path='/login' exact element={<Login />} />
          <Route path='/coming-soon' exact element={<ComingSoon />} />
          <Route path='/careers' exact element={<CareerPage />} />
          <Route path='/contact-us' exact element={<ContactUs />} />
          <Route path='/about-us' exact element={<About />} />
          <Route path='/features' exact element={<Features />} />
          <Route path='/news-room' exact element={<NewsRoom />} />
          <Route path='/demo' exact element={<DemoPage />} />

          {/* This will be rendered on going to a path that does not exist in any of the paths above */}
          <Route path='*' exact element={<ErrorPage />} />

        </Routes>
      </ErrorBoundary>
      <Footer />
    </React.Fragment>
  );
}

export default App;
