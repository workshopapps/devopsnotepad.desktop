/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import logo from './assets/logo.png';
import Group from './assets/Group.png';
import styles from './SideNav.module.css';
import ServerContext from '../Context/ServerContext';
<<<<<<< HEAD
/* eslint-disable camelcase */

function Sidenav() {
	const { servers } = useContext(ServerContext);
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div>
			<section className={styles.main}>
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
					</div>

					<button className={styles.btn}>
						{' '}
						<Link
							to="/add-server"
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
=======
// import { ClassNames } from '@emotion/react';
/* eslint-disable camelcase */

function SideNav() {
  const { servers } = useContext(ServerContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  return (
    <div>
      <section className={styles.main}>
        <div className={styles.sidenav}>
          <Link to='/'>
            <img src={logo} alt='' className={styles.logo} />
          </Link>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <div className={styles.nav}>
              <img src={Group} alt='' className={styles.navItem} />

              <p className={styles.navItem}> Servers List</p>

              <div>
                <RiArrowDownSLine
                  className={styles.icon_tog}
                  onClick={toggling}
                />
              </div>
            </div>

            {isOpen && (
              <ul className={styles.dropDown}>
                {servers.map((server) => (
                  <Link
                    key={server.id}
                    to={`/server/${server.id}/notification`}
                    className={styles.aa}
                  >
                    <li className={styles.listItem}>{server.name}</li>
                  </Link>
                ))}
              </ul>
            )}
          </div>

          <Link
            to='/add-server'
            style={{ color: 'white', textDecoration: 'none' }}
          >
            <button className={styles.btn}>
              Create Server
              <RiAddCircleLine style={{ marginLeft: '20px' }} />
            </button>
          </Link>

          <Link to='/settings' style={{ textDecoration: 'none' }}>
            {' '}
            <p className={styles.settings}>Settings</p>{' '}
          </Link>
        </div>
      </section>
    </div>
  );
}

export default SideNav;
>>>>>>> 044ef40dd9da1804b4ded72a9277f5525016c9d9
