/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import style from './EditProfile.module.css';
import CountryCodeComponent from './Components/CountryCode/CountryCodeComponent';
// import Sidenav from '../../Components/SideNav/SideNav';
import Sidenav from '../../../Components/SideNav/SideNav';
import Success from './Components/Success/Success';
import phoneCountryCode from './CountryCodeData';
import profilePicture from '../assets/ProfilePicture.png';

function EditProfile() {
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);
	const [showSuccess, setShowSuccess] = useState(false);
	const [formData, setFormData] = useState({
		name: 'Okesiji Abisola',
		email: 'taiwookesiji@gmail.com',
		countryCode: '+234',
		phone: '9097774585',
		image: '',
	});

	const { name, email, phone, countryCode, image } = formData;

	const navigate = useNavigate();

	function onChange(e) {
		if (e.target.files) {
			setFormData((prevState) => ({
				...prevState,
				image: e.target.files,
			}));
		}

		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}

	useEffect(() => {
		if (name !== '' && email !== '' && phone !== '' && countryCode !== '') {
			setIsBtnDisabled(false);
		} else {
			setIsBtnDisabled(true);
		}
	}, [name, email, phone, countryCode, image]);

	function onSubmitForm(e) {
		e.preventDefault();
		setShowSuccess(true);
		// console.log(formData);
		// patch function here
	}

	function closeSuccess() {
		setShowSuccess(false);
		// navigate('/settings');
	}

	return (
		<div className={style.container}>
			<Sidenav />
			{showSuccess && (
				<Success
					// eslint-disable-next-line react/jsx-no-bind
					onSuccessClick={closeSuccess}
					closeModal={() => {
						setShowSuccess(false);
					}}
				/>
			)}
			<div className={style.profile_container}>
				<header className={style.header}>
					<button
						onClick={() => navigate(-1)}
						className={style.back_arrow}
						type="button"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 16 16"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M16 7H3.83L9.42 1.41L8 0L0 8L8 16L9.41 14.59L3.83 9H16V7Z"
								fill="#202020"
							/>
						</svg>
					</button>

					<h1>Edit Profile</h1>
				</header>

				<div className={style.profile_avatar}>
					<figure>
						<img src={profilePicture} alt="" />
					</figure>
					<label htmlFor="images">
						Change Image
						<input
							type="file"
							className="formInputFile"
							id="images"
							onChange={onChange}
							max="1"
							accept=".jpg,.png,.jpeg"
						/>
					</label>
				</div>

				{/* Form */}
				<form className={style.form}>
					<div className={style.form_control}>
						<label htmlFor="name">Full Name</label>
						<input type="text" id="name" value={name} onChange={onChange} />
					</div>

					<div className={style.form_control}>
						<label htmlFor="email">Email Address</label>
						<input type="email" id="email" value={email} onChange={onChange} />
					</div>

					<div className={style.form_control}>
						<label htmlFor="phone">Phone Number</label>

						<div className={style.phone}>
							<div className={style.country_code}>
								<select
									name="countryCode"
									value={countryCode}
									id="countryCode"
									onChange={onChange}
								>
									{phoneCountryCode.map((country) => (
										<CountryCodeComponent
											key={country.code}
											code={country.dial_code}
											// country={country.name}
											value={country.dial_code}
										/>
									))}
								</select>
							</div>
							<input
								type="number"
								id="phone"
								value={phone}
								onChange={onChange}
							/>
						</div>
					</div>

					<button
						type="button"
						className={`${style.btn} ${
							isBtnDisabled ? style.btnDisabled : style.btnEnabled
						}`}
						onClick={onSubmitForm}
						disabled={isBtnDisabled}
					>
						Save Changes
					</button>
				</form>
			</div>
		</div>
	);
}

export default EditProfile;
