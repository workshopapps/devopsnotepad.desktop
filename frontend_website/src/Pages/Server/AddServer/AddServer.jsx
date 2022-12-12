/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddServerSuccess from '../../../Component/AddServerSuccess/AddServerSuccess';
import ServerContext from '../../../Component/Context/ServerContext';

import SideNav from '../../../Component/SideNav/SideNav';
import useFetch from '../../../hooks/useFetch';
import Button from '../../CareerPage/Button/Button';
import style from './AddServer.module.css';

function AddServer() {
  // const { addServer, success, setSuccess, loading } = useContext(ServerContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    ipAddress: '',
  });
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
    if (response.message === 'Sucess') {
      setSuccess(true);
    }
  };

  const closeModal = () => {
    setSuccess(false);
  };

  function onSubmit(e) {
    e.preventDefault();
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
        <Button onClick={() => navigate('/server')} className={style.button}>
          Back
        </Button>
        <h1>Create Server</h1>
        <form onSubmit={onSubmit} className={style.form}>
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
                value={ipAddress}
                min='2'
              />
            </div>
          </div>
          {isLoading && (
            <p className={style.loading}> Creating Server, Please wait...</p>
          )}
          <button
            disabled={isBtnDisabled}
            type='submit'
            className={`${style.btn} ${
              isBtnDisabled ? style.btnDisabled : style.btnEnabled
            }`}
          >
            Done
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddServer;
