import './App.css';
import React from 'react';
// import { Routes, Route } from "react-router-dom";
import Footer from './Component/Footer/Footer';
import Header from './Component/Header/Header';
import Terms from './Pages/TermsOfUSe/Terms';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import PrivacyPolicy from './Pages/TermsOfUSe/privacyPolicy';
import NavSection from './Pages/TermsOfUSe/NavSection';
function App() {
  return (
    <React.Fragment>
      <Header />
      <NavSection />
      {/* <Terms /> */}
  
      <Routes>
                         <Route exact path="/terms" element={<Terms />}></Route>
                         
        <Route exact path="/privacy" element={<PrivacyPolicy />}></Route>
                                   
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
