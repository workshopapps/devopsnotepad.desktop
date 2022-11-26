/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';

function CountryCodeComponent({ code, country, value, onClickCode }) {
	return (
		<option onClick={onClickCode} data-countrycode={code} value={value}>
			{country} {code}
		</option>
	);
}

CountryCodeComponent.propTypes = {
	code: PropTypes.string,
	country: PropTypes.string,
	value: PropTypes.string,
	onClickCode: PropTypes.func,
};

export default CountryCodeComponent;
