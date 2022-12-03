import React from 'react';
import ReactPlayer from 'react-player'
import styles from './DemoPage.module.css';

const DemoPage = () => {
  return (
    <section className={styles.demoPage}>
      <div className={styles.container}>
        <div className={styles.text}>
          <h2>Stay productive using Opspad</h2>

          <ul>
            <li>Write and edit written notes about server with utmost ease.</li>

            <li>Add or remove server(s). Recieve push notifactions for both mobile and desktop applictations.</li>

            <li>Manage password of Server Tools. Update server tools & access credentials for each server tools.</li>
          </ul>
        </div>

        <div className={styles.videoCtn}>
          <ReactPlayer className={styles.video} url="https://www.youtube.com/"></ReactPlayer>

          <p>Watch Demo video</p>
        </div>
      </div>
    </section>
  );
};

export default DemoPage;
