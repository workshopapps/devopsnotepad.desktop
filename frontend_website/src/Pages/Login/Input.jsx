import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai';

import classes from './Input.module.css';

const Input = (props) => {
  const { invalid = '', passwordIcon, showPassword, setShowPassword, ...others } = props;

  return (
    <div className={`${props.className} ${classes.input__group}`} data-testid="login__input">
      <label className={classes.label}>{props.label}</label>
      <input
        {...others}
        className={`${invalid ? `${classes.invalid}` : ''} ${classes.input}`}
      ></input>
      {passwordIcon ?
        (
          <div className={classes.eye} onClick={() => setShowPassword(!showPassword)}>
            {showPassword ?
              <span className={classes.eyeSvg}><AiFillEyeInvisible /></span> :
              <span className={classes.eyeSvg}><AiFillEye /></span>}
          </div>
        ) : null}
    </div>
  );
};

// Typechecking
Input.propTypes = {
  id: PropTypes?.string,
  label: PropTypes?.string,
  type: PropTypes?.string,
  invalid: PropTypes?.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
};

export default Input;
