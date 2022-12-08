import React, { useContext } from 'react';
import { NavLink, useParams, Outlet } from 'react-router-dom';

import ServerContext from '../../Components/Context/ServerContext';
import ServerInfo from '../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../Components/SideNav/SideNav';
import styles from './ServerDashBoard.module.css';

function ServerDashBoard() {
	// const [availability, setAvailability] = useState(null);
	const { servers } = useContext(ServerContext);
	const params = useParams();
	// const currentServerId = JSON.parse(localStorage.getItem('servers'))
	// 	? JSON.parse(localStorage.getItem('servers')).find(
	// 			(s) => s.id === params.id
	// 	  ).serverId
	// 	: null;

	const activeStyle = {
		borderBottom: '1px solid #202020',
	};

	return (
		<div>
			<Sidenav />
			<section className={styles.main}>
				{servers
					.filter((server) => server.id === params.id)
					.map((server) => (
						<div key={server.id}>
							<ServerInfo
								serverId={server.serverId}
								ipAddress={server.ipAddress}
								name={server.name}
							/>
							<div className={styles.wrapper}>
								<NavLink
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
									to={`/server/${server.id}/note`}
								>
									{' '}
									<p className={styles.note}>Notes</p>{' '}
								</NavLink>
								<NavLink
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
									to={`/server/${server.id}/password`}
								>
									{' '}
									<p className={styles.note}>Password</p>{' '}
								</NavLink>
								<NavLink
									style={({ isActive }) => (isActive ? activeStyle : undefined)}
									to={`/server/${server.id}/notification`}
								>
									{' '}
									<p className={styles.note}>Notifications</p>{' '}
								</NavLink>
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
