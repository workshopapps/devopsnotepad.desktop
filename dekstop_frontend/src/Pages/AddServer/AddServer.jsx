import React, { useState, useEffect, useContext } from 'react';
import ServerContext from '../../Components/Context/ServerContext';
import Sidenav from '../../Components/SideNav/SideNav';
import style from './AddServer.module.css';

function AddServer() {
	const { addServer } = useContext(ServerContext);

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
		console.log(formData);
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
	return (
		<div className={style.AddServer}>
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
			</div>
		</div>
	);
}

export default AddServer;
