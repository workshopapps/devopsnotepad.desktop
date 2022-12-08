/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import AddServerSuccess from '../../../Component/AddServerSuccess/AddServerSuccess';
import ServerContext from '../../../Component/Context/ServerContext';

import SideNav from '../../../Component/SideNav/SideNav';
import style from './AddServer.module.css';

function AddServer() {
  const { addServer, success, setSuccess, loading } = useContext(ServerContext);
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    ipAddress: ''
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

  function onSubmit(e) {
    e.preventDefault();
    const loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser === null) { navigate('/login') };

    const { token } = loggedInUser;
    fetch('https://opspad.hng.tech/api/server', {
      method: "POST",
      body: JSON.stringify({
        name,
        ipAddress
      }),
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => response.json())
      .then(json => addServer(json.server))
      .catch(e => console.log(e));
  }

  // Close successfully added server modal
  function closeSuccess() {
    setSuccess(false);
    setFormData({ name: '', ipAddress: '' });
  }

  // Close success modal and route to dashboard

  return (
    <div className={style.AddServer}>
      {success && (
        <AddServerSuccess message='created' closeSuccess={closeSuccess} />
      )}
      <SideNav />
      <div className={style.container}>
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

          <button
            disabled={isBtnDisabled}
            type='submit'
            className={`${style.btn} ${isBtnDisabled ? style.btnDisabled : style.btnEnabled
              }`}
          >
            Done
          </button>
        </form>

        {loading && (
          <p className={style.loading}> Creating Server, Please wait...</p>
        )}
      </div>
    </div>
  );
}

export default AddServer;
