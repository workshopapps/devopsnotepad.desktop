import SideNav from '../../../Component/SideNav/SideNav';
import NotificationList from './NotificationList';
import { BsFillBackspaceFill } from 'react-icons/bs';

import classes from './SimpleNotifications.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useFetch from '../../../hooks/useFetch';
import LoadingSpinner from './LoadingSpinner';
import { useContext } from 'react';
import { UserContext } from '../../../store/UserContext';
const SimpleNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  // Getting the id to fetch notifications
  // const { id } = useParams();
  // console.log(id);

  //   Navigating backward functionalitiy
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lastIndex = pathname.lastIndexOf('/');
  const backHandler = () => {
    navigate(`${pathname.slice(0, lastIndex)}`);
  };
  const { addSimpleNotifications } = useContext(UserContext);
  //   Fetching notifications
  const { isLoading, error, fetchRequest: fetchNotifications } = useFetch();

  useEffect(() => {
    const getNotifications = (nots) => {
      const formattedNots = nots?.notifications.map((not) => {
        const time = new Date(not.created_at);
        const hrs = time.getHours();
        return {
          id: not.id,
          description: not.logs,
          time: hrs,
        };
      });
      setNotifications(formattedNots);
      addSimpleNotifications(formattedNots);
    };
    fetchNotifications(
      {
        url: 'https://opspad.hng.tech/api/server/60a482ff-76ca-11ed-82ea-50ebf62a0ed9/notifications/',
      },
      getNotifications,
    );
  }, [fetchNotifications, addSimpleNotifications]);

  return (
    <section className={classes.notifications}>
      <div className={classes.left}>
        <SideNav />
      </div>
      <div className={classes.right}>
        <BsFillBackspaceFill className={classes.back} onClick={backHandler} />
        {notifications.length > 0 && <NotificationList data={notifications} />}
        {!isLoading && !error.hasError && notifications.length === 0 && (
          <div className={classes.no_notifications}>
            <p>
              You have no notifications yet. Activity from your server wil be
              displayed here.
            </p>
          </div>
        )}
        {isLoading && <LoadingSpinner />}
        {error.hasError && (
          <div className={classes.no_notifications}>
            <p>{error.message}</p>
          </div>
        )}
      </div>
    </section>
  );
};
export default SimpleNotifications;
