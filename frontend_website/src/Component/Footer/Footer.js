import logo from './assets/logo.svg';
import googlePlay from './assets/googleplay.svg';
import appStore from './assets/appstore.svg';
import { Links } from './menuData';
import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
// import './Footer.css';

const Footer = () => {
  return (
    <section data-testid='header__container'>
      <div className={styles.footer}>
        <div className={styles.inFooter}>
          <div className={styles.mainFooter}>
            <div className={styles.logo}>
              <Link to='/'>
                <img src={logo} alt='' />
              </Link>
            </div>
            <div className={styles.dMFooter}>
              <ul className={styles.footerLink}>
                {Links.map((link, linkKey) => (
                  <div key={linkKey} className={styles.miUM}>
                    <h4>{link.title}</h4>
                    {link.list && (
                      <div>
                        {link.list.map((b, i) => (
                          <li key={i}>
                            <Link to={`${b.slug}`}>{b.title}</Link>
                          </li>
                        ))}
                      </div>
                    )}
                  </div>
                ))}

                <div className={`${styles.miUM} ${styles.right}`}>
                  <h4>DOWNLOAD APP</h4>
                  <div className={styles.fDownloadAppLink}>
                    <Link to='/'>
                      <img src={googlePlay} alt='googlePlay' />
                    </Link>
                    <Link to='/'>
                      <img src={appStore} alt='appStore' />
                    </Link>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <div className={styles.bottomFooter}>
            <span className={styles.f_copyright}>
              All rights reserved &copy; 2022
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
