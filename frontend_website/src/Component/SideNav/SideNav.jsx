/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import logo from './assets/logo.png';
import Group from './assets/Group.png';
import styles from './SideNav.module.css';
import ServerContext from '../Context/ServerContext';
import Button from '../../Pages/CareerPage/Button/Button';
// import { ClassNames } from '@emotion/react';
/* eslint-disable camelcase */

function SideNav() {
  const { servers } = useContext(ServerContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggling = () => setIsOpen(!isOpen);

  const navigate = useNavigate();

  async function logout() {
    const headers = {
      'Content-Type': 'application/json',
    };

    await axios.get('https://opspad.hng.tech/api/auth/logout', headers)
      .then(response => console.log(response))
      .then(navigate("/login"),
        localStorage.removeItem("loggedInUser"))
      .catch(error => {
        console.error(error);
      });

    return null;
  }





  return (
    <div className={styles.sidenav}>
      <Link to='/'>
        <img src={logo} alt='' className={styles.logo} />
      </Link>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className={styles.nav}>
          <img src={Group} alt='' className={styles.navItem} />
          <p className={styles.navItem}>Servers List</p>
          <div>
            <RiArrowDownSLine className={styles.icon_tog} onClick={toggling} />
          </div>
        </div>

        {isOpen && !servers.length > 0 && (
          <p style={{ textAlign: 'center' }}>No server created yet</p>
        )}
        {isOpen && servers.length > 0 && (
          <ul className={styles.ul}>
            {servers.map((server) => (
              <li className={styles.li}>
                <Link
                  key={server.id}
                  to={`/server/${server.id}`}
                  className={styles.li_link}
                >
                  {server.name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Button className={styles.button} onClick={() => navigate('/add-server')}>
        Create Server{' '}
        <span>
          <RiAddCircleLine className={styles.btn__svg} />
        </span>
      </Button>

      <Link to='/settings' className={styles.sidenav__link}>
        Settings
      </Link>


      <button className={styles.logOutButton} onClick={logout}
        style={{ position: 'absolute', bottom: '20px' }}
      >Log Out</button>
    </div>
  );
}

export default SideNav;