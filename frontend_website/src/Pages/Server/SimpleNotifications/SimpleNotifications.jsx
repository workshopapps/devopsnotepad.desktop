import SideNav from '../../../Component/SideNav/SideNav';
import NotificationList from './NotificationList';
import { BsFillBackspaceFill } from 'react-icons/bs';

import classes from './SimpleNotifications.module.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
const SimpleNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  // Getting the id to fetch notifications
  const { id } = useParams();
  console.log(id);

  //   Navigating backward functionalitiy
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lastIndex = pathname.lastIndexOf('/');
  const backHandler = () => {
    navigate(`${pathname.slice(0, lastIndex)}`);
  };

  //   Fetching notifications
  const { fetchRequest: fetchNotifications } = useFetch();
  useEffect(() => {
    const getNotifications = (nots) => {
      console.log(nots);
      setNotifications(nots);
    };

    fetchNotifications(
      {
        url: 'https://opspad.onrender.com/api/server/2975f888-732b-11ed-bb9c-129f0da43e4d/notifications/',
      },
      getNotifications,
    );
    console.log('Request sent');
  }, [fetchNotifications]);

  return (
    <section className={classes.notifications}>
      <div className={classes.left}>
        <SideNav />
      </div>
      <div className={classes.right}>
        <BsFillBackspaceFill className={classes.back} onClick={backHandler} />
        {notifications.length > 0 && <NotificationList data={notifications} />}
        {notifications.length === 0 && (
          <div className={classes.no_notifications}>
            <p>
              You have no notifications yet. Activity from your server wil be
              displayed here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
export default SimpleNotifications;
