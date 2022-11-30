/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	const [loading, setLoading] = useState(true);
	const [servers, setServers] = useState([]);
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

	async function getServer() {
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

	async function addServer(server) {
		const id = await getDeviceID();
		// eslint-disable-next-line no-param-reassign
		server.deviceId = id;
		// setIsLoading(true);
		const response = await fetch(`${BASE_URL}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(server),
		});

		const data = await response.json();
		setServers([data.server, ...servers]);
	}

	useEffect(() => {
		getServer();
	}, []);

	const requests = useMemo(
		() => ({ servers, error, loading, addServer, getServer }),
		[loading]
	);

	return (
		<ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
	);
}

export default ServerContext;
