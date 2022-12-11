import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase.config';
import arrowUp from './Assets/arrow_up.svg';
import arrowDown from './Assets/arrow_down.svg';
import style from './ServerInfo.module.css';

function ServerInfo({ name, ipAddress, serverId }) {
	const [availability, setAvailability] = useState(null);

	const availabiltyNotificationsRef = ref(
		db,
		`opspad/notifications/${serverId}`
	);
	useEffect(() => {
		onValue(availabiltyNotificationsRef, (snapshot) => {
			const data = snapshot.val();
			setAvailability(data.status);
		});
	}, []);

	return (
		<div className={style.container}>
			<h2>{name}</h2>
			<table className={style.table}>
				<tbody>
					<tr>
						<th>IP Address:</th>
						<td className={style.data}>{ipAddress}</td>
					</tr>
					<tr>
						<th>Server Status:</th>
						{availability ? (
							<td
								className={`${style.server_health_container} ${style.server_health_excellent}`}
							>
								<div className={style.server_health}>
									<span>Up</span> <img src={arrowUp} alt="" />
								</div>
							</td>
						) : (
							<td
								className={`${style.server_health_container} ${style.server_health_critical} ${style.server_health_critical_container}`}
							>
								<div className={style.server_health}>
									<span>Down</span>{' '}
									<img className={style.rotate} src={arrowDown} alt="" />
								</div>
							</td>
						)}
					</tr>
				</tbody>
			</table>
		</div>
	);
}

ServerInfo.propTypes = {
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	serverId: PropTypes.string,
};

ServerInfo.defaultProps = {
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
	serverId: '26046ec7-7634-11ed-b8a3-fc3fdbff49c4',
};

export default ServerInfo;
