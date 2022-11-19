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
export default Button;
