import { useState } from 'react';
import ListItem from './ListItem';
import LogsPagination from './LogsPagination';

import classes from './NotificationList.module.css';

const logsPerPage = 4;

const NotificationList = ({ data }) => {
  const [start, setStart] = useState(0);
  const end = start + logsPerPage;

  // The function that will get the page number from the pagination component.
  const changePageHandler = (newPage) => {
    setStart((pag) => newPage * logsPerPage - logsPerPage);
  };

  return (
    <>
      <h1 className={classes.h1}>Today</h1>
      <ul className={classes.ul}>
        {data.length > 0 &&
          data
            .slice(start, end)
            .map((item) => (
              <ListItem
                key={item.id}
                up={item.up}
                description={item.description}
                time={item.time}
              />
            ))}
      </ul>
      {data.length > 0 && (
        <LogsPagination
          logsPerPage={logsPerPage}
          totalLogs={data.length}
          onChange={changePageHandler}
        />
      )}
    </>
  );
};
export default NotificationList;
