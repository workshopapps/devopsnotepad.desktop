/* eslint-disable no-console */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styleA from './Auth.module.css';

function Auth({ closeAuth }) {
	const [input, setInput] = useState('');

	// Proptype declaration
	Auth.propTypes = {
		closeAuth: PropTypes.node.isRequired,
	};

	function handleSubmit(e) {
		e.preventDefault();
		const globalPassword = localStorage.getItem('userPassword');
		console.log(globalPassword);
		if (input === globalPassword) {
			closeAuth();
		}
		if (input !== globalPassword) {
			alert('Access denied! Incorrect password');
		}
		setInput('');
	}

	return (
		<div className={styleA.formContainer}>
			<form className={styleA.form} onSubmit={handleSubmit}>
				<div className={styleA.headerContainer}>
					<h1 className={styleA.formHeader}>Enter password</h1>
				</div>
				<div className={styleA.control}>
					<label className={styleA.label} htmlFor="password">
						Password
					</label>
					<input
						className={styleA.input}
						type="text"
						name="password"
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</div>
				<button className={styleA.btn} type="submit">
					Done
				</button>
			</form>
		</div>
	);
}

export default Auth;
