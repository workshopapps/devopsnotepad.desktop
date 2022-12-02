import React from 'react';
import edit from './Assets/edit.svg';
import del from './Assets/delete.svg';
import style from './ServerMenu.module.css';

function ServerMenu() {
	return (
		<div className={style.container}>
			<button className={style.button} type="button">
				<figure>
					<img src={edit} alt="Edit Server" />
				</figure>
				<span>Edit Server</span>
			</button>
			<button className={style.button} type="button">
				<figure>
					<img src={del} alt="Delete Server" />
				</figure>
				<span>Delete Server</span>
			</button>
		</div>
	);
}

export default ServerMenu;
