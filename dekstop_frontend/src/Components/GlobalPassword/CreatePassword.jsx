/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable object-shorthand */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import styles from '../GlobalPassword/CreatePassword.module.css';
import Sidenav from './../SideNav/SideNav';
import Auth  from '../GlobalPassword/Auth'

function CreatePassword({ closeOnboarding }) {
	const [password, setPassword] = useState('');
	const [showAuth, setShowAuth] = useState(false);
	const navigate = useNavigate();
	

	CreatePassword.propTypes = {
		closeOnboarding: PropTypes.node.isRequired,
	};

	// retrieve the password from local storage if it exists
	useEffect(() => {
		const storedPassword = localStorage.getItem('password');
		if (storedPassword) {
			setPassword(storedPassword);
		}
	}, []);

	// persist the password in local storage when it changes
	useEffect(() => {
		localStorage.setItem('password', password);
	}, [password]);

	// event handler for the password input field
	const handleChange = (e) => {
		setPassword(e.target.value);
	};

	// event handler for the form's onSubmit event
	const handleSubmit = (e) => {
		e.preventDefault();
		// save the password to local storage
		localStorage.setItem('password', password);
		closeOnboarding();
	};


	  const onClick = useCallback(() => {
		localStorage.setItem('isNewUser', false);
		navigate('/');
	}, []);

	return (
		<>
			<Sidenav />
			<div className={styles.crea8_container}>
			{!showAuth && (
				<form className={styles.crea8_form} onSubmit={handleSubmit}>
					<div className={styles.headerContainer}>
						<h3>Create Password</h3>
					</div>
					<div className={styles.crea8_content}>
						<div className={styles.crea8_Flex}>
							<label htmlFor="password">Create Password</label>
							<input type="password" value={password} onChange={handleChange} />
						</div>
						<div className={styles.crea8_p}>
							<AiFillInfoCircle />
							<p>
								Password created would be used to access saved servers in the
								Application.
							</p>
						</div>
						<button type="submit" onClick={() => setShowAuth(true)}>Done</button>
					</div>
				</form>
				)}
				{showAuth && <Auth closeAuth={onClick} />}
			</div>
		</>
	);
}

export default CreatePassword;