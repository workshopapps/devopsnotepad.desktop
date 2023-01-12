/* eslint-disable react/button-has-type */
import React, { useState, useContext } from 'react';
import { RiArrowDownSLine, RiAddCircleLine } from 'react-icons/ri';
import { MdDelete } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import logo from './assets/logo.png';
import Group from './assets/Group.png';
import styles from './SideNav.module.css';
import Button from '../../Pages/CareerPage/Button/Button';
import ProfileBar from '../ProfileBar/ProfileBar';
import { ServerContext } from '../../store/ServerContext';
import useFetch from '../../hooks/useFetch';
import { ImMenu } from 'react-icons/im';
import { AiOutlineClose } from 'react-icons/ai';
import MobileProfile from './MobileProfile';

/* eslint-disable camelcase */

function SideNav() {
  const { servers, addServers } = useContext(ServerContext);
  const [isOpen, setIsOpen] = useState(false);

  // Nav mobile
  const [navIsOpen, setNavIsOpen] = useState(false);

  const toggling = () => setIsOpen(!isOpen);

  const navigate = useNavigate();
  const { fetchRequest } = useFetch();

  const getDeleteResponse = (responseObj) => {
    console.log(responseObj, '/delete-server');
  };

  const deleteServerHandler = (server_id) => {
    console.log(server_id);
    const confirmDelete = prompt(
      'Are you sure you want to delete server? Answer with a Yes or No',
    );
    if (confirmDelete.toLowerCase() === 'no') {
      return;
    }
    console.log('Starting the delete request');
    fetchRequest(
      {
        url: 'https://opspad.dev/api/server/delete',
        method: 'POST',
        body: {
          serverIds: [server_id],
        },
        headers: {
          'Content-Type': 'application/json',
        },
      },
      getDeleteResponse,
    );
    console.log('I go executed to this place');
    // Getting the updated servers
    const getResponseData = (data) => {
      console.log(data, 'all servers');
      addServers(data);
    };

    fetchRequest(
      {
        url: 'https://opspad.dev/api/server/all',
      },
      getResponseData,
    );
  };

  return (
    <>
      {' '}
      <div className={styles.sidenav}>
        <Link to='/'>
          <img src={logo} alt='' className={styles.logo} />
        </Link>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div className={styles.nav}>
            <img src={Group} alt='' className={styles.navItem} />
            <p className={styles.navItem}>Servers List</p>
            <div>
              <RiArrowDownSLine
                className={styles.icon_tog}
                onClick={toggling}
              />
            </div>
          </div>

          {isOpen && !servers.length > 0 && (
            <p style={{ textAlign: 'center' }}>No server created yet</p>
          )}
          {isOpen && servers.length > 0 && (
            <ul className={styles.ul}>
              {servers.map((server, index) => (
                <li className={styles.li} key={server.id}>
                  <Link to={`/server/${server.id}`} className={styles.li_link}>
                    {server.name}{' '}
                  </Link>
                  <MdDelete
                    className={styles.name__icon}
                    onClick={deleteServerHandler.bind(null, server.id)}
                  />
                </li>
              ))}
            </ul>
          )}
        </div>

        <Button
          className={styles.button}
          onClick={() => navigate('/add-server')}
        >
          Create Server{' '}
          <span>
            <RiAddCircleLine className={styles.btn__svg} />
          </span>
        </Button>

        <ProfileBar />
      </div>
      {/* Mobile Nav */}
      <div className={styles.mobileBox}>
        <div className={styles.fixed}>
          <Link to='/'>
            <img src={logo} alt='' className={styles.logo} />
          </Link>
          {navIsOpen ? (
            <AiOutlineClose
              className={styles.nav__svg}
              onClick={() => setNavIsOpen((prev) => !prev)}
            />
          ) : (
            <ImMenu
              className={styles.nav__svg}
              onClick={() => setNavIsOpen((prev) => !prev)}
            />
          )}
        </div>
        {navIsOpen && (
          <div className={styles.mobile}>
            <div className={styles.mobile__box}>
              <div className={styles.mobile__nav}>
                <img src={Group} alt='' className={styles.mobile__img} />
                <p className={styles.mobile__p}>Servers List</p>
                <div>
                  <RiArrowDownSLine
                    className={styles.icon_tog}
                    onClick={toggling}
                  />
                </div>
              </div>
              {isOpen && !servers.length > 0 && (
                <p className={styles.no__server}>No server created yet</p>
              )}
              {isOpen && servers.length > 0 && (
                <ul className={styles.ul}>
                  {servers.map((server, index) => (
                    <li className={styles.li} key={server.id}>
                      <Link
                        to={`/server/${server.id}`}
                        className={styles.li_link}
                        onClick={() => setNavIsOpen(false)}
                      >
                        {server.name}{' '}
                      </Link>
                      <MdDelete
                        className={styles.name__icon}
                        onClick={deleteServerHandler.bind(null, server.id)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <Button
              className={styles.button}
              onClick={() => {
                navigate('/add-server');
                setNavIsOpen(false);
              }}
            >
              Create Server{' '}
              <span>
                <RiAddCircleLine className={styles.btn__svg} />
              </span>
            </Button>
            <MobileProfile />
          </div>
        )}
      </div>
    </>
  );
}

export default SideNav;

