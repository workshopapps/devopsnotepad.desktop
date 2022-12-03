/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import ServerContext from '../Context/ServerContext';
import AddServerSuccess from '../AddServerSuccess/AddServerSuccess';
import style from './EditServer.module.css';

function EditServer({ closeEditServer, name, ipAddress, serverId, id }) {
	const { editServer, success, setSuccess, loading } =
		useContext(ServerContext);
	const [formData, setFormData] = useState({
		name,
		ipAddress,
		serverId,
		id,
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	function onMutate(e) {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		// console.log(e.target.value);
	}

	useEffect(() => {
		if (name !== '' && serverId !== '') {
			setIsBtnDisabled(false);
		} else {
			setIsBtnDisabled(true);
		}
	}, [name, serverId]);

	function onSubmit(e) {
		e.preventDefault();
		// console.log(formData);
		editServer(formData);
	}

	function closeSuccess() {
		setSuccess(false);
		closeEditServer();
		setFormData({ name: '', serverId: '', ipAddress: '' });
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
				<h1>Edit Server</h1>
				<div className={style.inputs}>
					<div className={style.form_control}>
						<label htmlFor="serverId">Server ID</label>
						<input
							required
							onChange={onMutate}
							type="text"
							id="serverId"
							value={formData.serverId}
						/>
					</div>
					<div className={style.form_control}>
						<label htmlFor="name">Server Name</label>
						<input
							required
							onChange={onMutate}
							type="text"
							id="name"
							value={formData.name}
						/>
					</div>
					<div className={style.form_control}>
						<label htmlFor="ipAddress">IP Address </label>
						<input
							onChange={onMutate}
							type="text"
							id="ipAddress"
							value={formData.ipAddress}
							min="2"
						/>
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
