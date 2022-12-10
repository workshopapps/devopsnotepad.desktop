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
const AvailabiltyNotifications = () => {
  const { availabilityNotifications, addAvailabilityNotifications } =
    useContext(UserContext);

  useEffect(() => {
    const availabiltyNotificationsRef = ref(
      db,
      `opspad/notifications/60a482ff-76ca-11ed-82ea-50ebf62a0ed9`,
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
  }, [addAvailabilityNotifications]);

  //   // Getting the id to fetch notifications
  //   const { id } = useParams();
  //   console.log(id);

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
        {!isLoading &&
          !error.hasError &&
          availabilityNotifications?.length === 0 && (
            <div className={classes.no_notifications}>
              <p>
                Could not fetch notifications at the moment. Please check your
                internet
              </p>
            </div>
          )}
        {isLoading && <LoadingSpinner />}
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
