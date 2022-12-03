import React, { useContext } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import ServerContext from '../../Components/Context/ServerContext';
import ServerInfo from '../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../Components/SideNav/SideNav';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
	const { servers } = useContext(ServerContext);
	const params = useParams();

	return (
		<div>
			<Sidenav />
			<section className={styles.main}>
				{servers
					.filter((server) => server.id === params.id)
					.map((server) => (
						<div key={server.id}>
							<ServerInfo ipAddress={server.ipAddress} name={server.name} />
							<div className={styles.wrapper}>
								<Link to={`/server/${server.id}/note`}>
									{' '}
									<p className={styles.note}>Notes</p>{' '}
								</Link>
								<Link to={`/server/${server.id}/password`}>
									{' '}
									<p className={styles.note}>Password</p>{' '}
								</Link>
								<Link to={`/server/${server.id}/notification`}>
									{' '}
									<p className={styles.note}>Notifications</p>{' '}
								</Link>
							</div>
							<Outlet context={[server]} />
						</div>
					))}

				{/* Outlet */}
			</section>
		</div>
	);
}

export default ServerDashBoard;
