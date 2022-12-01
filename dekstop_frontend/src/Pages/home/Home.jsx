import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './Home.module.css';
import ServerCard from '../../Components/ServerCard/ServerCard';
import Onboarding from '../../Components/Onboarding/Onboarding';
// import Servers from './ServerData';
import addBg from './Assets/add.svg';

function Home() {
	const { servers, loading, getServers } = useContext(ServerContext);
	// const navigate = useNavigate();

	// Initiate Onboarding
	// Checks local storage if this is the first time the user is using the app, if not a new User, changes new user to true and initiates onboarding process
	useEffect(() => {
		getServers();
		// const isNewUser = localStorage.getItem('isNewUser');
		// if (!isNewUser) {
		// 	navigate('/onboarding');
		// }
	});

	return loading ? (
		<Onboarding />
	) : (
		<div className={style.HomeWrapper}>
			<Sidenav />
			{loading && <div className={style.loading}>Loading Servers...</div>}
			{servers && (
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

			{!servers && (
				<div className={style.no_server}>
					<Link to="/add-server">
						<figure>
							<img src={addBg} alt="" aria-hidden />
						</figure>
					</Link>

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
