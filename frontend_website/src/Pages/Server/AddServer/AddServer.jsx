/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddServerSuccess from '../../../Component/AddServerSuccess/AddServerSuccess';
import { BiArrowBack } from 'react-icons/bi';
import SideNav from '../../../Component/SideNav/SideNav';
import useFetch from '../../../hooks/useFetch';
import { ServerContext } from '../../../store/ServerContext';
import LoadingSpinner from '../SimpleNotifications/LoadingSpinner';
import style from './AddServer.module.css';

function ValidateIPaddress(ipaddress) {
  console.log(ipaddress);
  if (
    /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(
      ipaddress,
    )
  ) {
    return true;
  }
  return false;
}

const AddServer = () => {
  const { addServers } = useContext(ServerContext);

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    ipAddress: '',
  });
  const [ipIsValid, setIpIsValid] = useState(true);

  const [isBtnDisabled, setIsBtnDisabled] = useState(true);

  const { name, ipAddress } = formData;

  function onMutate(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  useEffect(() => {
    // console.log(formData);
    if (name !== '') {
      setIsBtnDisabled(false);
    } else {
      setIsBtnDisabled(true);
    }
  }, [name]);

  const { isLoading, error, fetchRequest } = useFetch();
  const [success, setSuccess] = useState(false);

  const getResponse = (response) => {
    console.log(response);
    if (
      response.success === true ||
      response.message === 'server created successfully'
    ) {
      setSuccess(true);
    }
  };

  const closeModal = () => {
    setSuccess(false);
  };

  function onSubmit(e) {
    e.preventDefault();

    if (!ValidateIPaddress(ipAddress)) {
      setIpIsValid(false);
      return;
    } else setIpIsValid(true);

    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser === null) {
      navigate('/login');
    }
    const { token } = loggedInUser;
    fetchRequest(
      {
        url: 'https://opspad.hng.tech/api/server',
        method: 'POST',
        body: {
          name,
          ipAddress,
        },
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      },
      getResponse,
    );
    setFormData({
      name: '',
      ipAddress: '',
    });

    // Fetch all servers again
    const getResponseData = (data) => {
      addServers(data);
    };

    fetchRequest(
      {
        url: 'https://opspad.hng.tech/api/server/all',
      },
      getResponseData,
    );
  }

  // Close success modal and route to dashboard
  return (
    <div className={style.addserver}>
      {!isLoading && !error.hasError && success && (
        <AddServerSuccess closeSuccess={closeModal} />
      )}
      <div className={style.left}>
        <SideNav />
      </div>
      <div className={style.right}>
        <div className={style.PageTop} style={{ width: '60%', textAlign: 'left' }}>
          <BiArrowBack
            onClick={() => navigate('/server')}
            className={style.svg}
          />
        </div>
        <form onSubmit={onSubmit} className={style.form}>
          <div className={style.h1box}>
            <h1 className={style.h1}>Create Server</h1>
          </div>
          <div className={style.inputs}>
            <div className={style.form_control}>
              <label htmlFor='name'>Server Name</label>
              <input
                required
                onChange={onMutate}
                type='text'
                id='name'
                value={name}
              />
            </div>
            <div className={style.form_control}>
              <label htmlFor='ipAddress'>IP Address </label>
              <input
                onChange={onMutate}
                type='text'
                id='ipAddress'
                placeholder='A valid ip address e.g 192.158.1.38'
                value={ipAddress}
                min='2'
              />
              {!ipIsValid && (
                <p className={style.invalid__input}>Invalid Ip Address</p>
              )}
            </div>
          </div>
          {isLoading && <LoadingSpinner />}
          <button
            disabled={isBtnDisabled}
            type='submit'
            className={`${style.btn} ${isBtnDisabled ? style.btnDisabled : style.btnEnabled
              }`}
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddServer;
