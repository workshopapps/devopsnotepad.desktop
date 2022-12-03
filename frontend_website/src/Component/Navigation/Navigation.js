import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { AiOutlineClose } from 'react-icons/ai';

import logo from './assets/logo.svg';
import menuIcon from './assets/menu-icon.svg';
import styles from './Navigation.module.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const { user, addUserHandler } = useContext(UserContext);

  useEffect(() => {
    // Sticky navigation
    const nav = document.querySelector('#nav');
    const header = document.querySelector('.navigation__container');

    const stickyNav = function (entries) {
      const [entry] = entries;

      if (!entry.isIntersecting) nav.classList.add(`${styles.sticky}`);
      else nav.classList.remove(`${styles.sticky}`);
    };

    const headerObserver = new IntersectionObserver(stickyNav, {
      root: null,
      threshold: 0,
    });

    headerObserver.observe(header);
  });

  return (
    <section className='navigation__container'>
      <div className={styles.navigation} id='nav'>
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
                  <Link
                    className={styles.login_link}
                    to='/login'
                    onClick={() => addUserHandler(null)}
                  >
                    Logout
                  </Link>
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
                {!isOpen ? (
                  <img src={menuIcon} alt='' onClick={() => setOpen(true)} />
                ) : (
                  <AiOutlineClose
                    onClick={() => setOpen(false)}
                    style={{ height: '3rem', width: '3rem', fill: '#102a63ed' }}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
