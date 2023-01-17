import { useState } from 'react';
import { BsCircleFill } from 'react-icons/bs';
import classes from './Centered.module.css';

const Pagination = (props) => {
  const itemPerPage = props.itemPerPage;
  const totalItem = props.totalItem;

  // Calculating the no of pages
  const total_pages = Math.ceil(totalItem / itemPerPage);

  const [page, setPage] = useState(1);

  // A function handling page setting by clicking any of the icons
  const iconHandler = (num) => {
    props.onChange(num);
    setPage((page) => num);
  };

  return (
    <div className={classes.pagination__card}>
      <div className={classes.pagination__buttons}>
        {Array.from({ length: total_pages }, (_, index) => index).map(
          (each) => (
            <BsCircleFill
              className={` ${classes.pagination__icon} ${
                page === each ? `${classes.pagination__iconactive}` : ''
              }`}
              key={each}
              onClick={iconHandler.bind(null, each)}
            />
          ),
        )}
      </div>
    </div>
  );
};
export default Pagination;
