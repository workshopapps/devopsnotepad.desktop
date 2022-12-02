import React from 'react';
import PropTypes from 'prop-types';
import { RiArrowUpLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import style from './ServerInfo.module.css';

function ServerInfo({ name, ipAddress, serverHealth }) {

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
						<th>Server Satus:</th>
						<td
							className={`${style.server_health} ${
								serverHealth.toLowerCase() === 'up'
									? style.server_health_excellent
									: style.server_health_critical
							}`}
						>
							{serverHealth} <RiArrowUpLine className={style.arrow}

						/>
						</td>
					</tr>
				</tbody>
			</table>

			<div className={style.wrapper}> 
				<Link to="/note"> <p className={style.note}>Notes</p> </Link>
				<Link to="/server/password"> <p className={style.note}>Password</p> </Link>
				<Link to="/notification"> <p className={style.note}>Notifications</p> </Link>
			</div>
		</div>
	);
}

ServerInfo.propTypes = {
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	serverHealth: PropTypes.string,
};

ServerInfo.defaultProps = {
	name: 'HNG SERVER',

	ipAddress: '192.168.0.1',
	serverHealth: 'UP',
};

export default ServerInfo;