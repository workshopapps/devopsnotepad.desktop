import React, { useEffect, useState, useCallback } from 'react';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './Home.module.css';
import Onboarding from '../../Components/Onboarding/Onboarding';
import ServerCard from '../../Components/ServerCard/ServerCard';
// import Servers from './ServerData';
import addBg from './Assets/add.svg';

function Home() {
	const [newUser, setNewUser] = useState(null);
	const Servers = [];

	// Initiate Onboarding
	// Checks local storage if this is the first time the user is using the app, if not a new User, changes new user to true and initiates onboarding process
	useEffect(() => {
		const isNewUser = localStorage.getItem('isNewUser');
		if (!isNewUser) {
			setNewUser(true);
		}
	});

	// Disable onboarding for subsequent run
	// On click get started in onboarding, close onboarding and set isNewUser to false in local storage so that next time the user opens the app it skips the onboarding process
	const getStarted = useCallback(() => {
		setNewUser(false);
		localStorage.setItem('isNewUser', false);
	}, [newUser]);

	// Query api for user data
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
			{Servers.length === 0 && (
				<div className={style.no_server}>
					<figure>
						<img src={addBg} alt="" aria-hidden />
					</figure>
					<div className={style.no_server_content}>
						<h2>Empty Server List</h2>
						<p>You do not have any servers yet.</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
