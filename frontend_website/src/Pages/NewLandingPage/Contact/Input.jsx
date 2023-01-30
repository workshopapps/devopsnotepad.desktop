import PropTypes from 'prop-types';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { AiFillEye } from 'react-icons/ai';

import classes from './Input.module.css';

const Input = (props) => {
  const { passwordIcon, showPassword, setShowPassword, ...others } = props;

  return (
    <div
      className={`${props.className} ${classes.input__group}`}
      data-testid='login__input'
    >
      <label className={classes.label}>{props.label}</label>
      <input {...others} className={classes.input} required></input>
      {passwordIcon ? (
        <div
          className={classes.eye}
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <span className={classes.eyeSvg}>
              <AiFillEyeInvisible />
            </span>
          ) : (
            <span className={classes.eyeSvg}>
              <AiFillEye />
            </span>
          )}
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
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Input;
