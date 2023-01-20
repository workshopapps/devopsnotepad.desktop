import React, { useState, useContext, useEffect } from 'react';
import { UserContext } from '../../store/UserContext';
import { AiOutlineClose } from 'react-icons/ai';

import logo from './assets/newlogoo.svg';
import menuIcon from './assets/menu-icon.svg';
import styles from './Navigation.module.css';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';

const Navigation = () => {
  const [isOpen, setOpen] = useState(false);

  const { isLoggedIn, addUserHandler } = useContext(UserContext);

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

  const { fetchRequest: logOut } = useFetch();
  const logouthandler = () => {
    logOut({
      url: 'https://opspad.onrender.com/auth/logout',
      method: 'GET',
    });
  };

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
                {isLoggedIn ? (
                  <Link
                    className={styles.login_link}
                    to='/login'
                    onClick={() => {
                      addUserHandler(null);
                      logouthandler();
                    }}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link className={styles.login_link} to='/login'>
                    Login
                  </Link>
                )}
                <Link className={styles.download_link} to='/get-demo'>
                  See Demo
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
