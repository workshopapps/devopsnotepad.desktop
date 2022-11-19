import React, { useState } from 'react'
import logo from "./assets/logo.svg";
import "./Navigation.css";
import Navbar from './Navbar';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="navigation">
      <div className="inNavigation">
        <div className="mainNavigation">
          <div className="left">
            <div className="logo">
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          
          <Navbar isOpen={isOpen} setOpen={setOpen} />

          <div className="right">
            <div className="navAuthBtn">
              <a className="login_link" href="/login">Login</a>
              <a className="download_link" href="/">Download App</a>
            </div>
            <div className="hamburgerBar">
              <i className="fa-solid fa-bars" onClick={() => setOpen(true)}></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation