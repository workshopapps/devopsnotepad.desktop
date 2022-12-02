/* eslint-disable camelcase */
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ServerContext from '../../Components/Context/ServerContext';

function ServerDashboard() {
	const { servers } = useContext(ServerContext);
	const params = useParams();

	const currentServer = servers.filter((server) => server.name === params.name);
	console.log(currentServer);
	const { deviceId, id, ipAddress, name, notification, updated_at } =
		currentServer[0];

	return (
		<div>
			<div>
				<div>{name}</div>
				<div>{id}</div>
				<div>{ipAddress}</div>
				<div>{deviceId}</div>
				<div>{notification}</div>
				<div>{updated_at}</div>
			</div>
			{/* routes */}
		</div>
	);
}

export default ServerDashboard;
