import React, { useState } from 'react'
import Modal from '../Modal/Modal'
import Server from '../Server/Server'
import style from "./Joined.module.css"
import Sidenav from '../../../Components/SideNav/SideNav'

export default function Joined() {
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
	};

	return (
		<div className={style.join}>
			<Sidenav />
			<Server handleSubmit={handleSubmit} />
			<Modal modal={modal} open={open} close={close} />
		</div>
	);
};
