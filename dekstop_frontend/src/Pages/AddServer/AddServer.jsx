/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect, useContext } from 'react';
import AddServerSuccess from '../../Components/AddServerSuccess/AddServerSuccess';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './AddServer.module.css';

function AddServer() {
	const { addServer, success, setSuccess, loading } = useContext(ServerContext);

	const [formData, setFormData] = useState({
		serverId: '',
		name: '',
		ipAddress: '',
	});
	const [isBtnDisabled, setIsBtnDisabled] = useState(true);

	const { serverId, name, ipAddress } = formData;

	function onMutate(e) {
		setFormData((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
	}

	useEffect(() => {
		// console.log(formData);
		if (name !== '' && serverId !== '') {
			setIsBtnDisabled(false);
		} else {
			setIsBtnDisabled(true);
		}
	}, [serverId, name]);

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
				<h1>Add Server</h1>

				<form onSubmit={onSubmit} className={style.form}>
					<div className={style.inputs}>
						<div className={style.form_control}>
							<label htmlFor="serverId">Server ID</label>
							<input
								required
								onChange={onMutate}
								type="text"
								id="serverId"
								value={serverId}
								min="2"
							/>
						</div>
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
							<label htmlFor="ipAddress">IP Address &#40;Optional&#41; </label>
							<input
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
