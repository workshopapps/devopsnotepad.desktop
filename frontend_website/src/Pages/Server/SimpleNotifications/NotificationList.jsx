import ListItem from './ListItem';

import classes from './NotificationList.module.css';
const NotificationList = ({ data }) => {
  //   const data = [
  //     {
  //       up: true,
  //       description: 'The software installation on HNG server was successful',
  //       time: '2 hours ago',
  //     },
  //     {
  //       up: false,
  //       description: 'The software installation on HNG server was successful',
  //       time: '2 hours ago',
  //     },
  //     {
  //       up: true,
  //       description: 'The software installation on HNG server was successful',
  //       time: '2 hours ago',
  //     },
  //     {
  //       up: false,
  //       description: 'The software installation on HNG server was successful',
  //       time: '2 hours ago',
  //     },
  //     {
  //       up: false,
  //       description: 'The software installation on HNG server was successful',
  //       time: '2 hours ago',
  //     },
  //   ];
  return (
    <>
      <h1 className={classes.h1}>Today</h1>
      <ul className={classes.ul}>
        {data.map((item) => (
          <ListItem
            key={item.id}
            up={item.up}
            description={item.description}
            time={item.time}
          />
        ))}
      </ul>
    </>
  );
};
export default NotificationList;
