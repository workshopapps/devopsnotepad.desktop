/* eslint-disable  */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import styles from './Notification.module.css';
import ServerContext from '../../Components/Context/ServerContext';
import copy from './assets/copy.png';
import bell from './assets/bell.png';

function Notification() {
	const [loading, setLoading] = useState(false);
	const [throwError, setThrowError] = useState(false);
	const { servers, serverNotifications, handleServerNotifications } =
		useContext(ServerContext);
	const { id } = useParams();

	const targetId = (list, Id) => {
		const target = list.find((server) => server.id === Id);
		return target.serverId;
	};

	// dayjs initializations
	dayjs.extend(relativeTime);

	// fetch Request
	const fetchServerNotifications = async (list, Id) => {
		setLoading(true);
		try {
			const res = await fetch(
				`https://opspad.hng.tech/api/server/${targetId(
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
						<p className={styles.point}>my-apache-server/12.13.12.14</p>
					</div>

					<img src={copy} alt="" style={{ cursor: 'pointer' }} />
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
									Regular notifications about your server.
								</p>
							</div>{' '}
						</Link>

						<Link to={`/server/${id}/notification/availabilityNotification`}>
							{' '}
							<div className={styles.card}>
								<div>
									<img src={bell} alt="" />
								</div>
								<p className={styles.noti}>Availability notifications</p>
								<p className={styles.par}>
									Regular notifications about your server.
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
