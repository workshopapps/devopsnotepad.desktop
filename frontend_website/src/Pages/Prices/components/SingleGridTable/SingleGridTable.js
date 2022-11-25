import React, { useState } from 'react';
// import GridData from '../../GridData';
import style from './SingleGridTable.module.css';
import bad from '../../images/x.svg';
import good from '../../images/good.svg';

const SingleGridTable = () => {
  const [showBundle, setShowBundle] = useState({
    starter: true,
    professional: false,
    organization: false,
  });

  const showbundleStarter = showBundle.starter ? style.active : '';
  const showbundleProfessional = showBundle.professional ? style.active : '';
  const showbundleOrganization = showBundle.organization ? style.active : '';

  return (
    <div className={`${style.singleTableContainer} ${style.hideSingle}`}>
      <ul className={style.list}>
        <li
          className={`${style.li} ${showbundleStarter}`}
          onClick={() =>
            setShowBundle({
              starter: true,
              professional: false,
              organization: false,
            })
          }
        >
          Starter
        </li>
        <li
          className={`${style.li} ${showbundleProfessional}`}
          onClick={() =>
            setShowBundle({
              starter: false,
              professional: true,
              organization: false,
            })
          }
        >
          Professional
        </li>
        <li
          className={`${style.li} ${showbundleOrganization}`}
          onClick={() =>
            setShowBundle({
              starter: false,
              professional: false,
              organization: true,
            })
          }
        >
          Organization
        </li>
      </ul>

      {showBundle.starter && (
        <div className={style.singleGrid}>
          <h9 className={style.gridHeader}>Unlimited Number of servers</h9>
          <img className={`${style.gridItem} ${style.bad}`} src={bad} alt='' />
          <h9 className={style.gridHeader}>Note</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Third party integration</h9>
          <img className={`${style.gridItem} ${style.bad}`} src={bad} alt='' />
          <h9 className={style.gridHeader}>Collaborators</h9>
          <img className={`${style.gridItem} ${style.bad}`} src={bad} alt='' />
          <h9 className={style.gridHeader}>Unlimited downloads</h9>
          <img className={`${style.gridItem} ${style.bad}`} src={bad} alt='' />
          <h9 className={style.gridHeader}>Access to Opspad community</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
        </div>
      )}

      {showBundle.professional && (
        <div className={style.singleGrid}>
          <h9 className={style.gridHeader}>Unlimited Number of servers</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Note</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Third party integration</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Collaborators</h9>
          <img className={`${style.gridItem} ${style.bad}`} src={bad} alt='' />
          <h9 className={style.gridHeader}>unlimited downloads</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Access to Opspad community</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
        </div>
      )}

      {showBundle.organization && (
        <div className={style.singleGrid}>
          <h9 className={style.gridHeader}>Unlimited Number of servers</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Note</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Third party integration</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Collaborators</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>unlimited downloads</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
          <h9 className={style.gridHeader}>Access to Opspad community</h9>
          <img
            className={`${style.gridItem} ${style.good}`}
            src={good}
            alt=''
          />
        </div>
      )}
    </div>
  );
};

export default SingleGridTable;
