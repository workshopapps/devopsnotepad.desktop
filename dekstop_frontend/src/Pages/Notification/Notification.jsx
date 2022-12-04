import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Notification.module.css';
// import Sidenav from '../../Components/SideNav/SideNav';
// import ServerInfo from '../../Components/ServerInfo/ServerInfo';
import copy from './assets/copy.png';
import bell from './assets/bell.png';

function Notification() {
	return (
		<div>
			{/* <Sidenav /> */}

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
					<Link to="/simpleNotification">
						{' '}
						<div className={styles.card}>
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

					<Link to="/availabilityNotification">
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
		</div>
	);
}

export default Notification;
