/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [servers, setServers] = useState([]);
	const [success, setSuccess] = useState(false);
	// const [error, setError] = useState('');
	// deviceId needs to be dynamic
	// const deviceId = '80988579';
	// deviceId = uuidv4();
	// let deviceId = localStorage.getItem('deviceId');

	// Get all servers
	async function getServers() {
		const data = (await JSON.parse(localStorage.getItem('servers')))
			? JSON.parse(localStorage.getItem('servers'))
			: [];
		setServers(data);
		setLoading(false);
	}

	// Create new server
	async function addServer(server) {
		setLoading(true);
		const id = await uuidv4();
		server.id = id;
		server.created_at = new Date();
		const data = (await JSON.parse(localStorage.getItem('servers')))
			? JSON.parse(localStorage.getItem('servers'))
			: [];
		data.push(server);
		localStorage.setItem('servers', JSON.stringify(data));
		setServers(data);
		setSuccess(true);

		setLoading(false);
	}

	async function editServer(server) {
		setLoading(true);
		const currentServers = servers.filter(
			(i) => i.serverId !== server.serverId
		);
		const currentServer = servers.find((i) => i.serverId === server.serverId);
		currentServer.name = server.name;
		currentServer.serverId = server.serverId;
		currentServer.ipAddress = server.ipAddress;
		currentServer.updated_at = new Date();
		currentServers.push(currentServer);
		// currentServers.updatedDate =
		console.log(currentServers);
		localStorage.setItem('servers', JSON.stringify(currentServers));
		setServers(currentServers);

		setSuccess(true);
	}

	useEffect(() => {
		getServers();
	}, []);

	const requests = useMemo(
		() => ({
			servers,
			// error,
			loading,
			success,
			addServer,
			editServer,
			getServers,
			setSuccess,
		}),
		[loading, success]
	);

	return (
		<ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
	);
}

export default ServerContext;
