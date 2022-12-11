/* eslint-disable  */
import React, { useState, useCallback } from 'react';
import styleA from './Auth.module.css';


function Auth() {
	const [password, setAuthPassword] = useState('');

	// event handler for the authenticate button
	function handleAuthenticate(e) {
		e.preventDefault();
		// get the current password from local storage
		const storedPassword = localStorage.getItem('password');
		console.log(storedPassword);

		// compare the entered password with the one in local storage
		if (password === storedPassword) {
			sessionStorage.setItem('isAuthenticated', false);
			// if they match, show a success message
			alert('Authenticated');
		
		}
		if (password !== storedPassword) {
			// if they don't match, show an error message
			alert('Error! The password is incorrect.');
		}
		setAuthPassword('');
	}
	const onClick = useCallback(() => {
		localStorage.setItem('isNewUser', false);
		window.location.reload();
	}, []);

	return (
		<div className={styleA.formContainer}>
			<form className={styleA.form} onSubmit={handleAuthenticate}>
				<div className={styleA.headerContainer}>
					<h3 className={styleA.formHeader}>Confirm password</h3>
				</div>
				<div className={styleA.content}>
					<div className={styleA.control}>
						<input
							type="password"
							name="password"
							value={password}
							onChange={(e) => setAuthPassword(e.target.value)}
						/>
					</div>
					<button  onClick={onClick} className={styleA.btn} type="submit">
						Confirm
					</button>
				</div>
			</form>
		</div>
	);
}

export default Auth;
