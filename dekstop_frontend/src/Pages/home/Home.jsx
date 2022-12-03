import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './Home.module.css';
import ServerCard from '../../Components/ServerCard/ServerCard';
// import Servers from './ServerData';
import addBg from './Assets/add.svg';
import search from './Assets/search.svg';
import Auth from '../../Components/GlobalPassword/Auth';

function Home() {
	const { servers, loading, getServers } = useContext(ServerContext);
	const [query, setQuery] = useState('');
	const [auth, setAuth] = useState(true);
	const navigate = useNavigate();

	// Initiate Onboarding
	// Checks local storage if this is the first time the user is using the app, if not a new User, changes new user to true and initiates onboarding process
	useEffect(() => {
		getServers();
		const isNewUser = localStorage.getItem('isNewUser');
		if (!isNewUser) {
			navigate('/onboarding');
		}
	});

	// function to close authentication process
	const closeAuth = useCallback(() => {
		setAuth(false);
	});

	// Filter servers displayed by user query
	function getFilteredServers(queryValue, items) {
		if (!queryValue) {
			return items;
		}
		return items.filter((item) => item.name.includes(queryValue));
	}
	const filteredServers = getFilteredServers(query, servers);

	return (
		<div id="home" className={style.HomeWrapper}>
			<Sidenav />

			{!auth && loading && (
				<div className={style.loading}>Loading Servers...</div>
			)}
			{!auth && servers && (
				<div className={style.container}>
					{servers.length > 0 && (
						<div className={style.search}>
							<img src={search} alt="filter servers" />
							<input
								value={query}
								type="search"
								onChange={(e) => setQuery(e.target.value)}
							/>
						</div>
					)}
					{filteredServers.map((server) => (
						<ServerCard
							key={server.id}
							id={server.id}
							serverId={server.serverId}
							name={server.name}
							ipAddress={server.ipAddress}
							serverHealth={server.serverHealth}
						/>
					))}
				</div>
			)}

			{(!auth && !servers) ||
				(servers.length === 0 && (
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
				))}

			{auth && <Auth closeAuth={closeAuth} />}
		</div>
	);
}

export default Home;
