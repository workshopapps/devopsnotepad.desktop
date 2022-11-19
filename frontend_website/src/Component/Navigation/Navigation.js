import React, { useState } from 'react'
import logo from "./assets/logo.svg";
import menuIcon from "./assets/menu-icon.svg"
import styles from "./Navigation.module.css";
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.inNavigation}>
        <div className={styles.mainNavigation}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <Link to="/" onClick={() => {setOpen(false)}}>
                <img src={logo} alt="" />
              </Link>
            </div>
          </div>
          
          <Navbar isOpen={isOpen} setOpen={setOpen} />

          <div className={styles.right}>
            <div className={styles.navAuthBtn}>
              <Link className={styles.login_link} to="/login">Login</Link>
              <Link className={styles.download_link} to="/">Download App</Link>
            </div>
            <div className={styles.hamburgerBar}>
              <img src={menuIcon} onClick={() => setOpen(true)} alt="menuIcon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navigation