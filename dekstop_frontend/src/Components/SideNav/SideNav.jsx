/* eslint-disable react/button-has-type */
import React, { useState, useContext, useEffect } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from './assets/logo.svg';
import Group from './assets/Group.svg';
import styles from './SideNav.module.css';
import ServerContext from '../Context/ServerContext';
/* eslint-disable camelcase */

function Sidenav() {
	const { servers } = useContext(ServerContext);
	const [isOpen, setIsOpen] = useState(false);
	const [navbarOpen, setNavbarOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	useEffect(() => {
		if (navbarOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	return (
		<div>
			<button
				type="button"
				onClick={() => setNavbarOpen(!navbarOpen)}
				className={`${styles.hamburger} ${navbarOpen ? styles.open : ''}`}
			>
				<span className={styles.line} />
				<span className={styles.line} />
				<span className={styles.line} />
			</button>
			{navbarOpen && (
				<input
					type="click"
					onClick={() => setNavbarOpen(false)}
					className={styles.overlay}
				/>
			)}
			<section className={styles.main}>
				<div
					className={`${styles.sidenav} ${
						navbarOpen ? styles.display_nav : ''
					}`}
				>
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
			</section>
		</div>
	);
}

export default Sidenav;
