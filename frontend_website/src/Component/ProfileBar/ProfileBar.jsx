import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './ProfileBar.module.css';
import settingsIcon from './assets/settings.png';
import exitIcon from './assets/exit.png';
import expandIcon from './assets/expand.png';
import dummy from './assets/profile.png';
import { useContext } from 'react';
import { UserContext } from '../../store/UserContext';

function ProfileBar() {
  const navigate = useNavigate();

  function isAuthenticated() {
    const user = JSON.parse(localStorage.getItem('loggedInUser'));
    return user;
  }

  const user = isAuthenticated();
  const splitUser = user?.user?.name;
  const userArr = splitUser?.split(' ');
  const username = userArr?.reduce(function(a, b) {
    return a.length <= b.length ? a : b;
  });
  const status = 'Online';

  const { addUserHandler } = useContext(UserContext);

  return (
    <div className={styles.menu} >
      <div className={styles.profile}>
        <div className={styles.profile__img}>
          <img src={dummy} alt='' />
        </div>

        <div className={styles.profile__text}>
          <p>
            {username}
            <img src={expandIcon} alt='expand' />
          </p>
          <p>{status}</p>

          <div className={styles.dropdown}>
            <Link to='/settings' className={styles.dropdown__item}>
              <img src={settingsIcon} alt='icon' />
              <p>Settings</p>
            </Link>

            <div
              className={styles.dropdown__item}
              onClick={async () => {
                const headers = {
                  'Content-Type': 'application/json',
                };

                await axios
                  .get('https://opspad.dev/api/auth/logout', headers)
                  .then((response) => response)
                  .then(
                    navigate('/login'),
                    localStorage.removeItem('loggedInUser'),
                    addUserHandler(null),
                  )
                  .catch((error) => {
                    console.error(error);
                  });

                return null;
              }}
            >
              <img src={exitIcon} alt='icon' />
              <p>Log Out</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileBar;
