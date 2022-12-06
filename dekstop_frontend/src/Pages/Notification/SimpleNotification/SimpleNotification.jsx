import React, { useContext, useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
// import * as dayjs from 'dayjs'
// import relativeTime from 'dayjs/plugin/relativeTime.js';
// import { RiArrowUpLine } from 'react-icons/ri';
import ServerContext from '../../../Components/Context/ServerContext';
import ServerInfo from '../../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../../Components/SideNav/SideNav';
import styles from './SimpleNotification.module.css';
import copy from '../assets/copy1.png';
import Button from '../assets/Button.png';
import Refill from '../assets/Refill.png';
import green from '../assets/green.png';
import bell from '../assets/bell.png';

function SimpleNotification() {
	// const { getServers, servers } = useContext(ServerContext);
	const { serverNotifications } = useContext(ServerContext);
	const [exactServer, setExactServer] = useState({});
	const [simpleNotification, setSimpleNotification] = useState([]);
	// const [readMore, setReadMore] = useState(false)
	const { id } = useParams();

	const getServer = (code) => {
		const localData = localStorage.getItem('servers');
		const data = localData ? JSON.parse(localData) : [];
		const theServer = data.find((server) => server.id === code);
		setExactServer(theServer);
	};

	useEffect(() => {
		getServer(id);
		setSimpleNotification(serverNotifications);
	}, []);

	return (
		<div>
			<Sidenav />

			<section className={styles.main}>
				<div className={styles.container}>
					<ServerInfo
						key={exactServer.id}
						ipAddress={exactServer.ipAddress}
						name={exactServer.name}
					/>
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
							<p className={styles.endpoint}>Address:</p>
							<p className={styles.point}>my-apache-server/12.13.12.14</p>
						</div>

						<img src={copy} alt="" style={{ cursor: 'pointer' }} />
					</div>

					<div className={styles.wrappe}>
						<div className={styles.card1}>
							<div>
								<div className={styles.bell}>{simpleNotification.length}</div>
								<img src={bell} alt="" />
							</div>
							<p className={styles.noti}>Simple Notifications</p>
							<p className={styles.par}>
								Regular notifications about your server.
							</p>
						</div>

						<Link to={`/server/${id}/notification/availabilityNotification`}>
							{' '}
							<div className={styles.card2}>
								<div>
									<div className={styles.belly}>0</div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Availability notifications</p>
								<p className={styles.par}>
									Regular notifications about your server.
								</p>
							</div>{' '}
						</Link>
					</div>
				</div>

				<div className={styles.state}>
					<Link to={`/server/${id}/notification`}>
						<img src={Button} alt="" style={{ cursor: 'pointer' }} />{' '}
					</Link>

					{simpleNotification.length === 0 && (
						<div className={styles.refill}>
							<img src={Refill} alt="" />
							<p className={styles.para}>
								You have no notifications yet. Activity <br /> from your server
								wil be displayed here.
							</p>
						</div>
					)}

					{simpleNotification.map((notification) => (
						<div key={notification.id} style={{ display: 'unset' }}>
							{/* <h1 style={{ textAlign: 'start' }}>Today</h1> */}

							<div className={styles.row}>
								
									<img src={green} alt="" style={{alignSelf: 'center'}} />
								
								<p className={styles.pnote}>
									{notification.logs.substring(0, 151)}
								</p>
								<p>{notification.created_at}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
export default SimpleNotification;
