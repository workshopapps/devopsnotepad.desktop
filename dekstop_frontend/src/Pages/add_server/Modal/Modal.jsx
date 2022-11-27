/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import tick from './tick.png';
import style from './Modal.module.css';

function Modal({ modal, close }) {
	if (modal === false) {
		return null;
	}

	return (
		<div className={style.modal} onClick={close} aria-hidden="true">
			<div
				aria-hidden="true"
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
					<button type="button" className={style.mod_btn}>
						Back To Dashboard
					</button>
				</div>
			</div>
		</div>
	);
}

Modal.propTypes = {
	modal: PropTypes.bool,
	close: PropTypes.func,
};

export default Modal;
