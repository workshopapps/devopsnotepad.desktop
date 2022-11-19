import PropTypes from 'prop-types';

import classes from './Perk.module.css';
const Perk = (props) => {
  return (
    <li className={classes.li} data-testid='perk__item'>
      {props.icon}
      <div className={classes.detail}>
        <h1 className={classes.h1}>{props.title}</h1>
        <p className={classes.p}>{props.description}</p>
      </div>
    </li>
  );
};

// Typechecking
Perk.propTypes = {
  icon: PropTypes.element,
  title: PropTypes.string,
  description: PropTypes.string,
};

export default Perk;
