import { useState } from 'react';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi';

import './Pagination.scss';

const Pagination = (props) => {
  const commentsPerPage = 5;
  const totalComments = 30;

  // Calculating the no of pages
  const total_pages = Math.ceil(totalComments / commentsPerPage);

  const [page, setPage] = useState(1);

  // A function handling moving to the previous stage
  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    props.onChange(page - 1);
  };

  // A function handling moving to the previous stage
  const nextHandler = () => {
    if (page === total_pages) return;

    setPage((page) => page + 1);
    props.onChange(page + 1);
  };

  return (
    <div className='pagination__card'>
      <BiArrowToLeft
        onClick={() => setPage(1)}
        className={`pagination__icons--start ${
          page === 1 ? ' not__allowed' : ''
        }`}
      />
      <IoIosArrowBack
        onClick={prevHandler}
        className={`pagination__icons--prev ${
          page === 1 ? ' not__allowed' : ''
        }`}
      />
      <div className='pagination__buttons'>
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <button
              className={`${page === each ? 'btn__active' : ''}`}
              key={each}
              onClick={() => {
                props.onChange(each);
                setPage((page) => each);
              }}
            >
              {`${each}`.padStart(2, '0')}
            </button>
          ),
        )}
      </div>
      <IoIosArrowForward
        onClick={nextHandler}
        className={`pagination__icons--next ${
          page === total_pages || total_pages < 1 ? ' not__allowed' : ''
        }`}
      />
      <BiArrowToRight
        onClick={() => setPage(+total_pages)}
        className={`pagination__icons--end ${
          page === total_pages || total_pages < 1 ? ' not__allowed' : ''
        }`}
      />
    </div>
  );
};
export default Pagination;
