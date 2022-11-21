import PropTypes from 'prop-types';

import classes from './ListItem.module.css';
const ListItem = (props) => {
  return (
    <li className={classes.li} data-testid='career__list--item'>
      <div className={classes.div}></div>
      <p className={classes.p}>{props.title}</p>
    </li>
  );
};

// Typechecking
ListItem.propTypes = {
  title: PropTypes.string,
};

export default ListItem;
