/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Radio from '@mui/material/Radio';
import styles from './Modal.module.css';

const TextResizer = ({
	defaultFont,
	step,
	min,
	max,
	suffix,
	store,
	storeKey,
}) => {
	const [fontSize, setFontSize] = useState(defaultFont);

	const toggle = (type) => {
		let newFontSize = fontSize;
		switch (type) {
			case 'large':
				newFontSize += step;
				break;
			case 'small':
				newFontSize -= step;
				break;
			default:
				newFontSize = defaultFont;
				break;
		}
		setFontSize(newFontSize);
		store.setItem(storeKey, newFontSize);
	};
	const [selectedValue, setSelectedValue] = React.useState('a');

	const handleChange = (event) => {
		setSelectedValue(event.target.value);
	};

	useEffect(() => {
		const storedValue = store.getItem(storeKey);
		if (storedValue) {
			const size = +storedValue;
			if (Number.isSafeInteger(size)) {
				setFontSize(+storedValue);
			}
		}
	}, [store, storeKey]);

	return (
		<React.Fragment>
			<div className={styles.ModalFlex}>
				<div className={styles.sizeSmall}>
					<label>Small</label>
					<Radio
						checked={selectedValue === 'small'}
						onChange={handleChange}
						value="small"
						name="radio-buttons"
						inputProps={{ 'aria-label': 'small' }}
						onClick={() => toggle('small')}
					/>
				</div>
				<div className={styles.sizeMedium}>
					<label>Medium</label>
					<Radio
						checked={selectedValue === 'medium'}
						onChange={handleChange}
						value="medium"
						name="radio-buttons"
						inputProps={{ 'aria-label': 'medium' }}
						onClick={() => toggle('default')}
					/>
				</div>
				<div className={styles.sizeLarge}>
					<label>Large</label>
					<Radio
						checked={selectedValue === 'large'}
						onChange={handleChange}
						value="large"
						name="radio-buttons"
						inputProps={{ 'aria-label': 'large' }}
						onClick={() => toggle('large')}
					/>
				</div>
				<style>{`html { font-size: ${fontSize}${suffix} }`.trim()}</style>
			</div>
		</React.Fragment>
	);
};
TextResizer.propTypes = {
	defaultFont: PropTypes.number,
	step: PropTypes.number,
	min: PropTypes.number,
	max: PropTypes.number,
	suffix: PropTypes.string,
	store: PropTypes.object,
	storeKey: PropTypes.string,
};
TextResizer.defaultProps = {
	defaultFont: 16,
	step: 4,
	min: 14,
	max: 20,
	suffix: 'px',
	store: localStorage,
	storeKey: 'TextResizer',
};
export default TextResizer;
