import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ServerInfo from '../../../Component/ServerInfo/ServerInfo';
import SideNav from '../../../Component/SideNav/SideNav';
import { ServerContext } from '../../../store/ServerContext';
import { UserContext } from '../../../store/UserContext';
import Notification from '../Notification/Notification';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
  const { servers } = useContext(ServerContext);

  const params = useParams();
  const server = servers.find((server) => server.id === params.id);
  const { simpleNotifications, availabilityNotifications } =
    useContext(UserContext);

  return (
    <div className={styles.server}>
      <SideNav />
      <section className={styles.main}>
        <ServerInfo
          ipAddress={server?.ipAddress}
          name={server?.name}
          status={availabilityNotifications?.status}
        />
        <p className={styles.note}>Notifications</p>
        <Notification totalSimple={simpleNotifications.length} totalAvailable={availabilityNotifications.length} />
      </section>
    </div>
  );
}

export default ServerDashBoard;
