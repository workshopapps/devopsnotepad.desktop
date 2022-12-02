import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ServerCard.module.css';
import arrow from './Assets/arrow.svg';

function ServerCard({ name, ipAddress, serverHealth, id }) {
	return (
		<div className={style.container}>
			<h2>{name}</h2>
			<Link to={`/server/${id}`}>
				<table className={style.table}>
					<tbody>
						<tr>
							<th>IP Address:</th>
							<td className={style.data}>{ipAddress}</td>
						</tr>
						<tr>
							<th>Server Health:</th>
							<td
								className={`${style.server_health_container} ${
									serverHealth.toLowerCase() === 'critical'
										? style.server_health_critical
										: ''
								}`}
							>
								<div className={style.server_health}>
									<span>Up</span>{' '}
									<img
										className={
											serverHealth.toLowerCase() === 'critical' && style.rotate
										}
										src={arrow}
										alt=""
									/>
								</div>
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
	id: PropTypes.string,
};

ServerCard.defaultProps = {
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
	serverHealth: 'excellent',
	id: '34380302dom',
};

export default ServerCard;
