/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Group from './assets/Group.png';
import styles from './SideNav.module.css';

function Sidenav() {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div>
			<section className={styles.main}>
				<div className={styles.sidenav}>
					<img src={logo} alt="" className={styles.logo} />

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
									<Link to="/note" style={{ textDecoration: 'none' }}>
										{' '}
										<li className={styles.listItem}>HNG Server</li>{' '}
									</Link>

									<Link to="/#" style={{ textDecoration: 'none' }}>
										{' '}
										<li className={styles.listItem}>AYO Server</li>{' '}
									</Link>

									<Link to="/#" style={{ textDecoration: 'none' }}>
										{' '}
										<li className={styles.listItem}> OMO Server</li>{' '}
									</Link>
								</ul>
							</div>
						)}
					</div>

					<button className={styles.btn}>
						{' '}
						<Link
							to="/add-Server"
							style={{ color: 'white', textDecoration: 'none' }}
						>
							Add Server
						</Link>
						<RiAddCircleLine style={{ marginLeft: '20px' }} />
					</button>

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
