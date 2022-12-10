/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ServerContext from '../Context/ServerContext';
import AddServerSuccess from '../AddServerSuccess/AddServerSuccess';
import FormError from '../FormError/FormError';
import style from './EditServer.module.css';

function EditServer({ closeEditServer, name, ipAddress, serverId, id }) {
	const { editServer, success, setSuccess, loading } =
		useContext(ServerContext);
	const [formData, setFormData] = useState({
		editName: name,
		editIpAddress: ipAddress,
		editServerId: serverId,
		id,
	});

	const { editName, editIpAddress, editServerId } = formData;
	const [serverIdValidation, setServerIdValidation] = useState('');
	const [nameValidation, setNameValidation] = useState('');
	const [ipValidation, setIpValidation] = useState('');
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

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
		// console.log(e.target.value);
	}

	useEffect(() => {
		if (
			editName.length < 5 ||
			editName.length > 30 ||
			editServerId < 36 ||
			validateUUID(editServerId) === false
		) {
			setIsBtnDisabled(true);
		} else {
			setIsBtnDisabled(false);
		}

		// Server Id Validation
		if (editServerId.length > 8 && editServerId.length < 36) {
			setServerIdValidation('Server ID must have at least 36 characters');
		} else {
			setServerIdValidation('');
		}

		if (editServerId.length >= 36) {
			if (validateUUID(editServerId) === false) {
				setServerIdValidation('ServerId must be a valid UUID');
			} else {
				setServerIdValidation('');
			}
		}

		// Name Validation
		// If name is less than 5 characters
		// If name is equal to or more than 30 characters
		if (editName.length < 5) {
			setNameValidation('Server name must be at least 5 characters');
		} else if (editName.length > 30) {
			setNameValidation('Server name must be less than 30 characters');
		} else {
			setNameValidation('');
		}

		// Ip Validation
		if (editIpAddress.length > 0) {
			if (validateIP(editIpAddress) === false) {
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
		editServerId,
		editName,
		editIpAddress,
		nameValidation,
		ipValidation,
		serverIdValidation,
	]);

	function onSubmit(e) {
		e.preventDefault();
		// console.log(formData);
		editServer(formData);
	}

	function closeSuccess() {
		setSuccess(false);
		closeEditServer();
		// setFormData({ editName: '', editServerId: '', editIpAddress: '' });
	}

	return success ? (
		<AddServerSuccess message="edited" closeSuccess={closeSuccess} />
	) : (
		<div className={style.container}>
			<input
				type="button"
				className={style.dark_overlay}
				onClick={closeEditServer}
			/>
			<form onSubmit={onSubmit} className={style.form}>
				<button onClick={closeSuccess} type="button" className={style.close}>
					&times;
				</button>
				<h1>Edit Server</h1>
				<div className={style.inputs}>
					<div className={style.form_control}>
						<label htmlFor="serverId">Server ID</label>
						<input
							required
							onChange={onMutate}
							type="text"
							id="editServerId"
							value={editServerId}
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
							id="editName"
							value={editName}
							className={nameValidation && style.inputErr}
						/>
						{nameValidation && <FormError error={nameValidation} />}
					</div>
					<div className={style.form_control}>
						<label htmlFor="ipAddress">IP Address </label>
						<input
							onChange={onMutate}
							type="text"
							id="editIpAddress"
							value={editIpAddress}
							min="2"
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
				<p className={style.loading}>Editing Server, Please wait...</p>
			)}
		</div>
	);
}
EditServer.propTypes = {
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	serverId: PropTypes.string,
	id: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	closeEditServer: PropTypes.func,
};

EditServer.defaultProps = {
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
	serverId: '4439593jf3-0f3-2k200004rf',
	id: '67744393jf3-0f3-',
};

export default EditServer;
