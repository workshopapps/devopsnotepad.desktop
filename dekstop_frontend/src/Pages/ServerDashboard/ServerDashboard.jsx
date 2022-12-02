import React, { useContext, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import ServerContext from '../../Components/Context/ServerContext';
import ServerInfo from '../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../Components/SideNav/SideNav';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
	const { getServers, servers } = useContext(ServerContext);
	const params = useParams();

	useEffect(() => {
		getServers();
	}, [servers]);

	const currentServer = servers.filter(
		(server) => server.serverId === params.serverId
	);
	// const { deviceId, id, ipAddress, name, notification, updated_at } =
	// 	currentServer[0];
	const { id, ipAddress, name } = currentServer[0];
	return (
		<div>
			<Sidenav />
			<section className={styles.main}>
				<ServerInfo key={id} ipAddress={ipAddress} name={name} />

				<div className={styles.wrapper}>
					<Link to={`/server/${id}/note`}>
						{' '}
						<p className={styles.note}>Notes</p>{' '}
					</Link>
					<Link to={`/server/${id}/password`}>
						{' '}
						<p className={styles.note}>Password</p>{' '}
					</Link>
					<Link to={`/server/${id}/notification`}>
						{' '}
						<p className={styles.note}>Notifications</p>{' '}
					</Link>
				</div>

				{/* Outlet */}
				<Outlet context={[currentServer[0]]} />
			</section>
		</div>
	);
}

export default ServerDashBoard;
