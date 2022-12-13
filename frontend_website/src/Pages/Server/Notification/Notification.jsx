import React, { useContext, useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import styles from './Notification.module.css';
import copy from './assets/copy.png';
import bell from './assets/bell.png';
import { ServerContext } from '../../../store/ServerContext';

function Notification({ total }) {
  const [isOpen, setIsOpen] = useState(false);
  const { servers } = useContext(ServerContext);
  const params = useParams();
  const server = servers.find((server) => server.id === params.id);

  const copyToClipboard = (e) => {
    navigator.clipboard.writeText(`${server.userId}`);
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
              {isOpen ? `${server.userId}` : '******-******-******'}
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
          <Link to='simple_notifications'>
            <div className={styles.card}>
              <div>
                <div className={styles.bell}>{total}</div>
                <img src={bell} alt='' />
              </div>
              <p className={styles.noti}>Logs</p>
              <p className={styles.par}>
                Regular notifications about your server.
              </p>
            </div>{' '}
          </Link>

          <Link to='availability_notification'>
            <div className={styles.card}>
              <div>
                <div className={styles.belly}>1</div>
                <img src={bell} alt='' />
              </div>
              <p className={styles.noti}>Server notification</p>
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
