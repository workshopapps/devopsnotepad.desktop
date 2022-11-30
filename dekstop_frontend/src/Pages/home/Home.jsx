import React, { useEffect, useState, useCallback, useContext } from 'react';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './Home.module.css';
import Onboarding from '../../Components/Onboarding/Onboarding';
import ServerCard from '../../Components/ServerCard/ServerCard';
// import Servers from './ServerData';
import addBg from './Assets/add.svg';

function Home() {
	const { servers } = useContext(ServerContext);
	const [newUser, setNewUser] = useState(null);
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
					{servers.map((server) => (
						<ServerCard
							key={server.id}
							name={server.name}
							ipAddress={server.ipAddress}
							serverHealth={server.serverHealth}
						/>
					))}
				</div>
			)}
			{servers.length === 0 && (
				<div className={style.no_server}>
					<figure>
						<img src={addBg} alt="" aria-hidden />
					</figure>
					<div className={style.no_server_content}>
						<h2>Empty Server List</h2>
						<p>You do not have any Servers yet.</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default Home;
