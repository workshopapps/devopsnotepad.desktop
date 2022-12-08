/* eslint-disable import/no-unresolved */
import React, { useEffect, useState, useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import dayjs from 'dayjs'
import relativeTime from "dayjs/plugin/relativeTime";
import styles from './Notification.module.css';
import ServerContext from '../../Components/Context/ServerContext';
import copy from './assets/copy.png';
import bell from './assets/bell.png';

function Notification() {
	const [loading, setLoading] = useState(false);
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
				`https://opspad.onrender.com/server/${targetId(
					list,
					Id
				)}/notifications/`
			);
			if (res.ok) {
				const data = await res.json();
				const { notifications } = data;
				// console.log(notifications);
				const newNotification =
					notifications.map((c) => ({
						id: c.id,
						serverId: c.serverId,
						logs: c.logs,
						created_at: dayjs(c.created_at).fromNow(),
						updated_at: c.updated_at,
					}))
				;
				// console.log(newNotification)
				handleServerNotifications(newNotification)
				// handleServerNotifications(notifications);
			}
		} catch (error) {
			// console.log(error);
		}
		setLoading(false);
		// console.log(serverNotifications)
	};

	useEffect(() => {
		fetchServerNotifications(servers, id);
	}, []);

	return (
		<div>
			{loading && <h1>Notifications are loading</h1>}

			{!loading && (
				<section className={styles.main}>
					{/* <ServerInfo /> */}

					<div className={styles.contain}>
						<div className={styles.wrapp}>
							<p className={styles.endpoint}>Endpoint:</p>
							<p className={styles.point}>my-apache-server/12.13.12.14</p>
						</div>

						<img src={copy} alt="" style={{ cursor: 'pointer' }} />
					</div>

					<div className={styles.wrappe}>
						<Link to={`/server/${id}/notification/simpleNotification`}>
							{' '}
							<div className={styles.card}>
								<div>
									<div className={styles.bell}>
										{serverNotifications.length}
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
				</section>
			)}
		</div>
	);
}

export default Notification;
