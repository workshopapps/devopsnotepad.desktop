import React, { useState } from 'react';
import Modal from '../Modal/Modal';
import Server from '../Server/Server';
import Sidebar from '../../../Components/Sidebar/Sidebar';
import './Joined.css';

const Joined = () => {
	const [modal, setModal] = useState(false);

	const open = () => {
		setModal(true);
	};
	const close = () => {
		setModal(false);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setModal((prev) => !prev);
		console.log(modal);
	};

	return (
		<div className="join">
			<Sidebar />
			<Server handleSubmit={handleSubmit} />
			<Modal modal={modal} open={open} close={close} />
		</div>
	);
};

export default Joined;
