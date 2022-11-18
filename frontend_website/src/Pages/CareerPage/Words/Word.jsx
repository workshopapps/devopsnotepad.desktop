import classes from './Word.module.css';
const Word = (props) => {
  return (
    <li className={classes.li}>
      <p className={classes.p}>{props.message}</p>
      <h1 className={classes.h1}>{props.name}</h1>
      <h2 className={classes.h2}>{props.position}</h2>
    </li>
  );
};
export default Word;
