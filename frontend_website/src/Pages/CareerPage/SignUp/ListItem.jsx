import classes from './ListItem.module.css';
const ListItem = (props) => {
  return (
    <li className={classes.li}>
      <div className={classes.div}></div>
      <p className={classes.p}>{props.title}</p>
    </li>
  );
};
export default ListItem;
