/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import Group from './assets/Group.svg';
import styles from './SideNav.module.css';
import ServerContext from '../Context/ServerContext';
/* eslint-disable camelcase */

function Sidenav() {
	const { servers } = useContext(ServerContext);
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	const [click, setClick] = useState(false);

	const handleClick = () => setClick(!click);

	return (
		<div>
			<section className={styles.main}>
				<div className={styles.hamburger} onClick={handleClick}>
					{click ? (
						<FaTimes size={25} style={{ color: '#000000' }} />
					) : (
						<FaBars size={25} style={{ color: '#000000' }} />
					)}
				</div>

				{click ? (
					<div className={styles.sidenav}>
						<Link to="/">
							<img src={logo} alt="" className={styles.logo} />
						</Link>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div className={styles.nav}>
								<img src={Group} alt="" className={styles.navItem} />

								<p className={styles.navItem}> Servers List</p>

								<div>
									<RiArrowDownSLine
										style={{ cursor: 'pointer' }}
										onClick={toggling}
									/>
								</div>
							</div>

							{isOpen && (
								<div>
									<ul className={styles.dropDown}>
										{servers.map((server) => (
											<Link
												key={server.id}
												to={`/server/${server.id}`}
												style={{ textDecoration: 'none' }}
											>
												<li className={styles.listItem}>{server.name}</li>
											</Link>
										))}
									</ul>
								</div>
							)}
						</div>{' '}
						<Link
							to="/add-server"
							style={{ color: 'white', textDecoration: 'none' }}
						>
							<button className={styles.btn}>
								Add Server
								<RiAddCircleLine style={{ marginLeft: '20px' }} />
							</button>
						</Link>
						<Link to="/settings" style={{ textDecoration: 'none' }}>
							{' '}
							<p className={styles.settings}>Settings</p>{' '}
						</Link>
					</div>
				) : (
					<div className={styles.sidenav2}>
						<Link to="/">
							<img src={logo} alt="" className={styles.logo2} />
						</Link>
						<div style={{ display: 'flex', flexDirection: 'column' }}>
							<div className={styles.nav2}>
								<img src={Group} alt="" className={styles.navItem2} />

								<p className={styles.navItem2}> Servers List</p>

								<div>
									<RiArrowDownSLine
										style={{ cursor: 'pointer' }}
										onClick={toggling}
									/>
								</div>
							</div>

							{isOpen && (
								<div>
									<ul className={styles.dropDown2}>
										{servers.map((server) => (
											<Link
												key={server.id}
												to={`/server/${server.id}`}
												style={{ textDecoration: 'none' }}
											>
												<li className={styles.listItem2}>{server.name}</li>
											</Link>
										))}
									</ul>
								</div>
							)}
						</div>{' '}
						<Link
							to="/add-server"
							style={{ color: 'white', textDecoration: 'none' }}
						>
							<button className={styles.btn2}>
								Add Server
								<RiAddCircleLine style={{ marginLeft: '20px' }} />
							</button>
						</Link>
						<Link to="/settings" style={{ textDecoration: 'none' }}>
							{' '}
							<p className={styles.settings2}>Settings</p>{' '}
						</Link>
					</div>
				)}
			</section>
		</div>
	);
}

export default Sidenav;
