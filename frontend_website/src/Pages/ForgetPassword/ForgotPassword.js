import React from 'react';
import forgetStyles from '../ForgetPassword/ForgetPassword.module.css';
import { Routes, Route } from 'react-router-dom';
import Reset from './Reset';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';
// import CheckEmail from "./CheckEmail";
// import Verification from "./Verification";
// import NewPassword from "./NewPassword";
// import Success from "./Success";

const ForgetPassword = () => {
  return (
    <>
      <Navigation />
      <div className={forgetStyles.ForgetPassword}>
        <Routes>
          <Route path='/' element={<Reset />} />
          {/* <Route path="/checkemail" element={<CheckEmail />} />
                <Route path="/verfication" element={<Verification />} />
                <Route path="/newpassword" element={<NewPassword />} />
                <Route path="/success" element={<Success />} /> */}
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default ForgetPassword;
