import PropTypes from 'prop-types';

import classes from './Input.module.css';

const Input = ({ type, placeholder, value, onChange, className }) => {
  return (
    <input
      className={`${className} ${classes.input}`}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      data-testid='input'
      aria-label='input'
    />
  );
};

// Typechecking
Input.propTypes = {
  type: PropTypes?.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
