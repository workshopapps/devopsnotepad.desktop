import logo from './assets/newlogo.png';
import googlePlay from './assets/googleplay.svg';
import appStore from './assets/appstore.svg';
import linkedin from './assets/linkedin.svg';
import twitter from './assets/twitter.svg';
import { Links } from './menuData';
import styles from './Footer.module.css';
import { Link, NavLink } from 'react-router-dom';
// import './Footer.css';

const Footer = () => {
  const scrollToTOp = () => {
    return window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <section data-testid='header__container'>
      <div className={styles.footer}>
        <div className={styles.inFooter}>
          <div className={styles.mainFooter}>
            <div>
              <div className={`${styles.logo} ${styles.logoF}`}>
                <Link to='/'>
                  <img src={logo} alt='' />
                </Link>
              </div>
              <div className={styles.dMFooter}>
                {Links.map((link, linkKey) => (
                  <div key={linkKey} className={styles.miUM}>
                    <h4 className={styles.miUM__title}>{link.title}</h4>
                    {link.list && (
                      <ul style={{ listStyle: 'none', padding: 0 }}>
                        {link.list.map((b, i) => (
                          <li key={i} className={styles.footer_lists}>
                            <NavLink
                              to={`${b.slug}`}
                              className={({ isActive }) =>
                                isActive ? styles.footer_list : ''
                              }
                              onClick={scrollToTOp}
                            >
                              {b.title}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className={`${styles.iUM} ${styles.right}`}>
              <div className={`${styles.logo} ${styles.logoZ}`}>
                <Link to='/'>
                  <img src={logo} alt='' />
                </Link>
              </div>
              <h3 className={styles.right__title}>Get notified of recent updates</h3>

              <div className={styles.notify__ctn}>
                <label>
                  <span className={styles.email__label}>Email</span>
                  <input
                    type='email'
                    name='email'
                    placeholder='email@example.com'
                  />
                </label>
                <button className={styles.btn__notify}>Notify me</button>
              </div>

              <p className={styles.para}>
                By submitting you acknowledge that you've read and agreed to our
                Terms, and that Opspad may contact you about our related
                products and services, using the details you provide above. See
                Opspad’s Privacy Policy for more details or to opt-out at any
                time.
              </p>
            </div>
          </div>

          <div className={styles.mobile__fDownload}>
              <h5 className={styles.fDownload__text}>Download App</h5>
              <div className={styles.fDownloadAppLink}>
                <Link to='/'>
                  <img src={googlePlay} alt='googlePlay' />
                </Link>
                <Link to='/'>
                  <img src={appStore} alt='appStore' />
                </Link>
              </div>
            </div>

          <div className={styles.bottomFooter}>
            <span className={styles.f_copyright}>
              All rights reserved &copy; 2022
            </span>

            <div className={styles.fSocials}>
              <h5 className={styles.fSocials__text}>Follow us</h5>

              <a href='https://www.twitter.com'>
                <img src={twitter} alt='twitter' />
              </a>

              <a href='https://www.linkedin.com'>
                <img src={linkedin} alt='linkedin' />
              </a>
            </div>

            <div className={styles.fDownload}>
              <h5 className={styles.fDownload__text}>Download App</h5>
              <div className={styles.fDownloadAppLink}>
                <Link to='/'>
                  <img src={googlePlay} alt='googlePlay' />
                </Link>
                <Link to='/'>
                  <img src={appStore} alt='appStore' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
