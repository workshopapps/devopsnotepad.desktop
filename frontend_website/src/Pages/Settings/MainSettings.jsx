/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Support } from './data';
// import PropTypes from 'prop-types';
import style from './MainSettings.module.css';
import Sidenav from '../../Component/SideNav/SideNav';
// import ChangePassword from '../../Component/GlobalPassword/ChangePassword';
import styles from '../../Component/GlobalPassword/ChangePassword.module.css';



function Settings() {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();


	// Proptype declaration
	// Settings.propTypes = {
	// 	changed: PropTypes.node.isRequired,
	// };
	function isAuthenticated() {
		const user = JSON.parse(localStorage.getItem("loggedInUser"));
		return user;
	}

	const API_URL = "https://opspad.hng.tech/auth/update-password";
	// const API_URL = "https://opspad.hng.tech/api/auth/update-user-password";
	

	const user = isAuthenticated();
	// console.log(user)
	const email = user.user.email;
	const username = user.user.name;

	async function changePassword(e) {
		e.preventDefault();
		console.log("Button is working")

		try {
			console.log("Try block is working")
			// const data = {
			// 	password: editpassword,
			// 	id: user.user.id,
			// 	token: user.token
			// };
			// console.log(data)

			await axios.post(API_URL, {
				oldPassword: oldPassword,
				newPassword: newPassword,
				// confirmPassword: confirmPassword
			  })
				
				.then((response) => {
					setNewPassword(response.data);
				});

			console.log("This is working")
			alert('Password changed is  Successful');
			navigate('/');
		} catch (error) {
			console.log(error.message)

		}
		setNewPassword('');
	}


	return (
		<div>
			<Sidenav />
			<div className={style.settingsContainer}>
				<h1>Settings</h1>

				<div className={styles.subContainer}>



					<div className={styles.change_pass}>
						<form onSubmit={changePassword} className={styles.change_form}>

							<div>
								<h3>Edit Password</h3>

								<br />
								<label>Existing mail</label>
								<p>{email}</p>
								<br />
								<label htmlFor="username">Username</label>
								<input
									className={styles.change_input}
									type="text"
									name="username"
									id="username"
									placeholder={username}
								/>
							</div>

							<div>
								<label htmlFor="current">Old Password</label>
								<input
									type="password"
									name="oldpass"
									placeholder=""
									className={styles.change_input}
									value={oldPassword.oldpass}
									onChange={(e) => {
										setOldPassword(e.target.value);
									}}
									required
								/>
								<label htmlFor="newpass">New Password</label>

								<input
									type="password"
									name="newpass"
									className={styles.change_input}
									value={newPassword.newpass}
									onChange={(e) => {
										setNewPassword(e.target.value);
									}}
									required
								/>

								<label htmlFor="confirmNewPass">Confirm New Password</label>
								<input
									type="password"
									name="cofirmNewPass"
									className={styles.change_input}
									value={confirmPassword}
									onChange={(e) => {
										setConfirmPassword(e.target.value);
									}}
									required
								/>

								{newPassword === confirmPassword ? <button onClick={changePassword}  >Update Changes</button> : <>
									<button disabled style={{ opacity: 0.5 }}>Update Changes</button>
								</>

								}
							</div>
						</form>
					</div>
				</div>

				{/* <ChangePassword /> */}

				{/* {userTopbar.map((userHead) => (
					<div key={userHead.id} className={style.userHead}>
						<img src={userHead.userImage} alt="" />
						<h3>{userHead.userName}</h3>
					</div>
				))} */}

				{/* {Account.map((accounts) => (
					<div key={accounts.title} className={style.border_top}>
						<small className={style.smallHead}>{accounts.title}</small>

						<div className={style.account}>
							<div className={style.accountProfile}>
								{accounts.icon}
								<Link to='/settings/edit-profile'>{accounts.func}</Link>
							</div>

							{accounts.iconright}
						</div>
					</div>
				))} */}

				{/* {General.map((general) => (
					<div key={general.title} className={style.border_top}>
						<small className={style.smallHead}>{general.title}</small>
						<div className={style.account}>
							<div className={style.accountProfile}>
								<IoMdSwap />
								<Link to="/">{general.func}</Link>
							</div>
							<Link to="/">
								<FaChevronRight />
							</Link>
						</div>
					</div>
				))} */}

				{/* {AppSettings.map((appsettings) => (
					<div key={appsettings.title}>
						<small className={style.smallHead}>{appsettings.title}</small>

						<div className={style.appSettings_cont}>
							<div className={style.appSettings}>
								{appsettings.icon}
								<h3>{appsettings.func}</h3>
							</div>
							<Link to={appsettings.slug}>{appsettings.iconright}</Link>
						</div>

						<span className={style.border_bottom}> </span>
					</div>
				))} */}

				{/* {Security.map((security) => (
					<div key={security.title}>
						<small className={style.smallHead}>{security.title}</small>
						<Link to={security.modal}>
							<div className={style.account}>
								<div className={style.accountProfile}>
									{security.icon}
									{security.func}
								</div>
								{security.iconright}
							</div>
						</Link>
					</div>
				))} */}

				{Support.map((support) => (
					<div key={support.title}>
						<small className={style.smallHead}>{support.title}</small>
						<ul className={style.support}>
							{support.items.map((items) => (
								<Link to={items.slug}>
									<li key={items.list}>
										{items.list}
										<a href={items.slug}>{items.iconright}</a>
									</li>
								</Link>
							))}
						</ul>
					</div>
				))}
			</div>
		</div >
	);
}

export default Settings;
