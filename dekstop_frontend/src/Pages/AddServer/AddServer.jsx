/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import AddServerSuccess from '../../Components/AddServerSuccess/AddServerSuccess';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './AddServer.module.css';

function AddServer() {
	const { addServer, success, setSuccess, loading } = useContext(ServerContext);

	const [formData, setFormData] = useState({
		name: '',
		ipAddress: '',
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	const { name, ipAddress } = formData;

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
		addServer(formData);
	}

	// Close successfully added server modal
	function closeSuccess() {
		setSuccess(false);
		setFormData({ name: '', ipAddress: '' });
	}

	// Close success modal and route to dashboard

	return (
		<div className={style.AddServer}>
			{success && <AddServerSuccess closeSuccess={closeSuccess} />}
			<Sidenav />
			<div className={style.container}>
				<h1>Add Server</h1>

				<form onSubmit={onSubmit} className={style.form}>
					<div className={style.inputs}>
						<div className={style.form_control}>
							<label htmlFor="name">Server Name</label>
							<input
								required
								onChange={onMutate}
								type="text"
								id="name"
								value={name}
							/>
						</div>
						<div className={style.form_control}>
							<label htmlFor="ipAddress">IP Address</label>
							<input
								required
								onChange={onMutate}
								type="text"
								id="ipAddress"
								value={ipAddress}
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
					<p className={style.loading}> Adding Server, Please wait...</p>
				)}
			</div>
		</div>
	);
}

export default AddServer;