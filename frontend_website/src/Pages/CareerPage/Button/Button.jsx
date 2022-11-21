import PropTypes from 'prop-types';

import classes from './Button.module.css';

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`${props.className} ${classes.button}`}
      disabled={props.disabled}
      data-testid='button'
    >
      {props.children}
    </button>
  );
};

// Typechecking
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes?.bool,
  type: PropTypes.string,
};

export default Button;
