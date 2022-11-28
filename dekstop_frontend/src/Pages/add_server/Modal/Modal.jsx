<<<<<<< HEAD
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
=======
/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import tick from './tick.png';
import style from './Modal.module.css';

function Modal({ modal, close }) {
>>>>>>> c608a8171139c02944a4509eaab1896a83227163
	if (modal === false) {
		return null;
	}

	return (
<<<<<<< HEAD
		<div className={style.modal} onClick={close}>
			<div
=======
		<div className={style.modal} onClick={close} aria-hidden="true">
			<div
				aria-hidden="true"
>>>>>>> c608a8171139c02944a4509eaab1896a83227163
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
<<<<<<< HEAD
					<button className={style.mod_btn}>Back To Dashboard</button>
=======
					<button type="button" className={style.mod_btn}>
						Back To Dashboard
					</button>
>>>>>>> c608a8171139c02944a4509eaab1896a83227163
				</div>
			</div>
		</div>
	);
}

<<<<<<< HEAD
=======
Modal.propTypes = {
	modal: PropTypes.bool,
	close: PropTypes.func,
};

>>>>>>> c608a8171139c02944a4509eaab1896a83227163
export default Modal;
