import classes from './Perk.module.css';
const Perk = (props) => {
  return (
    <li className={classes.li}>
      {props.icon}
      <div className={classes.detail}>
        <h1 className={classes.h1}>{props.title}</h1>
        <p className={classes.p}>{props.description}</p>
      </div>
    </li>
  );
};
export default Perk;
