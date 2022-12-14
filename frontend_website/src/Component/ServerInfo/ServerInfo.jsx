import React from 'react';
import PropTypes from 'prop-types';
import {
  BsFillCloudArrowDownFill,
  BsFillCloudArrowUpFill,
} from 'react-icons/bs';
import style from './ServerInfo.module.css';
import { BiArrowBack } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';

function ServerInfo({ name, ipAddress, status }) {
  const navigate = useNavigate()
  return (
    <div className={style.container}>
      <div className={style.pageTop} >
        <BiArrowBack
          onClick={() => navigate('/servers')}
          className={style.Arrowsvg}
        />
        <h2>{name}</h2>
      </div>
      <table className={style.table}>
        <tbody>
          <tr>
            <th>IP Address:</th>
            <td className={style.data}>{ipAddress}</td>
          </tr>
          <tr>
            <th>Server Status:</th>
            <td>
              <p
                className={`${status ? `${style.status_active}` : `${style.status_inactive}`
                  }`}
              >
                {status ? 'Up' : 'Down'}
                <span>
                  {status ? (
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
    </div>
  );
}

ServerInfo.propTypes = {
  name: PropTypes.string,
  ipAddress: PropTypes.string,
  serverHealth: PropTypes.string,
};

ServerInfo.defaultProps = {
  name: 'HNG SERVER',
  ipAddress: '192.168.0.1',
  serverHealth: 'UP',
};

export default ServerInfo;
