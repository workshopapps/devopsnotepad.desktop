import ListItem from './ListItem';
import classes from './Centered.module.css';
import { useState } from 'react';

import Pagination from './Pagination';

const Users = [
  {
    name: 'Sarah Walter',
    message:
      "I've been able to move around more, knowing I can track my servers on the go!",
  },
  {
    name: 'David Onyezuru',
    message:
      'It’s amazing how quickly and easily it is to configure the type of logs you want to receive.',
  },
  {
    name: 'Raymond Akinbote',
    message:
      "I've been able to move around more, knowing I can track my servers on the go!",
  },
  {
    name: 'Bolu Ajoke',
    message:
      'Having a hard time remembering passwords for various server tools, Opspad has made saving tool credentials a breeze',
  },
];
const Lists = () => {
  const [start, setStart] = useState(0);

  const getPageNumber = (num) => {
    setStart(num);
  };
  return (
    <>
      <ul className={`${classes.ul} ${classes.pc}`}>
        {Users.map((user, index) => (
          <ListItem key={index} name={user.name} message={user.message} />
        ))}
      </ul>

      <ul className={`${classes.ul} ${classes.mobile}`}>
        <>
          {' '}
          {Users.slice(start, start + 1).map((user) => (
            <ListItem name={user.name} message={user.message} />
          ))}
        </>
      </ul>
      <div className={classes.mobile}>
        <Pagination
          totalItem={Users.length}
          itemPerPage={1}
          onChange={getPageNumber}
        />
      </div>
    </>
  );
};
export default Lists;
