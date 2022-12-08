import { FaCircle } from 'react-icons/fa';

import classes from './ListItem.module.css';
const ListItem = ({ up, description, time }) => {
  return (
    <li className={classes.li}>
      <FaCircle className={classes.svg} />
      <p className={classes.p}>{description}</p>
      <p className={classes.time}>{`${time} hrs ago`}</p>
    </li>
  );
};
export default ListItem;
