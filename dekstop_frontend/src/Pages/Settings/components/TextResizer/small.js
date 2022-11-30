/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-fragments */
/* eslint-disable react/function-component-definition */
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SmallFont = ({
	defaultFont,
	step,
	min,
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
			{fontSize}
			<button disabled={fontSize <= min} onClick={() => toggle('small')}>
				small
			</button>
			<label htmlFor="English (UK)">
				English (UK)
				<input
					type="radio"
					id="small_font"
					value="small"
					onClick={() => toggle('small')}
                    disabled={fontSize <= min}
				/>
			</label>
			<style>{`html { font-size: ${fontSize}${suffix} }`.trim()}</style>
		</React.Fragment>
	);
};
SmallFont.propTypes = {
	defaultFont: PropTypes.number,
	step: PropTypes.number,
	min: PropTypes.number,
	suffix: PropTypes.string,
	store: PropTypes.object,
	storeKey: PropTypes.string,
};
SmallFont.defaultProps = {
	defaultFont: 16,
	step: 4,
	min: 14,
	suffix: 'px',
	store: localStorage,
	storeKey: 'TextResizer',
};
export default SmallFont;
