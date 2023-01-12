/* eslint-disable  */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './Notification.module.css';
import ServerContext from '../../Components/Context/ServerContext';
import copy from './assets/copyip.svg';
import bell from './assets/bell.svg';

function Notification() {
	const [loading, setLoading] = useState(false);
	const [exactServer, setExactServer] = useState({});
	const [throwError, setThrowError] = useState(false);
	const { servers, serverNotifications, handleServerNotifications } =
		useContext(ServerContext);
	const { id } = useParams();

	const targetId = (list, Id) => {
		const target = list.find((server) => server.id === Id);
		setExactServer(target);
		return target.serverId;
	};

	// Functionality for copy ip to clipboard
	const handleIpCopy = () => {
		if (exactServer.ipAddress) {
			navigator.clipboard.writeText(exactServer.ipAddress);
			setTimeout(() => {
				// eslint-disable-next-line
				alert('IP address copied to clipboard');
			}, 500);
		} else {
			setTimeout(() => {
				alert('No address to copy');
			}, 500);
		}
	};

	// dayjs initializations
	dayjs.extend(relativeTime);

	// fetch Request
	const fetchServerNotifications = async (list, Id) => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://opspad.dev/api/server/${targetId(
					list,
					Id
				)}/notifications/`
			);
			if (res.ok) {
				const data = await res.json();
				const { notifications } = data;

				const newNotification = notifications.map((c) => ({
					id: c.id,
					serverId: c.serverId,
					logs: c.logs,
					created_at: dayjs(c.created_at).fromNow(),
					updated_at: c.updated_at,
				}));

				localStorage.setItem(`${id}notif`, JSON.stringify(newNotification));
				handleServerNotifications(() => {
					const localData = localStorage.getItem(`${id}notif`);
					return localData ? JSON.parse(localData) : [];
				});
				setThrowError(false);
			}
		} catch (error) {
			// eslint-disable-next-line
			// alert('Error fetching notifications, check internet connectivity and try again. If error persists, try again after some time.')
			setThrowError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchServerNotifications(servers, id);
	}, []);

	return (
		<div>
			<section className={styles.main}>
				<div className={styles.contain}>
					<div className={styles.wrapp}>
						<p className={styles.endpoint}>Address:</p>

						<p className={styles.point}>
							{exactServer.ipAddress || 'No IP address detected'}
						</p>
					</div>
					<button
						type="button"
						className={styles.copyIp}
						onClick={handleIpCopy}
					>
						<img src={copy} alt="" style={{ cursor: 'pointer' }} />
					</button>
				</div>
				{loading && <h1>Notifications are loading</h1>}
				{throwError && (
					<p>
						An error has occurred while fetching notifications, please check
						your internet connectivity and try again.
					</p>
				)}

				{!loading && !throwError && (
					<div className={styles.wrappe}>
						<Link to={`/server/${id}/notification/simpleNotification`}>
							{' '}
							<div className={styles.card}>
								<div>
									<div className={styles.bell}>
										{serverNotifications.length || 0}
									</div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Simple Notifications</p>
								<p className={styles.par}>
									Regular log notifications about your server.
								</p>
							</div>{' '}
						</Link>

						<Link to={`/server/${id}/notification/availabilityNotification`}>
							{' '}
							<div className={styles.card}>
								<div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Server Notification</p>
								<p className={styles.par}>
									Notification about your server's availability.
								</p>
							</div>{' '}
						</Link>
					</div>
				)}
			</section>
		</div>
	);
}

export default Notification;
