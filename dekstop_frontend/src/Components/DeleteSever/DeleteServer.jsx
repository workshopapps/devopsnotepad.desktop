/* eslint-disable react/prop-types */
import React from 'react';
import style from './DeleteSever.module.css';
import deleteIcon from './Assets/deleteIcon.svg';

function DeleteServer({ closeDelete, deleteServer }) {
	return (
		<div className={style.container}>
			<input
				onClick={closeDelete}
				type="button"
				className={style.dark_overlay}
			/>
			<div className={style.delete}>
				<figure>
					<img src={deleteIcon} alt="" />
				</figure>
				<p>
					Are you sure you want to delete this server? This action cannot be
					undone
				</p>
				<div className={style.action}>
					<button onClick={closeDelete} type="button" className={style.btn}>
						Cancel
					</button>
					<button onClick={deleteServer} type="button" className={style.btn}>
						Delete
					</button>
				</div>
			</div>
		</div>
	);
}

export default DeleteServer;
