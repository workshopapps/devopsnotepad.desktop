/* eslint-disable react/prop-types */
import { createContext, useMemo, useState, useEffect } from 'react';

const ServerContext = createContext();

export function ServerProvider({ children }) {
	// const [isLoading, setIsLoading] = useState(true);
	const [servers, setServers] = useState([]);
	const BASE_URL = 'https://devsapp.onrender.com/Server';
	// deviceId needs to be dynamic
	const deviceId = '80988579';

	async function getServer() {
		const response = await fetch(`${BASE_URL}?device=${deviceId}`, {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			},
		});

		const data = await response.json();
		setServers(data.servers);
	}

	useEffect(() => {
		getServer();
	}, []);

	const requests = useMemo(() => ({ servers }), [servers]);

	return (
		<ServerContext.Provider value={requests}>{children}</ServerContext.Provider>
	);
}

export default ServerContext;
