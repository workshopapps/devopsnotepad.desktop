/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../firebase.config';
import ServerInfo from '../../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../../Components/SideNav/SideNav';
import BackBtn from '../../../Components/BackBtn/BackBtn';
import styles from './AvailabilityNotification.module.css';
import copy from '../assets/copy1.svg';
import Button from '../assets/Button.svg';
import Refill from '../assets/Refill.svg';
import bell from '../assets/bell.svg';
import arrowUp from './Assets/arrow_up.svg';
import arrowDown from './Assets/arrow_down.svg';

function AvailabilityNotification() {
	const [availability, setAvailability] = useState(null);
	const [time, setTime] = useState('');

	const [exactServer, setExactServer] = useState({});
	const [simpleNotification, setSimpleNotification] = useState([]);

	const { id } = useParams();

	// Functionality for copy Password
	const handleIpCopy = () => {
		if (exactServer.ipAddress) {
			navigator.clipboard.writeText(exactServer.ipAddress);
			setTimeout(() => {
				// eslint-disable-next-line
				alert('IP address copied to clipboard');
			}, 500);
		} else {
			setTimeout(() => {
				// eslint-disable-next-line
				alert('No address to copy');
			}, 500);
		}
	};

	useEffect(() => {
		const currentServer = JSON.parse(localStorage.getItem('servers'))
			? JSON.parse(localStorage.getItem('servers')).find((s) => s.id === id)
			: {};
		setExactServer(currentServer);
		//
		const availabiltyNotificationsRef = ref(
			db,
			`opspad/notifications/${currentServer.serverId}`
		);
		onValue(availabiltyNotificationsRef, (snapshot) => {
			const data = snapshot.val();
			setAvailability(data);
		});
	}, []);

	useEffect(() => {
		// Get simple notifications
		setSimpleNotification(() => {
			const localData = localStorage.getItem(`${id}notif`);
			return localData ? JSON.parse(localData) : [];
		});
	}, []);

	useEffect(() => {
		if (availability) {
			const date = new Date(availability.last_checked);

			const checkedLast = `${date.getDate()}/${
				date.getMonth() + 1
			}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;

			setTime(checkedLast);
		}
	}, [availability]);

	return (
		<div>
			<Sidenav />
			<section className={styles.main}>
				<div className={styles.container}>
					<BackBtn />
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
							<p className={styles.point}>
								{exactServer.ipAddress || 'No IP Address detected'}
							</p>
						</div>
						<button type='button' onClick={handleIpCopy} className={styles.copyIp}>
							<img src={copy} alt="" style={{ cursor: 'pointer' }} />
						</button>
					</div>

					<div className={styles.wrappe}>
						<Link to={`/server/${id}/notification/simpleNotification`}>
							{' '}
							<div className={styles.card1}>
								<div>
									<div className={styles.bell}>{simpleNotification.length}</div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Simple Notifications</p>
								<p className={styles.par}>
								Regular log notifications about your server.
								</p>
							</div>{' '}
						</Link>

						<div className={styles.card2}>
							<div>
								<img src={bell} alt="" />
							</div>
							<p className={styles.noti}>Server Notification</p>
							<p className={styles.par}>
							Notification about your server&apos;s availability.
							</p>
						</div>
					</div>
				</div>

				<div className={styles.state}>
					<Link to={`/server/${id}/notification`}>
						<img
							className={styles.btn}
							src={Button}
							alt=""
							style={{ cursor: 'pointer' }}
						/>{' '}
					</Link>
					{availability && (
						<div className={styles.table_container}>
							<table className={styles.table}>
								<tbody>
									<tr>
										<th>Last Checked:</th>
										<td className={styles.data}>{time}</td>
									</tr>
									<tr>
										<th>Message:</th>
										<td className={styles.data}>{availability.msg}</td>
									</tr>
									<tr>
										<th>Server Status:</th>
										{availability.status ? (
											<td
												className={`${styles.server_health_container} ${styles.server_health_excellent}`}
											>
												<div className={styles.server_health}>
													<span>Up</span> <img src={arrowUp} alt="" />
												</div>
											</td>
										) : (
											<td
												className={`${styles.server_health_container} ${styles.server_health_critical} ${styles.server_health_critical_container}`}
											>
												<div className={styles.server_health}>
													<span>Down</span>{' '}
													<img
														className={styles.rotate}
														src={arrowDown}
														alt=""
													/>
												</div>
											</td>
										)}
									</tr>
								</tbody>
							</table>
						</div>
					)}

					{!availability && (
						<div className={styles.refill}>
							<img src={Refill} alt="" />
							<p className={styles.para}>
								You have no notifications yet. Activity <br /> from your server
								wil be displayed here.
							</p>
						</div>
					)}
				</div>
			</section>
		</div>
	);
}
export default AvailabilityNotification;
