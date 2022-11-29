import { createContext, useState } from 'react';

const ServerContext = createContext();

export const ServerProvider = ({ children }) => {
	// const [isLoading, setIsLoading] = useState(false);
	const [deviceId, setDeviceId] = useState('');
	const BASE_URL = 'https://devsapp.onrender.com';

	// const addUrl = async (newUrl) => {
	// 	setIsLoading(true);
	// 	const response = await fetch(`${BASE_URL}url`, {
	// 		method: 'POST',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify({ new_url: newUrl }),
	// 	});

	// 	const data = await response.json();
	// 	setUrl(data.url);
	// 	console.log(data.url);
	// 	setIsLoading(false);
	// };

	return (
		<ServerContext.Provider value={{ isLoading, url, addUrl }}>
			{children}
		</ServerContext.Provider>
	);
};

export default ServerContext;
