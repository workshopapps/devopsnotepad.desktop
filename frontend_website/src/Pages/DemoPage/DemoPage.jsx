import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import styles from './DemoPage.module.css';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';

const DemoPage = () => {
  return (
    <>
      <Navigation />

      <div className={styles.container}>
        <div className={styles.main}>
          <section className={styles.wrapper}>
            <div className={styles.wrapp}>
              <h1 className={styles.heading}>
                Get Ready To <br /> Experience{' '}
                <span className={styles.ease}>Ease</span> With <br /> Opspad
              </h1>
              <p className={styles.parag}>
                One of our team members will reach out to you to answer any
                questions you may have. Meanwhile , get to know us a little
                better
              </p>
            </div>

            <div className={styles.imgWrap}>
              <img src={one} alt='' className={styles.ImgOne} />
            </div>
          </section>

          <div className={styles.videoCtn}>
            <ReactPlayer
              className={styles.video}
              url='https://youtu.be/TcUlnDJwtPg'
            ></ReactPlayer>
          </div>
        </div>

        <div className={styles.wrap}>
          <h2 className={styles.head}>
            Use Opspad <span className={styles.spa}>without paying</span>{' '}
          </h2>

          <img src={two} alt='' className={styles.Imgtwo} />

          <div className={styles.package}>
            <div className={styles.con}>
              <h2 className={styles.header}>
                {' '}
                Use Opspad <span className={styles.paying}>
                  without paying
                </span>{' '}
              </h2>
            </div>

            <ul className={styles.list}>
              <li>Follow the information on the user guide.</li>
              <li>Get setup in less than a minute</li>
              <li>
                Test with a network/ server to see in-person how you can view
                your logs.
              </li>
            </ul>

            <Link to='/free-trial'>
              {' '}
              <button className={styles.btn}>Start a free trial</button>{' '}
            </Link>
          </div>
        </div>

        <div className={styles.wrap1}>
          <h2 className={styles.head}>
            We’d love to <span className={styles.spa}>get your feedback</span>{' '}
            on Opspad{' '}
          </h2>
          <img src={three} alt='' className={styles.Imgtwo} />

          <div className={styles.package}>
            <div className={styles.con}>
              <h2 className={styles.header}>
                We’d love to{' '}
                <span className={styles.paying}>get your feedback</span> on
                Opspad{' '}
              </h2>
            </div>

            <ul className={styles.list}>
              <li>
                We’d love to tailor our product features to match your exact
                need
              </li>
              <li>We want to hear from you about any concerns you have</li>
              <li>Your feedback helps us gauge what your preferences are</li>
            </ul>

            <a
              href='https://docs.google.com/forms/d/1CLL4OCQ3-HMMcJxQKaNJo6EZg3yAOl3N4UC0bvhHB4I/edit?usp=drivesdk'
              rel='noreferrer'
            >
              {' '}
              <button className={styles.btn1}>
                Take a 30-second Survey
              </button>{' '}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DemoPage;
