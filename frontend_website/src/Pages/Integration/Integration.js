/* eslint-disable no-undef */
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import { Link } from 'react-router-dom';
import bannerImg from './assets/hero-section-image.png';
import { getMore, getMoreT, getMoreTh, list } from './data';
import styles from './Integration.module.css';

const Integration = () => {
  return (
    <>
      <Navigation />
      <section className={styles.integration}>
        <div className={styles.banner}>
          <div className={styles.inBanner}>
            <div className={styles.subtitle}>
              <h1>
                Experience more ease with our seamless integrations{' '}
                <span>coming soon</span>
              </h1>
            </div>
            <div className={styles.banner_img}>
              <img src={bannerImg} alt='bannerImg' />
            </div>
          </div>
        </div>
        <div className={styles.hM_content}>
          <div className={styles.inHM_content}>
            {list.map((item, i) => {
              return (
                <div
                  className={`${
                    item.banner_flex_position
                      ? `${styles.container} ${styles.inHM_box} ${styles.flexDirection}`
                      : `${styles.container} ${styles.inHM_box}`
                  }`}
                  key={i}
                >
                  <div
                    className={`${
                      item.banner_flex_position
                        ? `${styles.inHmL} ${styles.inHmL2}`
                        : styles.inHmL
                    }`}
                  >
                    <h3>{item.heading}</h3>
                    <p>{item.content}</p>
                  </div>
                  <div className={styles.inHmR}>
                    <img src={item.banner} alt='iMhy1' />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={styles.get_more}>
          <div className={styles.inGet_more}>
            <div className={styles.subtitle}>
              <h4>Connect your favorite apps</h4>
              <p>
                Opspad is the hub of your productivity - integrating the tools
                you rely on to get things done.
              </p>
            </div>
            <div className={styles.inGet_more_box}>
              <div
                className={`${styles.inGetMoreBox} ${styles.inGetMoreBoxM1}`}
              >
                {getMore.map((item, i) => {
                  return (
                    <div className={styles.box} key={i}>
                      <div>
                        <div className={styles.boxImg}>
                          <img src={item.img} alt='' />
                        </div>
                        <h3>{item.heading}</h3>
                        <p>{item.content}</p>
                      </div>
                      <Link className={styles.learnMore} to={item.slug}>
                        {item.linkLabel}
                      </Link>
                    </div>
                  );
                })}
              </div>
              <div
                className={`${styles.inGetMoreBox} ${styles.inGetMoreBoxM2}`}
              >
                {getMoreT.map((item, i) => {
                  return (
                    <div className={styles.box} key={i}>
                      <div>
                        <div className={styles.boxImg}>
                          <img src={item.img} alt='' />
                        </div>
                        <h3>{item.heading}</h3>
                        <p>{item.content}</p>
                      </div>
                      <a className={styles.learnMore} href={item.slug}>
                        {item.linkLabel}
                      </a>
                    </div>
                  );
                })}
              </div>
              <div
                className={`${styles.inGetMoreBox} ${styles.inGetMoreBoxM3}`}
              >
                {getMoreTh.map((item, i) => {
                  return (
                    <div className={styles.box} key={i}>
                      <div>
                        <div className={styles.boxImg}>
                          <img src={item.img} alt='' />
                        </div>
                        <h3>{item.heading}</h3>
                        <p>{item.content}</p>
                      </div>
                      <a className={styles.learnMore} href={item.slug}>
                        {item.linkLabel}
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className={styles.getMoret}>
          <div className={styles.inGetMoret}>
            <div className={styles.subtitle}>
              <h4>Get more from your app with opspad integrations</h4>
            </div>
            <div className={styles.btn}>
              <Link to='/signup'>Sign up for free</Link>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Integration;
