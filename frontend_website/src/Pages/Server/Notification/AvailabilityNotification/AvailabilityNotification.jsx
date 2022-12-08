import React, { useContext, useEffect } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import ServerContext from '../../../Components/Context/ServerContext';
import ServerInfo from '../../../Components/ServerInfo/ServerInfo';
// import { RiArrowUpLine } from 'react-icons/ri';
import Sidenav from '../../../Components/SideNav/SideNav';
import styles from './AvailabilityNotification.module.css';
import copy from '../assets/copy1.png';
import Button from '../assets/Button.png';
import Refill from '../assets/Refill.png';
import red from '../assets/red.png';
import bell from '../assets/bell.png';

function AvailabilityNotification() {
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
				<div className={styles.container}>
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

					<div className={styles.contain}>
						<div className={styles.wrapp}>
							<p className={styles.endpoint}>Endpoint:</p>
							<p className={styles.point}>my-apache-server/12.13.12.14</p>
						</div>

						<img src={copy} alt="" style={{ cursor: 'pointer' }} />
					</div>

					<div className={styles.wrappe}>
						<Link to="/simpleNotification">
							{' '}
							<div className={styles.card1}>
								<div>
									<div className={styles.bell}>8</div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Simple Notifications</p>
								<p className={styles.par}>
									Regular notifications about your server.
								</p>
							</div>{' '}
						</Link>

						<div className={styles.card2}>
							<div>
								<div className={styles.belly}>0</div>
								<img src={bell} alt="" />
							</div>
							<p className={styles.noti}>Availability notifications</p>
							<p className={styles.par}>
								Regular notifications about your server.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.state}>
					<Link to={`/server/${id}/notification`}>
						<img src={Button} alt="" style={{ cursor: 'pointer' }} />{' '}
					</Link>

					<div className={styles.refill}>
						<img src={Refill} alt="" />
						<p className={styles.para}>
							You have no notifications yet. Activity <br /> from your server
							wil be displayed here.
						</p>
					</div>

					<div style={{ display: 'none' }}>
						<h1 style={{ textAlign: 'start' }}>Today</h1>

						<div className={styles.row}>
							<img src={red} alt="" />
							<p style={{ paddingLeft: '10px' }}>
								The software installation on HNG server was successful
							</p>

							<p>5mins ago</p>
						</div>
					</div>
				</div>
				<Outlet context={[currentServer[0]]} />
			</section>
		</div>
	);
}
export default AvailabilityNotification;
