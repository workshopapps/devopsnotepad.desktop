/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-useless-path-segments */
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import Modal from 'react-modal';
import styles from '../GlobalPassword/ChangePassword.module.css';
// import Success from '../GlobalPassword/Success'


// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ChangePassword({ changed }) {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	// function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	subtitle.style.color = '#f00';
	// }

	function closeModal() {
		setIsOpen(false);
	}

	const [editpassword, setEditPassword] = useState('');
    const navigate = useNavigate();

	// Proptype declaration
	ChangePassword.propTypes = {
		changed: PropTypes.node.isRequired,
	};

	function changePassword(e) {
		e.preventDefault();

		const globalPassword = localStorage.setItem('userPassword', editpassword);
		const newuser = {
			password: editpassword,
		};
		console.log(globalPassword);

		if (editpassword === globalPassword) {
			changed.push(newuser);
			localStorage.setItem('userPassword');
			alert('Password changed is  Successful');
            navigate('/');
		}
		if (editpassword !== globalPassword) {
            alert('Password changed is  Successful');
		}
		setEditPassword('');
	}

	return (
		<div>
			<Link className={styles.anchor} onClick={openModal}><h2>Change Password</h2></Link>
			<Modal
				isOpen={modalIsOpen}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				className={styles.Change_pass}
				contentLabel="Example Modal"
			>
				<div className={styles.change_cont}>
					<h2>Edit Password</h2>
					<form onSubmit={changePassword} className={styles.change_form}>
						<label htmlFor="current">Current Password</label>
						<br />
						<input
							type="password"
							name="oldpass"
							className={styles.change_input}
							value={editpassword.oldpass}
							onChange={(e) => {
								setEditPassword(e.target.value);
							}}
						/>
						<br />
						<label htmlFor="current">Current Password</label>
						<br />
						<input
							type="password"
							name="oldpass"
							className={styles.change_input}
							value={editpassword.oldpass}
							onChange={(e) => {
								setEditPassword(e.target.value);
							}}
						/>
						<br />
						<label htmlFor="current">New Password</label>
						<br />
						<input
							type="currentpassword"
							name="newpass"
							className={styles.change_input}
							value={editpassword.newpass}
							onChange={(e) => {
								setEditPassword(e.target.value);
							}}
						/>
						<br />
						<button onClick={changePassword}>Save</button>
					</form>
				</div>
			</Modal>
		</div>
	);
}

export default ChangePassword;
