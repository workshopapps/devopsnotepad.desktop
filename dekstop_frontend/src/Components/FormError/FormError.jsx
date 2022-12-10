import React from 'react';
import PropTypes from 'prop-types';
import style from './FormError.module.css';
import invalidIcon from './Assets/invalid.svg';

function FormError({ error }) {
	return (
		<div className={style.container}>
			<img
				className={style.icon}
				src={invalidIcon}
				alt="Invalid value entered"
			/>
			<span className={style.text}>{error} </span>
		</div>
	);
}

FormError.propTypes = {
	error: PropTypes.string,
};

FormError.defaultProps = {
	error: 'Invalid',
};

export default FormError;
