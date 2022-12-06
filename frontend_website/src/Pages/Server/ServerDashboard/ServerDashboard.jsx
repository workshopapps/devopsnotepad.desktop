import React, { useContext } from 'react';
import { useParams, Outlet, NavLink } from 'react-router-dom';
import ServerContext from '../../../Component/Context/ServerContext';
import ServerInfo from '../../../Component/ServerInfo/ServerInfo';
import SideNav from '../../../Component/SideNav/SideNav';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
  const { servers } = useContext(ServerContext);
  const params = useParams();

  return (
    <div className={styles.server}>
      <SideNav />
      <section className={styles.main}>
        {servers
          .filter((server) => server.id === params.id)
          .map((server) => (
            <div key={server.id}>
              <ServerInfo ipAddress={server.ipAddress} name={server.name} />
              <div className={styles.wrapper}>
                <NavLink
                  to={`/server/${server.id}/notification`}
                  className={({ isActive }) =>
                    isActive ? styles.footer_list : ''
                  }
                >
                  <p className={styles.note}>Notifications</p>
                </NavLink>
              </div>
              <Outlet context={[server]} />
            </div>
          ))}
      </section>
    </div>
  );
}

export default ServerDashBoard;
