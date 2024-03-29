import * as Sentry from '@sentry/react';
import React, { Suspense, lazy, useContext } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from 'react-error-boundary';

// Components
import LoadingSpinner from './Component/LoadingSpinner/LoadingSpinner';
import ProtectedRoute from './Pages/Server/Protection/ProtectedRoute';
import VerifyEmail from './Pages/SignUp/VerifyEmail';
import LandingPage from './Pages/NewLandingPage/LandingPage';
import ContactUs from './Pages/ContactUs/ContactUs';
import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Integration from './Pages/Integration/Integration';
import OurTeam from './Pages/TeamPage/OurTeam';
import AllTeam from './Pages/TeamPage/AllTeam';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import CareerPage from './Pages/CareerPage/CareerPage';
import Login from './Pages/Login/Login';
import SignUp from './Pages/SignUp/SignUp';
import Demo from './Pages/Demo/Demo';
import ErrorPage from './Pages/404Page/ErrorPage';
import Prices from './Pages/Prices/Prices';
import PricePayment from './Pages/PricePayment/PricePayment';
import ForgetPassword from './Pages/ForgetPassword/ForgotPassword';
import CheckEmail from './Pages/ForgetPassword/CheckEmail';
import Verification from './Pages/ForgetPassword/Verification';
import Success from './Pages/ForgetPassword/Success';
import NewPassword from './Pages/ForgetPassword/NewPassword';
import { About } from './Pages/About/About';
import TermsOfService from './Pages/TermsOfUSe/Index';
import Download from './Pages/Download/Download';
import FreeTrial from './Pages/FreeTrial/FreeTrial';
import GetDemo from './Pages/GetDemo/GetDemo';

//////////////////////////////////// Unused components ////////////////////
// import Csr from './Pages/Csr/Csr';
// import Faq from './Pages/Faq/Faq';
// import DevopsCommunity from './Pages/DevopsCompunity/DevopsCommunity';
// import PodCast from './Pages/Podcast/Podcasts.jsx';
// import Partner from './Pages/Partner/Partner';
// import BestPractice from './Pages/BestPractice/BestPractices';
// import NewsRoom from './Pages/NewsRoom/NewsRoom';
// import NewsRoomViewMore from './Pages/NewsRoom/NewsRoomViewMore';
// import Features from './Pages/Features/Features';


// App styling
import classes from './App.module.css';

// Context
import { UserContext } from './store/UserContext';

// import Settings from './Pages/Settings/MainSettings';
// import ServerDashBoard from './Pages/Server/ServerDashboard/ServerDashboard';
// import AddServer from './Pages/Server/AddServer/AddServer';
// import Notification from './Pages/Server/Notification/Notification';
// import Server from './Pages/Server/Server';
// import SimpleNotifications from './Pages/Server/SimpleNotifications/SimpleNotifications';
// import AvailabiltyNotifications from './Pages/Server/AvailabilityNotifications/AvailabilityNotifications';

// Lazy-loading (Dynamic imports)

const Server = lazy(() => import('./Pages/Server/Server'));
const AddServer = lazy(() => import('./Pages/Server/AddServer/AddServer'));
const ServerDashBoard = lazy(() =>
  import('./Pages/Server/ServerDashboard/ServerDashboard'),
);
const AvailabiltyNotifications = lazy(() =>
  import('./Pages/Server/AvailabilityNotifications/AvailabilityNotifications'),
);
const SimpleNotifications = lazy(() =>
  import('./Pages/Server/SimpleNotifications/SimpleNotifications'),
);
const Settings = lazy(() => import('./Pages/Settings/MainSettings'));

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

  const { isLoggedIn } = useContext(UserContext);

  return (
    <React.Fragment>
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate('/');
        }}
      >
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/integrations' element={<Integration />} />
            <Route path='/signup' exact element={<SignUp />} />
            <Route path='/verifyemail' exact element={<VerifyEmail />} />
            <Route path='/login' exact element={<Login />} />
            <Route path='/coming-soon' exact element={<ComingSoon />} />
            <Route path='/careers' exact element={<CareerPage />} />
            <Route path='/contact-us' exact element={<ContactUs />} />
            <Route
              path='/terms-of-service'
              exact
              element={
                <>
                  <Navigation />
                  <TermsOfService />
                  <Footer />
                </>
              }
            />
            <Route path='/about-us' exact element={<About />} />

            <Route path='/demo' exact element={<Demo />} />
            <Route path='/get-demo' exact element={<GetDemo />} />
            <Route
              path='/our-team'
              exact
              element={
                <>
                  <Navigation />
                  <OurTeam />
                  <Footer />
                </>
              }
            />

            <Route
              path='/our-team/all-teams'
              exact
              element={
                <>
                  <Navigation />
                  <AllTeam />
                  <Footer />
                </>
              }
            />

            {/* Unused Route */}
            {/* <Route
              path='/devops-community'
              exact
              element={<DevopsCommunity />}
            /> */}
            {/* <Route path='/faq' exact element={<Faq />} /> */}
            {/* <Route path='/news-room' exact element={<NewsRoom />} /> */}
            {/* <Route
              path='/news-room/view-all'
              exact
              element={<NewsRoomViewMore />}
            /> */}
            {/* <Route path='/csr' exact element={<Csr />} /> */}
            {/* <Route path='/podcasts' exact element={<PodCast />} /> */}
            {/* <Route path='/best-practices' exact element={<BestPractice />} /> */}
            {/* <Route path='/partners' exact element={<Partner />} /> */}
            {/* <Route path='/features' exact element={<Features />} /> */}

            <Route path='/prices' exact element={<Prices />} />
            <Route
              path='/prices/payment/:state/:id'
              exact
              element={<PricePayment />}
            />
            <Route path='/forgot-password' exact element={<ForgetPassword />} />
            <Route path='/checkemail' element={<CheckEmail />} />
            <Route path='/verfication' element={<Verification />} />
            <Route path='/api/auth/update-password' element={<NewPassword />} />
            <Route path='/auth/update-password' element={<NewPassword />} />
            <Route path='/success' element={<Success />} />
            <Route path='/settings' exact element={<Settings />} />
            <Route path='/download' exact element={<Download />} />
            <Route path='/free-trial' exact element={<FreeTrial />} />

            {/* Server Dashbord */}
            <Route
              path='/server'
              exact
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Server />
                </ProtectedRoute>
              }
            />
            <Route
              path='/add-server'
              exact
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <AddServer />
                </ProtectedRoute>
              }
            />

            <Route path='/server/:id' element={<ServerDashBoard />} />
            <Route
              path='/server/:id/simple_notifications'
              element={<SimpleNotifications />}
            />
            <Route
              path='/server/:id/availability_notification'
              element={<AvailabiltyNotifications />}
            />

            {/* This will be rendered on going to a path that does not exist in any of the paths above */}
            <Route path='*' exact element={<ErrorPage />} />
          </Routes>
        </Suspense>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default Sentry.withProfiler(App);
