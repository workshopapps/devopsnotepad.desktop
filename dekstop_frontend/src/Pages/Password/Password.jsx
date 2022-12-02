import React, { useState, useEffect, useCallback } from 'react';
// import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import passwordStyle from './Password.module.css';
import PasswordCard from './PasswordCard';
import Add from './images/add.svg';
import CreateForm from './components/createForm/CreateForm';
// import Data from './Data';

// Database
// const allPasswords = Data.passwords;

function Password() {
	const {id} = useParams();
	const [passwords, setPasswords] = useState(() => {
		const localData = localStorage.getItem(`${id}passwords`);
		return localData ? JSON.parse(localData) : [];
	});
	

	const [showCreateform, setShowCreateform] = useState(null);
	
	// methods and functions
	const addPassword = (password) => {
		const newPassword = password;
		setPasswords([...passwords, newPassword]);
	};

	const removePassword = (value) => {
		const newPassword = passwords.filter((password) => password.id !== value);
		setPasswords(newPassword);
	};

	const editPassword = (editedPassword) => {
		const updatedPasswords = passwords.map((c) =>
			c.id === editedPassword.id ? editedPassword : c
		);
		setPasswords(updatedPasswords);
	};

	const closeShowForm = useCallback(() => {
		setShowCreateform(false);
		document.body.style.overflow = "unset";
	}, [showCreateform]);

	const openShowForm = ()=>{
		setShowCreateform(true)
		document.body.style.overflow = "hidden";
	}

	useEffect(() => {
		localStorage.setItem(`${id}passwords`, JSON.stringify(passwords));
	}, [passwords]);

	useEffect(() => {
		setShowCreateform(false);
	}, []);
	return (
		<div className={passwordStyle.passwordCon}>
			<div className={passwordStyle.password}>
				<div className={passwordStyle.passCon}>
					{passwords.map((user) => (
						<PasswordCard editPassword={editPassword} user={user} removePassword={removePassword} />
					))}
					<div className={passwordStyle.btnContainer}>
						<button
							onClick={openShowForm}
							type="button"
							className={passwordStyle.btn}
						>
							<span className={passwordStyle.btnText}>Add new password</span>
							<img className={passwordStyle.btnIcon} src={Add} alt="" />
						</button>
					</div>
				</div>
			</div>
			{showCreateform && (
				<CreateForm addPassword={addPassword} closeShowForm={closeShowForm} />
			)}
		</div>
	);
}

export default Password;
