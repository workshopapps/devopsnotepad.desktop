import { FaCircle } from 'react-icons/fa';

import classes from './ListItem.module.css';
const ListItem = ({ up, description, time }) => {
  return (
    <li className={classes.li}>
      <FaCircle
        className={`svg ${up ? `${classes.active}` : `${classes.inactive}`}`}
      />
      <p className={classes.p}>{description}</p>
      <time className={classes.time}>{time}</time>
    </li>
  );
};
export default ListItem;
