/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-alert */
/* eslint-disable no-return-assign */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable object-shorthand */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useNavigate } from 'react-router-dom';
import { AiFillInfoCircle } from 'react-icons/ai';
import styles from '../GlobalPassword/CreatePassword.module.css';
import Sidenav from './../SideNav/SideNav';

function CreatePassword({ closeOnboarding }) {
	const [password, setpassword] = useState('');
	// const navigate = useNavigate();

	// Proptype declaration

	CreatePassword.propTypes = {
		closeOnboarding: PropTypes.node.isRequired,
	};

	function registeruser(event) {
		event.preventDefault();

		localStorage.setItem('userPassword', password);

		alert('Password created successfully');

		closeOnboarding();
	}

	return (
		<main>
			<Sidenav />
			<div className={styles.crea8_container}>
				<div>
					<h1>Create Password</h1>
				</div>
				<form className={styles.crea8_form}>
					<label htmlFor="password">Create Password</label>
					<br />
					<input
						type="password"
						name=""
						id=""
						value={password}
						onChange={(e) => {
							setpassword(e.target.value);
						}}
					/>
					<br />
					<div className={styles.crea8_p}>
						<AiFillInfoCircle />
						<p>
							Password created would be used to access saved servers in the
							Application.
						</p>
					</div>
					<input
						type="submit"
						onClick={registeruser}
						className="btn btn-primary"
						value="Done"
					/>
				</form>
			</div>
		</main>
	);
}

export default CreatePassword;
