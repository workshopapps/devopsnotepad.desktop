import PropTypes from 'prop-types';

import classes from './Opening.module.css';
const Opening = (props) => {
  return (
    <div className={classes.li} data-testid='opening__item'>
      <h1 className={classes.h1}>{props.title}</h1>
      <div className={classes.detail}>
        <p className={classes.p}>
          Location: <span className={classes.span}>{props.location}</span>
        </p>
        <p className={classes.p}>
          Department: <span className={classes.span}>{props.department}</span>
        </p>
      </div>
    </div>
  );
};

// Typechecking
Opening.propTypes = {
  title: PropTypes.string,
  location: PropTypes.string,
  department: PropTypes.string,
};

export default Opening;
