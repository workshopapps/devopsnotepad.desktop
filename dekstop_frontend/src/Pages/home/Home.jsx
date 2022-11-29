import React, { useEffect, useState, useCallback } from 'react';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './Home.module.css';
import Onboarding from '../../Components/Onboarding/Onboarding';
import ServerCard from '../../Components/ServerCard/ServerCard';
import Servers from './ServerData';

function Home() {
	const [newUser, setNewUser] = useState(null);
	useEffect(() => {
		const isNewUser = localStorage.getItem('isNewUser');
		if (!isNewUser) {
			setNewUser(true);
		}
	});

	const getStarted = useCallback(() => {
		setNewUser(false);
		localStorage.setItem('isNewUser', false);
	}, [newUser]);

	return (
		<div className={style.HomeWrapper}>
			<Sidenav />
			{newUser && <Onboarding closeOnboarding={getStarted} />}

			{!newUser && (
				<div className={style.container}>
					{Servers.map((server) => (
						<ServerCard
							key={server.id}
							name={server.name}
							ipAddress={server.ipAddress}
							serverHealth={server.serverHealth}
						/>
					))}
				</div>
			)}
		</div>
	);
}

export default Home;
