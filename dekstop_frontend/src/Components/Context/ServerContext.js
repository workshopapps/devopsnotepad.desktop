/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	const [isLoading, setIsLoading] = useState(true);
	const [servers, setServers] = useState([]);
	const BASE_URL = 'https://devsapp.onrender.com/Server';
	// deviceId needs to be dynamic
	// const deviceId = '80988579';

	async function getServer() {
		const response = await fetch(`${BASE_URL}?device=${'80988579'}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		setIsLoading(false);
		setServers(data.servers);
	}

	function getDeviceID() {
		let deviceId = localStorage.getItem('deviceId');
		if (deviceId) return deviceId;

		deviceId = uuidv4();
		localStorage.setItem('deviceId', deviceId);
		return deviceId;
	}

	useEffect(() => {
		getServer();
		console.log(getDeviceID());
	}, []);

	const requests = useMemo(
		() => ({ servers, isLoading }),
		[servers, isLoading]
	);

	return (
		<ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
	);
}

export default ServerContext;
