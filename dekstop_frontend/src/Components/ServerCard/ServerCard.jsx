import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ServerCard.module.css';

function ServerCard({ name, ipAddress, serverHealth }) {
	return (
		<div className={style.container}>
			<h2>{name}</h2>
			<Link to={`/server/${name}`}>
				<table className={style.table}>
					<tbody>
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
					</tbody>
				</table>
			</Link>
		</div>
	);
}

ServerCard.propTypes = {
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	serverHealth: PropTypes.string,
};

ServerCard.defaultProps = {
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
	serverHealth: 'Excellent',
};

export default ServerCard;
