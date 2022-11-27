/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import './Modal.css';
import tick from './tick.png';
import style from './Modal.module.css';

function Modal({ modal, open, close }) {
	if (modal === false) {
		return null;
	}

	return (
		<div className={style.modal} onClick={close}>
			<div
				className={style.modal_contain}
				onClick={(e) => {
					e.stopPropagation();
				}}
			>
				<div className={style.modal_box}>
					<img src={tick} alt="" className={style.tick} />
					<h4>Server Added Successfully </h4>
					<p>
						You have successfully added a <br /> new server{' '}
					</p>
					<button className={style.mod_btn}>Back To Dashboard</button>
				</div>
			</div>
		</div>
	);
}

export default Modal;
