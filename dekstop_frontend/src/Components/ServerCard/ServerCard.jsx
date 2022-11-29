import React from 'react';
import PropTypes from 'prop-types';
import style from './ServerCard.module.css';

function ServerCard({ name, endpoint, ipAddress, serverHealth }) {
	return (
		<div className={style.container}>
			<h2>{name}</h2>
			<table className={style.table}>
				<tr>
					<th>Endpoint:</th>
					<td className={style.data}>{endpoint}</td>
				</tr>
				<tr>
					<th>IP Address:</th>
					<td className={style.data}>{ipAddress}</td>
				</tr>
				<tr>
					<th>Server Health:</th>
					<td
						className={`${style.server_health} ${
							serverHealth.toLowerCase() === 'excellent'
								? style.server_health_excellent
								: style.server_health_critical
						}`}
					>
						{serverHealth}
					</td>
				</tr>
			</table>
		</div>
	);
}

ServerCard.propTypes = {
	name: PropTypes.string,
	endpoint: PropTypes.string,
	ipAddress: PropTypes.string,
	serverHealth: PropTypes.string,
};

ServerCard.defaultProps = {
	name: 'HNG SERVER',
	endpoint: 'server-devops/18.20.31.10',
	ipAddress: '192.168.0.1',
	serverHealth: 'Excellent',
};

export default ServerCard;
