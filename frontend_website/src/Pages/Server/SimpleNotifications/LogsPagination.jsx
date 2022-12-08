import { useState } from 'react';
import { ImPrevious, ImNext } from 'react-icons/im';
import './LogsPagination.scss';

const LogsPagination = (props) => {
  const logsPerPage = props.logsPerPage;
  const totalLogs = props.totalLogs;

  const total_pages = Math.ceil(totalLogs / logsPerPage);

  const [page, setPage] = useState(1);

  // A function to decrease page
  const prevHandler = () => {
    if (page === 1) return;
    setPage((page) => page - 1);
    // Sending page number to the parent component where the pagination components is used
    props.onChange(page - 1);
  };

  // A function to increase page
  const nextHandler = () => {
    if (page === total_pages) return;
    setPage((page) => page + 1);
    // Sending page number to the parent component where the pagination components is used
    props.onChange(page + 1);
  };

  return (
    <div className='user-pagination__card'>
      <div className='user-pagination__icons--box'>
        <ImPrevious
          onClick={prevHandler}
          className={`user-pagination__icons--prev ${
            page === 1 ? ' not__allowed' : ''
          }`}
        />
        <p className='user-pagination__icons--paragraph'>{page}</p>
        <ImNext
          onClick={nextHandler}
          className={`user-pagination__icons--next ${
            page === total_pages || total_pages < 1 ? ' not__allowed' : ''
          }`}
        />
      </div>
      <div className='user-pagination__buttons'>
        {Array.from({ length: total_pages }, (_, index) => index + 1).map(
          (each) => (
            <button
              key={each}
              onClick={() => {
                props.onChange(each);
                setPage((page) => each);
              }}
            >
              {each}
            </button>
          ),
        )}
      </div>
    </div>
  );
};
export default LogsPagination;
