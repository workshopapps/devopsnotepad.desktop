import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ServerContext from '../../../Component/Context/ServerContext';
import ServerInfo from '../../../Component/ServerInfo/ServerInfo';
import SideNav from '../../../Component/SideNav/SideNav';
import { UserContext } from '../../../store/UserContext';
import Notification from '../Notification/Notification';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
  const { servers } = useContext(ServerContext);
  const params = useParams();
  const server = servers.find((server) => server.id === params.id);

  const {
    availabilityNotifications: { status },
  } = useContext(UserContext);

  return (
    <div className={styles.server}>
      <SideNav />
      <section className={styles.main}>
        <ServerInfo
          ipAddress={server?.id}
          name={server?.name}
          status={status}
        />
        <p className={styles.note}>Notifications</p>
        <Notification />
      </section>
    </div>
  );
}

export default ServerDashBoard;
