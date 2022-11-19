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
export default Input;
