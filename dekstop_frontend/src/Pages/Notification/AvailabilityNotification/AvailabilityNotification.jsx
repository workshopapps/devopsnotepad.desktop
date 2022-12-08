import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ref, onValue } from 'firebase/database';
import { db } from '../../../firebase.config';
import ServerInfo from '../../../Components/ServerInfo/ServerInfo';
import Sidenav from '../../../Components/SideNav/SideNav';
import styles from './AvailabilityNotification.module.css';
import copy from '../assets/copy1.png';
import Button from '../assets/Button.png';
import Refill from '../assets/Refill.png';
import bell from '../assets/bell.png';
import arrowUp from './Assets/arrow_up.svg';
import arrowDown from './Assets/arrow_down.svg';

function AvailabilityNotification() {
	const [availability, setAvailability] = useState(null);
	// const [current, setCurrent] = useState(new Date().getTime());
	const [time, setTime] = useState('');

	const [exactServer, setExactServer] = useState({});
	const [simpleNotification, setSimpleNotification] = useState([]);

	// const [readMore, setReadMore] = useState(false)
	const { id } = useParams();

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

			// eslint-disable-next-line prefer-template
			const checkedLast = `${date.getDate()}/${
				date.getMonth() + 1
			}/${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}`;
			console.log(availability.last_checked);

			// const last = new Date(availability.last_checked).getFullYear();
			// const minutes = Math.floor(current - last);
			// const hours = Math.floor(current - last) % 24;
			// const currentTime = {
			// 	minutes,
			// 	hours,
			// };
			// setTime(currentTime);
			// console.log(last);
			setTime(checkedLast);
		}
	}, [availability]);

	// useEffect(() => {
	// 	setInterval(() => {
	// 		setCurrent(new Date().getTime());
	// 	}, 60000);
	// }, []);

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
						<Link to={`/server/${id}/notification/simpleNotification`}>
							{' '}
							<div className={styles.card1}>
								<div>
									<div className={styles.bell}>{simpleNotification.length}</div>
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
										<th>Server Health:</th>
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
