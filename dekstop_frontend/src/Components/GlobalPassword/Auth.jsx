/* eslint-disable */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styleA from './Auth.module.css';
import eye from './asset/eye.svg';

function Auth({ closeAuth }) {
	const [password, setAuthPassword] = useState('');
	const [visibility, setVisibility] = useState(false);

	// Proptype declaration
	Auth.propTypes = {
		closeAuth: PropTypes.func.isRequired,
	};

	// event handler for the authenticate button
	function handleAuthenticate(e) {
		e.preventDefault();
		// get the current password from local storage
		const storedPassword = localStorage.getItem('password');

		// compare the entered password with the one in local storage
		if (password === storedPassword) {
			sessionStorage.setItem('isAuthenticated', false);
			closeAuth();
			// if they match, show a success message
			alert('Authenticated');
		}
		if (password !== storedPassword) {
			// if they don't match, show an error message
			alert('Error! The password is incorrect.');
		}
		setAuthPassword('');
	}

	return (
		<div className={styleA.formContainer}>
			<form className={styleA.form} onSubmit={handleAuthenticate}>
				<div className={styleA.headerContainer}>
					<h3 className={styleA.formHeader}>Confirm password</h3>
				</div>
				<div className={styleA.content}>
					<div className={styleA.control}>
						<input
							type={visibility ? 'text' : 'password'}
							name="password"
							value={password}
							onChange={(e) => setAuthPassword(e.target.value)}
						/>
						<button type="button" onClick={() => setVisibility(!visibility)}>
							<img
								className={visibility ? styleA.visi : ''}
								src={eye}
								alt="toggle password visibility"
							/>
						</button>
					</div>
					<button className={styleA.btn} type="submit">
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
}

export default Auth;
