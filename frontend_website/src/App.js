<<<<<<< HEAD
import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Component/Footer/Footer";
import Header from "./Component/Header/Header";
import LandingPage from "./Pages/Landing page/LandingPage";
import Csr from "./Pages/Csr/Csr";
=======
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';

import { ErrorBoundary } from "react-error-boundary";


import Footer from './Component/Footer/Footer';
import Navigation from './Component/Navigation/Navigation';
import Integration from "./Pages/Integration/Integration";
import Faq from './Pages/Faq/Faq';
import ComingSoon from './Pages/ComingSoon/ComingSoon';
import CareerPage from './Pages/CareerPage/CareerPage';

import classes from './App.module.css'

// Error Boundary FallbackComponent: This is the function that will be called whenever the errorboundary component caught an error
const ErrorFallback = (props) => {
  return (
    <div role="alert" className={classes.error}>
      <p className={classes.p}>Something went wrong!</p>
      <pre className={classes.pre}>{props.error.message}</pre>
      <button onClick={props.resetErrorBoundary} className={classes.button}>Restart app</button>
    </div>
  );
};
>>>>>>> 7e6a4a31e56efa2a157bd493e00ca2a252f1094e

function App() {

  const navigate = useNavigate();

  return (
    <React.Fragment>
<<<<<<< HEAD
      <Header/>
      <Routes>
        <Route path="/" exact element={<Csr />} />
      </Routes>
=======
      <Navigation />
      <ErrorBoundary
        FallbackComponent={ErrorFallback}
        onReset={() => {
          navigate("/");
        }}
      >
        <Routes>
          <Route path="/integration" element={<Integration />} />
          <Route path="/faq" exact element={<Faq />} />
          <Route path="/comingsoon" exact element={<ComingSoon />} />
          <Route path="/career" exact element={<CareerPage />} />
        </Routes>
      </ErrorBoundary>
>>>>>>> 7e6a4a31e56efa2a157bd493e00ca2a252f1094e
      <Footer />
      <LandingPage />
    </React.Fragment>
  );
}

export default App;
