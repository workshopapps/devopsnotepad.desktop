import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SideNav from '../../Component/SideNav/SideNav';
import useFetch from '../../hooks/useFetch';
import { ServerContext } from '../../store/ServerContext';
import { UserContext } from '../../store/UserContext';
import Button from '../CareerPage/Button/Button';
import style from '../../Component/ServerInfo/ServerInfo.module.css';
import vector from './assets/Vector.png';
import {
  BsFillCloudArrowDownFill,
  BsFillCloudArrowUpFill,
} from 'react-icons/bs';
import classes from './Server.module.css';
import { BiArrowBack } from 'react-icons/bi';
function Server() {
  const navigate = useNavigate();
  const { servers, addServers } = useContext(ServerContext);
  const { availabilityNotifications } = useContext(UserContext);

  const { fetchRequest } = useFetch();

  useEffect(() => {
    const getResponseData = (data) => {
      addServers(data);
    };
    fetchRequest(
      {
        url: 'https://opspad.hng.tech/api/server/all',
      },
      getResponseData,
    );
  }, [fetchRequest, addServers]);

  return (
    <div className={classes.server}>
      <div>
        <SideNav />
      </div>
      <div className={classes.serverListContainer} style={{ flexBasis: '80%' }}>
        <h2 className={classes.serverHeader}>Server List</h2>
        {servers.length > 0 && (
          (servers?.map((server) => (
            <div className={style.container}>
              <Link to={`/server/${server.id}`}>
                <h2>{server.name}</h2>
                <table className={style.table}>
                  <tbody>
                    <tr>
                      <th>IP Address:</th>
                      <td className={style.data}>{server.ipAddress}</td>
                    </tr>
                    <tr>
                      <th>Server Status:</th>
                      <td>
                        <p
                          className={`${availabilityNotifications?.status ? `${style.status_active}` : `${style.status_inactive}`
                            }`}
                        >
                          {availabilityNotifications?.status ? 'Up' : 'Down'}
                          <span>
                            {availabilityNotifications?.status ? (
                              <BsFillCloudArrowUpFill className={style.status_svg} />
                            ) : (
                              <BsFillCloudArrowDownFill className={style.status_svg} />
                            )}
                          </span>
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Link>
            </div>
          ))
          ))}
        {servers.length === 0 && (
          <section className={classes.empty}>
            <div className={classes.div}>
              <img src={vector} alt='empty' className={classes.img} />
              <h4 className={classes.h4}>Empty Server List</h4>
              <p className={classes.p}>You do not have a server yet</p>
            </div>
            <Button
              className={classes.button}
              onClick={() => navigate('/add-server')}
            >
              Create Server
            </Button>
          </section>
        )}
      </div>
    </div>
  );
}

export default Server;
