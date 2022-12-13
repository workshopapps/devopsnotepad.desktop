import { ref, onValue } from 'firebase/database';
import { db } from '../../../firebase.config';

import SideNav from '../../../Component/SideNav/SideNav';
import {
  BsFillBackspaceFill,
  BsFillCloudArrowDownFill,
  BsFillCloudArrowUpFill,
} from 'react-icons/bs';
import useFetch from '../../../hooks/useFetch';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import LoadingSpinner from '../SimpleNotifications/LoadingSpinner';

import classes from './AvailabilityNotifications.module.css';
import { useContext, useEffect } from 'react';
import { UserContext } from '../../../store/UserContext';
import { ServerContext } from '../../../store/ServerContext';
import { useState } from 'react';
import { useCallback } from 'react';
const AvailabiltyNotifications = () => {
  const { availabilityNotifications, addAvailabilityNotifications } =
    useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const { servers } = useContext(ServerContext);
  const server = servers.find((ser) => ser.id === id);

  const fetchNotifications = useCallback(() => {
    setLoading(true);
    const availabiltyNotificationsRef = ref(
      db,
      `opspad/notifications/${server.userId}`,
    );

    onValue(availabiltyNotificationsRef, (snapshot) => {
      const data = snapshot.val();
      const now = new Date(data?.last_checked);
      const options = {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        weekday: 'short',
      };
      // etting the browser location
      const locale = navigator.language;
      const formattedDate = new Intl.DateTimeFormat(locale, options).format(
        now,
      );
      addAvailabilityNotifications({
        message: data?.msg,
        status: data?.status,
        date: formattedDate,
      });
    });
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchNotifications();
  }, [fetchNotifications]);

  //   Navigating backward functionalitiy
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lastIndex = pathname.lastIndexOf('/');
  const backHandler = () => {
    navigate(`${pathname.slice(0, lastIndex)}`);
  };

  //   Fetching notifications
  const { isLoading, error } = useFetch();

  return (
    <section className={classes.notifications}>
      <div className={classes.left}>
        <SideNav />
      </div>
      <div className={classes.right}>
        <BsFillBackspaceFill className={classes.back} onClick={backHandler} />
        {!loading && availabilityNotifications === null && (
          <div className={classes.no_notifications}>
            <p>No notification available.</p>
          </div>
        )}
        {loading && <LoadingSpinner />}
        {error.hasError && (
          <div className={classes.no_notifications}>
            <p>{error.message}</p>
          </div>
        )}
        {!isLoading && !error.hasError && availabilityNotifications && (
          <div className={classes.available}>
            <div className={classes.innerdiv}>
              <h4 className={classes.innerh4}>Last Checked</h4>
              <p className={classes.date}>{availabilityNotifications?.date}</p>
            </div>
            <div className={classes.innerdiv}>
              <h4 className={classes.innerh4}>Message</h4>
              <p className={classes.message}>
                {`${availabilityNotifications?.message}`.toUpperCase()}
              </p>
            </div>
            <div className={classes.innerdiv}>
              <h4 className={classes.innerh4}>Server Health</h4>
              <p
                className={`${
                  availabilityNotifications?.status
                    ? `${classes.status_active}`
                    : `${classes.status_inactive}`
                }`}
              >
                {availabilityNotifications?.status ? 'Up' : 'Down'}
                <span>
                  {availabilityNotifications?.status ? (
                    <BsFillCloudArrowUpFill className={classes.status_svg} />
                  ) : (
                    <BsFillCloudArrowDownFill className={classes.status_svg} />
                  )}
                </span>
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
export default AvailabiltyNotifications;
