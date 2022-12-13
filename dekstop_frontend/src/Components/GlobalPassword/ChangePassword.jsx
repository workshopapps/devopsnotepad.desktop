/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-alert */
/* eslint-disable no-console */
/* eslint-disable react/jsx-no-bind */
/* eslint-disable react/button-has-type */
/* eslint-disable import/no-useless-path-segments */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { FaChevronRight } from 'react-icons/fa';
import { IoClose } from 'react-icons/io5';
import Success from '../GlobalPassword/Success';
import styles from '../GlobalPassword/ChangePassword.module.css';
import eye from './asset/eye.svg';
// import Success from '../GlobalPassword/Success'

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function ChangePassword() {
	const [modalIsOpen, setIsOpen] = React.useState(false);
	const [showSuccess, setShowSuccess] = useState(false);
	const navigate = useNavigate();

	function openModal() {
		setIsOpen(true);
	}

	// function afterOpenModal() {
	// 	// references are now sync'd and can be accessed.
	// 	subtitle.style.color = '#f00';
	// }

	function closeModal() {
		setIsOpen(false);
		navigate('/settings');
	}

	const [currentPassword, setCurrentPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [visibility, setVisibility] = useState({
		current: false,
		new: false,
		confirm: false,
	});

	// event handler for the current password input field
	const handleCurrentPasswordChange = (e) => {
		setCurrentPassword(e.target.value);
	};

	// event handler for the new password input field
	const handleNewPasswordChange = (e) => {
		setNewPassword(e.target.value);
	};

	// event handler for the confirm password input field
	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	// event handler for the change password button
	function handleChangePassword() {
		// retrieve the password from local storage
		const storedPassword = localStorage.getItem('password');

		// check if the entered current password matches the stored password
		if (currentPassword !== storedPassword) {
			alert('Error! The current password is incorrect.');
			return;
		}

		// check if the new password and confirm password match
		if (newPassword !== confirmPassword) {
			alert('Error! The new password and confirm password do not match.');
			return;
		}

		// save the new password to local storage
		localStorage.setItem('password', newPassword);
		setShowSuccess(true);
	}
	function closeSuccess() {
		setShowSuccess(false);
		window.location.reload();
	}

	function handlePasswordVisibility(e) {
		if (e.target.parentElement.parentElement.id === 'currentPassword') {
			setVisibility((prevState) => ({
				...prevState,
				current: !prevState.current,
			}));
		}
		if (e.target.parentElement.parentElement.id === 'newPassword') {
			setVisibility((prevState) => ({
				...prevState,
				new: !prevState.new,
			}));
		}
		if (e.target.parentElement.parentElement.id === 'confirmPassword') {
			setVisibility((prevState) => ({
				...prevState,
				confirm: !prevState.confirm,
			}));
		}
	}

	return (
		<div>
			{showSuccess && (
				<Success
					// eslint-disable-next-line react/jsx-no-bind
					onSuccessClick={closeSuccess}
					closeModal={() => {
						setShowSuccess(false);
					}}
				/>
			)}
			<div className={styles.anchor}>
				<div className={styles.anchor} onClick={openModal}>
					<h2>Change Password</h2>
					<FaChevronRight />
				</div>
			</div>
			<Modal
				isOpen={modalIsOpen}
				// onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				className={styles.Change_pass}
				contentLabel="Example Modal"
			>
				<div className={styles.change_content}>
					<form className={styles.change_form} onSubmit={handleChangePassword}>
						<div className={styles.change_close}>
							<h3>Change Password</h3>
							<IoClose onClick={closeModal} className={styles.change_cancel} />
						</div>
						<div className={styles.change_Flex}>
							<label htmlFor="password">Current Password</label>
							<div id="currentPassword" className={styles.input_container}>
								<input
									type={visibility.current ? 'text' : 'password'}
									value={currentPassword}
									onChange={handleCurrentPasswordChange}
								/>
								<button type="button" onClick={handlePasswordVisibility}>
									<img
										src={eye}
										alt="toggle password visibility"
										className={visibility.current ? styles.visible : ''}
									/>
								</button>
							</div>
						</div>
						<div className={styles.change_Flex}>
							<label htmlFor="password">New Password</label>
							<div id="newPassword" className={styles.input_container}>
								<input
									type={visibility.new ? 'text' : 'password'}
									value={newPassword}
									onChange={handleNewPasswordChange}
								/>
								<button type="button" onClick={handlePasswordVisibility}>
									<img
										src={eye}
										className={visibility.new ? styles.visible : ''}
										alt="toggle password visibility"
									/>
								</button>
							</div>
						</div>
						<div className={styles.change_Flex}>
							<label htmlFor="password">Confirm New Password</label>
							<div id="confirmPassword" className={styles.input_container}>
								<input
									type={visibility.confirm ? 'text' : 'password'}
									value={confirmPassword}
									onChange={handleConfirmPasswordChange}
								/>
								<button type="button" onClick={handlePasswordVisibility}>
									<img
										src={eye}
										alt="toggle password visibility"
										className={visibility.confirm ? styles.visible : ''}
									/>
								</button>
							</div>
						</div>
						<button>Save</button>
					</form>
				</div>
			</Modal>
		</div>
	);
}

export default ChangePassword;
