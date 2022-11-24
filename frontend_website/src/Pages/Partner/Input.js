import React from 'react';
import PropTypes from 'prop-types';

const Input = ({ type, name, onChange, placeholder, className, value, id }) => (
  <>
    <input
      type={type}
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className={className}
      value={value}
      id={id}
    />
  </>
);

Input.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
};

Input.defaultProps = {
  placeholder: null,
  value: '',
  name: '',
  className: '',
  id: '',
  onChange: null,
};

export default Input;
