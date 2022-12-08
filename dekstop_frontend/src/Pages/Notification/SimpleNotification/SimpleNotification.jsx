import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ServerInfo from '../../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../../Components/SideNav/SideNav';
import styles from './SimpleNotification.module.css';
import copy from '../assets/copy1.png';
import Button from '../assets/Button.png';
import Refill from '../assets/Refill.png';
import green from '../assets/green.png';
import bell from '../assets/bell.png';
import Content from './SimpleContent';

function SimpleNotification() {
	const [exactServer, setExactServer] = useState({});
	const [simpleNotification, setSimpleNotification] = useState([]);
	const { id } = useParams();

	const getServer = (code) => {
		const localData = localStorage.getItem('servers');
		const data = localData ? JSON.parse(localData) : [];
		const theServer = data.find((server) => server.id === code);
		setExactServer(theServer);
	};

	useEffect(() => {
		getServer(id);
		setSimpleNotification(() => {
			const localData = localStorage.getItem(`${id}notif`);
			return localData ? JSON.parse(localData) : [];
		});
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
						serverId={exactServer.serverId}
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
									{/* <div className={styles.belly}>0</div> */}
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
							<div className={styles.row}>
								<img src={green} alt="" style={{ alignSelf: 'center' }} />

								<Content notes={notification.logs} />

								<p style={{ fontSize: '12px' }}>{notification.created_at}</p>
							</div>
						</div>
					))}
				</div>
			</section>
		</div>
	);
}
export default SimpleNotification;
