import { FaStar, FaStarHalfAlt } from 'react-icons/fa';
import { BsFillPersonFill } from 'react-icons/bs';
import classes from './Centered.module.css';
const ListItem = ({ name, message }) => {
  return (
    <li className={classes.li}>
      <p className={classes.icon__box}>
        <BsFillPersonFill className={classes.icon} />
      </p>
      <div className={classes.icons__box}>
        <FaStar className={classes.icons} />
        <FaStar className={classes.icons} />
        <FaStar className={classes.icons} />
        <FaStar className={classes.icons} />
        <FaStarHalfAlt className={classes.icons} />
      </div>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.p}>{message}</p>
    </li>
  );
};
export default ListItem;
