import React from 'react';
import edit from './Assets/edit.svg';
import del from './Assets/delete.svg';
import style from './ServerMenu.module.css';

// eslint-disable-next-line react/prop-types
function ServerMenu({ toggleEdit, toggleDelete }) {
	return (
		<div id="ServerMenu" className={style.container}>
			<button onClick={toggleEdit} className={style.button} type="button">
				<figure>
					<img src={edit} alt="Edit Server" />
				</figure>
				<span>Edit Server</span>
			</button>
			<button onClick={toggleDelete} className={style.button} type="button">
				<figure>
					<img src={del} alt="Delete Server" />
				</figure>
				<span>Delete Server</span>
			</button>
		</div>
	);
}

export default ServerMenu;
