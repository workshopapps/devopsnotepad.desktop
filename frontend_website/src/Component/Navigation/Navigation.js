import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';

import logo from './assets/logo.svg';
import menuIcon from './assets/menu-icon.svg';
import styles from './Navigation.module.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

import { GoogleLogout } from 'react-google-login';
import { gapi } from 'gapi-script';
const clientId =
  '336204185207-fhl85d0e7soq2fbukuv6bqb926re03gp.apps.googleusercontent.com';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const { user, addUserHandler } = useContext(UserContext);

  const logOutHandler = () => {
    addUserHandler(null);
  };

  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: '',
      });
    };
    gapi.load('client:auth2', initClient);
  });

  return (
    <section className='navigation__container'>
      <div className={styles.navigation}>
        <div className={styles.inNavigation}>
          <div className={styles.mainNavigation}>
            <div className={styles.left}>
              <div className={styles.logo}>
                <Link
                  to='/'
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <img src={logo} alt='' />
                </Link>
              </div>
            </div>

            <Navbar isOpen={isOpen} setOpen={setOpen} />

            <div className={styles.right}>
              <div className={styles.navAuthBtn}>
                {user !== null ? (
                  <GoogleLogout
                    clientId={clientId}
                    buttonText='Log out'
                    onLogoutSuccess={logOutHandler}
                  />
                ) : (
                  <Link className={styles.login_link} to='/login'>
                    Login
                  </Link>
                )}
                <Link className={styles.download_link} to='/'>
                  Download App
                </Link>
              </div>
              <div className={styles.hamburgerBar}>
                <img
                  src={menuIcon}
                  onClick={() => setOpen(true)}
                  alt='menuIcon'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
