import React, { useState } from 'react'
import logo from "./assets/logo.svg";
import menuIcon from "./assets/menu-icon.svg"
import styles from "./Navigation.module.css";
import Navbar from './Navbar';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div className={styles.navigation}>
      <div className={styles.inNavigation}>
        <div className={styles.mainNavigation}>
          <div className={styles.left}>
            <div className={styles.logo}>
              <a href="/">
                <img src={logo} alt="" />
              </a>
            </div>
          </div>
          
          <Navbar isOpen={isOpen} setOpen={setOpen} />

          <div className={styles.right}>
            <div className={styles.navAuthBtn}>
              <a className={styles.login_link} href="/login">Login</a>
              <a className={styles.download_link} href="/">Download App</a>
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