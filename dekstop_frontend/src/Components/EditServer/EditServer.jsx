import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import style from './EditServer.module.css';

function EditServer({ closeEditServer, name, ipAddress }) {
	const [formData, setFormData] = useState({
		name,
		ipAddress,
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	function onMutate(e) {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}

	useEffect(() => {
		if (name !== '' && ipAddress !== '' && ipAddress.length > 1) {
			setIsBtnDisabled(false);
		} else {
			setIsBtnDisabled(true);
		}
	}, [name, ipAddress]);

	function onSubmit(e) {
		e.preventDefault();
		// editServer(formData);
	}

	return (
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
							required
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
		</div>
	);
}
EditServer.propTypes = {
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	// eslint-disable-next-line react/require-default-props
	closeEditServer: PropTypes.func,
};

EditServer.defaultProps = {
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
};

export default EditServer;
