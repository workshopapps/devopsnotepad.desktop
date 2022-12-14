import React from 'react';
import ReactPlayer from 'react-player';
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import styles from './DemoPage.module.css';

const DemoPage = () => {
  return (
    <>
      <Navigation />
      <section className={styles.demoPage}>
        <div className={styles.container}>
          <div className={styles.text}>
            <h2>Stay productive using Opspad</h2>

            <ul>
              <li>
                Write and edit written notes about server with utmost ease.
              </li>

              <li>
                Add or remove server(s). Recieve push notifactions for both
                mobile and desktop applictations.
              </li>

              <li>
                Manage password of Server Tools. Update server tools & access
                credentials for each server tools.
              </li>
            </ul>
          </div>

          <div className={styles.videoCtn}>
            <ReactPlayer
              className={styles.video}
              url='https://youtu.be/TcUlnDJwtPg'
            ></ReactPlayer>

            <p>Watch Demo video</p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DemoPage;
