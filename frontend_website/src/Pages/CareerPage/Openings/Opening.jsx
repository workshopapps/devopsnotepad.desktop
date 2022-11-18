import classes from './Opening.module.css';
const Opening = (props) => {
  return (
    <li className={classes.li}>
      <h1 className={classes.h1}>{props.title}</h1>
      <div className={classes.detail}>
        <p>
          Location: <span className={classes.span}>{props.location}</span>
        </p>
        <p className={classes.p}>
          Department: <span className={classes.span}>{props.department}</span>
        </p>
      </div>
    </li>
  );
};
export default Opening;
