/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [servers, setServers] = useState([]);
	const [success, setSuccess] = useState(false);
	const [serverNotifications, setServerNotifications] = useState({});
	// const [error, setError] = useState('');

	// Get all servers
	async function getServers() {
		const data = (await JSON.parse(localStorage.getItem('servers')))
			? JSON.parse(localStorage.getItem('servers'))
			: [];
		setServers(data);
		setLoading(false);
	}

	// change the state of serverNotifications

	const handleServerNotifications = (value) => {
		setServerNotifications(value);
	};

	// Create new server
	async function addServer(server) {
		setLoading(true);
		const id = await uuidv4();
		const newServer = {
			id,
			serverId: server.serverId.trim(),
			name: server.name,
			ipAddress: server.ipAddress,
			created_at: new Date(),
		};
		// server.id = id;
		// server.created_at = new Date();
		const data = (await JSON.parse(localStorage.getItem('servers')))
			? JSON.parse(localStorage.getItem('servers'))
			: [];
		data.push(newServer);
		data.sort((a, b) => b.created_at - a.created_at);

		localStorage.setItem('servers', JSON.stringify(data));
		setServers(data);
		setSuccess(true);
		setLoading(false);
	}

	// Edit Server
	async function editServer(server) {
		setLoading(true);
		const currentServers = servers.filter((i) => i.id !== server.id);
		const currentServer = servers.find((i) => i.id === server.id);
		currentServer.name = server.editName;
		currentServer.serverId = server.editServerId.trim();
		currentServer.ipAddress = server.editIpAddress;
		currentServer.updated_at = new Date();
		currentServers.push(currentServer);
		currentServers.sort((a, b) => b.created_at - a.created_at);
		// currentServers.updatedDate =
		// console.log(currentServers);
		localStorage.setItem('servers', JSON.stringify(currentServers));
		setLoading(false);
		setServers(currentServers);
		setSuccess(true);
	}

	// Delete Server
	async function deleteServer(currentId) {
		setLoading(true);
		const currentServers = servers.filter((i) => i.id !== currentId);
		localStorage.setItem('servers', JSON.stringify(currentServers));
		setServers(currentServers);
		setLoading(false);
	}

	useEffect(() => {
		getServers();
	}, []);

	const requests = useMemo(
		() => ({
			servers,
			loading,
			success,
			serverNotifications,
			addServer,
			editServer,
			deleteServer,
			getServers,
			setSuccess,
			handleServerNotifications,
		}),
		[servers, loading, success, serverNotifications]
	);

	return (
		<ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
	);
}

export default ServerContext;
