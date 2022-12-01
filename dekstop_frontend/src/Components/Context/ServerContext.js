/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [servers, setServers] = useState([]);
	const [success, setSuccess] = useState(false);
	const [error, setError] = useState('');
	const BASE_URL = 'https://devsapp.onrender.com/server';
	// deviceId needs to be dynamic
	// const deviceId = '80988579';

	function getDeviceID() {
		let deviceId = localStorage.getItem('deviceId');
		if (deviceId) return deviceId;

		deviceId = uuidv4();
		localStorage.setItem('deviceId', deviceId);
		return deviceId;
	}

	// Get all servers
	async function getServers() {
		// setLoading(true);
		setError(null);
		const deviceId = getDeviceID();

		try {
			const response = await fetch(`${BASE_URL}?device=${deviceId}`, {
				method: 'GET',
				headers: {
					'Content-Type': 'application/json',
				},
			});

			const data = await response.json();
			setLoading(false);
			setServers(data.servers);
		} catch (err) {
			setError(err.message);
			setLoading(false);
		}
		setLoading(false);
	}

	// Create new server
	async function addServer(server) {
		const id = await getDeviceID();
		// eslint-disable-next-line no-param-reassign
		server.deviceId = id;
		// setIsLoading(true);
		try {
			const response = await fetch(`${BASE_URL}`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(server),
			});

			const data = await response.json();
			// const serverData = {
			// 	success: data.success,
			// 	name:data.server.name,
			// 	ipAddress:data.server.ipAddress,
			// 	notification:data.server.notification,
			// }
			setServers([data.server, ...servers]);
			if (data.success === true) {
				setSuccess(true);
			} else {
				setSuccess(false);
			}
		} catch (err) {
			setError(err.message);
		}
	}

	useEffect(() => {
		getServers();
	}, []);

	const requests = useMemo(
		() => ({
			servers,
			error,
			loading,
			success,
			addServer,
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
