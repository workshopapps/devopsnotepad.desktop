/* eslint-disable no-lone-blocks */
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import { Support } from './data';
import style from './MainSettings.module.css';
import Sidenav from '../../Component/SideNav/SideNav';
import styles from '../../Component/GlobalPassword/ChangePassword.module.css';



function Settings() {
	const [oldPassword, setOldPassword] = useState('');
	const [newPassword, setNewPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const navigate = useNavigate();



	function isAuthenticated() {
		const user = JSON.parse(localStorage.getItem("loggedInUser"));
		return user;
	}

	const API_URL = "https://opspad.hng.tech/api/auth/update-user-password";




	const user = isAuthenticated();
	const email = user.user.email;
	const username = user.user.name;
	const token = user.token;


	async function changePassword(e) {
		e.preventDefault();
		console.log("Button is working")

		try {
			const response = await axios.post(API_URL, {
				oldPassword,
				newPassword,
			}, {
				headers: {
					'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
				}
			});
			console.log(response.data);
			console.log(response, "This is working")
			alert('Password changed is  Successful');
			navigate('/');

		} catch (error) {
			console.error(error);
		}


		setNewPassword('');

	}


	return (
		<div className={style.settingsPage}>
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
								<p>{username}</p>
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
									placeholder="MinLength(8),an uppercase,a lowercase,and a number"
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
									placeholder="MinLength(8),an uppercase,a lowercase,and a number"
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