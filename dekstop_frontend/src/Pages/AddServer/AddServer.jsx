/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import AddServerSuccess from '../../Components/AddServerSuccess/AddServerSuccess';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import FormError from '../../Components/FormError/FormError';
import style from './AddServer.module.css';

function AddServer() {
	const { addServer, success, setSuccess, loading } = useContext(ServerContext);
	const [serverIdValidation, setServerIdValidation] = useState('');
	const [nameValidation, setNameValidation] = useState('');
	const [ipValidation, setIpValidation] = useState('');

	const [formData, setFormData] = useState({
		serverId: '',
		name: '',
		ipAddress: '',
	});

	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	const { serverId, name, ipAddress } = formData;

	function validateUUID(uuid) {
		const regexExp =
			/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;
		return regexExp.test(uuid);
	}

	function validateIP(ip) {
		const regexExp =
			/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
		return regexExp.test(ip);
	}

	function onMutate(e) {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}

	useEffect(() => {
		if (
			name.length < 5 ||
			name.length > 30 ||
			serverId < 36 ||
			validateUUID(serverId) === false
		) {
			setIsBtnDisabled(true);
		} else {
			setIsBtnDisabled(false);
		}

		// Server Id Validation
		if (serverId.length > 8 && serverId.length < 36) {
			setServerIdValidation('Server ID must have at least 36 characters');
		} else {
			setServerIdValidation('');
		}

		if (serverId.length >= 36) {
			if (validateUUID(serverId) === false) {
				setServerIdValidation('ServerId must be a valid UUID');
			} else {
				setServerIdValidation('');
			}
		}

		// Name Validation
		// If name is less than 5 characters
		if (name.length < 5) {
			setNameValidation('Server name must be at least 5 characters');
		} else {
			setNameValidation('');
		}
		// If name is equal to or more than 30 characters
		if (name.length > 30) {
			setNameValidation('Server name must be less than 30 characters');
		} else {
			setNameValidation('');
		}

		// Ip Validation
		if (ipAddress.length > 0) {
			if (validateIP(ipAddress) === false) {
				setIpValidation('Enter a valid IP address or leave field blank');
				setIsBtnDisabled(true);
			} else {
				setIpValidation('');
				setIsBtnDisabled(false);
			}
		} else {
			setIpValidation('');
		}

		// console.log(name.length);
	}, [
		serverId,
		name,
		ipAddress,
		nameValidation,
		ipValidation,
		serverIdValidation,
	]);

	function onSubmit(e) {
		e.preventDefault();
		addServer(formData);
	}

	// Close successfully added server modal
	function closeSuccess() {
		setSuccess(false);
		setFormData({ name: '', serverId: '', ipAddress: '' });
	}

	// Close success modal and route to dashboard

	return (
		<div className={style.AddServer}>
			{success && (
				<AddServerSuccess message="added" closeSuccess={closeSuccess} />
			)}
			<Sidenav />
			<div className={style.container}>
				<form onSubmit={onSubmit} className={style.form}>
					<h1>Add Server</h1>

					<div className={style.inputs}>
						<div className={style.form_control}>
							<label htmlFor="serverId">Server ID</label>
							<input
								required
								onChange={onMutate}
								type="text"
								id="serverId"
								value={serverId}
								min="25"
								className={serverIdValidation && style.inputErr}
							/>
							{serverIdValidation && <FormError error={serverIdValidation} />}
						</div>
						<div className={style.form_control}>
							<label htmlFor="name">Server Name</label>
							<input
								required
								onChange={onMutate}
								type="text"
								id="name"
								value={name}
								className={nameValidation && style.inputErr}
							/>
							{nameValidation && <FormError error={nameValidation} />}
						</div>

						<div className={style.form_control}>
							<label htmlFor="ipAddress">IP Address &#40;Optional&#41; </label>
							<input
								onChange={onMutate}
								type="text"
								id="ipAddress"
								value={ipAddress}
								className={ipValidation && style.inputErr}
							/>
							{ipValidation && <FormError error={ipValidation} />}
						</div>
					</div>

					<button
						disabled={isBtnDisabled}
						type="submit"
						className={`${style.btn} ${
							isBtnDisabled ? style.btnDisabled : style.btnEnabled
						}`}
					>
						Done
					</button>
				</form>

				{loading && (
					<p className={style.loading}> Adding Server, Please wait...</p>
				)}
			</div>
		</div>
	);
}

export default AddServer;
