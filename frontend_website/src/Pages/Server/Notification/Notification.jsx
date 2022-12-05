import React, { useContext, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styles from './Notification.module.css';
import copy from './assets/copy.png';
import bell from './assets/bell.png';
import ServerContext from '../../../Component/Context/ServerContext';

function Notification() {
  const [isOpen, setIsOpen] = useState(false);
  const { servers } = useContext(ServerContext);
  const params = useParams();
  const serverId = servers.find((server) => server.id === params.id);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(serverId.textToCopy());
  };

  return (
    <div>
      <section className={styles.main}>
        <div className={styles.contain}>
          <div className={styles.wrapp}>
            <p className={styles.endpoint}>UUID:</p>
            <p
              className={styles.point}
              onClick={() => setIsOpen((prev) => !prev)}
            >
              {isOpen ? `${serverId.id}` : '******-******-******'}
            </p>
          </div>

          <img
            src={copy}
            alt=''
            className={styles.copy}
            onClick={copyToClipboard}
          />
        </div>

        <div className={styles.wrappe}>
          <Link to='simpleNotifications'>
            <div className={styles.card}>
              <div>
                <div className={styles.bell}>8</div>
                <img src={bell} alt='' />
              </div>
              <p className={styles.noti}>Simple Notifications</p>
              <p className={styles.par}>
                Regular notifications about your server.
              </p>
            </div>{' '}
          </Link>

          <Link to='/availabilityNotification'>
            {' '}
            <div className={styles.card}>
              <div>
                <div className={styles.belly}>0</div>
                <img src={bell} alt='' />
              </div>
              <p className={styles.noti}>Availability notifications</p>
              <p className={styles.par}>
                Regular notifications about your server.
              </p>
            </div>{' '}
          </Link>
        </div>
      </section>
      <Outlet />
    </div>
  );
}

export default Notification;
