import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SideNav from '../../Component/SideNav/SideNav';
import useFetch from '../../hooks/useFetch';
import { ServerContext } from '../../store/ServerContext';
import Button from '../CareerPage/Button/Button';

import vector from './assets/Vector.png';

import classes from './Server.module.css';
function Server() {
  const navigate = useNavigate();
  const { servers, addServers } = useContext(ServerContext);

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
      <div style={{ flexBasis: '80%' }}>
        {servers.length > 0 && (
          <section className={classes.available}>
            <p className={classes.p}>
              Kindly select a server from the server list.
            </p>
          </section>
        )}
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
