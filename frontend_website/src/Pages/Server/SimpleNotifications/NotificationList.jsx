import ListItem from './ListItem';

import classes from './NotificationList.module.css';
const NotificationList = ({ data }) => {
  return (
    <>
      <h1 className={classes.h1}>Today</h1>
      <ul className={classes.ul}>
        {data.map((item, index) => (
          <ListItem
            key={index}
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
