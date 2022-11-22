import React, { useState } from 'react';
import GridData from '../../GridData';
import './SingleGridTable.css';
import bad from '../../x.svg';
import good from '../../good.svg';

const SingleGridTable = () => {
  const [showBundle, setShowBundle] = useState({
    starter: true,
    professional: false,
    organization: false,
  });

  return (
    <div className='single-table-container hide-single'>
      <ul>
        <li
          className={showBundle.starter && 'active'}
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
          className={showBundle.professional && 'active'}
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
          className={showBundle.organization && 'active'}
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
      <div className='single-grid-table'>
        <h9 className='grid-header'>Unlimited Number of servers</h9>
        <img className='grid-item bad' src={good} alt='' />
        <h9 className='grid-header'>Note</h9>
        <img className='grid-item bad' src={bad} alt='' />
        <h9 className='grid-header'>Unlimited Number of servers</h9>
        <img className='grid-item bad' src={bad} alt='' />
        <h9 className='grid-header'>Unlimited Number of servers</h9>
        <img className='grid-item bad' src={bad} alt='' />
        <h9 className='grid-header'>Unlimited Number of servers</h9>
        <img className='grid-item bad' src={bad} alt='' />
      </div>
    </div>
  );
};

export default SingleGridTable;
