import React, { useState } from 'react'
import logo from "./assets/logo.svg";
import { MenuList } from "./menuData";
import { Squash as Hamburger } from "hamburger-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className="section header">
      <div className="overlay"></div>
      <div className="container inHeader">
        <div className="left">
          <div className="logo">
            <img src={logo} alt="" />
          </div>
        </div>

        <nav className={"menuBar " + (isOpen && "openMenu")}>
          <ul className="menuUlList">
            {MenuList.map((menuLists, i) => (
              <li key={i}>
                <a href={menuLists.slug}>
                  {menuLists.label} <i className="fa-solid fa-angle-down"></i>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="right">
          <div className="navAuthBtn">
            <a className="login_link" href="/">Login</a>
            <a className="download_link" href="/">Download App</a>
          </div>
          <div className="hamburgerBar">
            <Hamburger toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header