import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './MobileProfile.module.css';
import { useContext, useState } from 'react';
import { UserContext } from '../../store/UserContext';
import { AiOutlineSetting, AiOutlineDown } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';
function isAuthenticated() {
  const user = JSON.parse(localStorage.getItem('loggedInUser'));
  return user;
}

const MenuProfileBar = () => {
  const navigate = useNavigate();

  const user = isAuthenticated();
  const splitUser = user?.user?.name;
  const userArr = splitUser?.split(' ');
  const username = userArr.reduce(function (a, b) {
    return a.length <= b.length ? a : b;
  });
  const status = 'Online';

  const { addUserHandler } = useContext(UserContext);

  const [toggled, setToggled] = useState(false);

  const LogoutHandler = async () => {
    const headers = {
      'Content-Type': 'application/json',
    };
    await axios
      .get('https://opspad.hng.tech/api/auth/logout', headers)
      .then((response) => response)
      .then(
        navigate('/login'),
        localStorage.removeItem('loggedInUser'),
        addUserHandler(null),
      )
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={styles.menu}>
      <div className={styles.profile}>
        <div>
          <h3 className={styles.name}>{username}</h3>
          <p className={styles.online}>{status}</p>
        </div>
        <AiOutlineDown
          className={styles.svg}
          onClick={() => setToggled((prev) => !prev)}
        />
      </div>
      {toggled && (
        <div className={styles.profile__text}>
          <Link to='/settings' className={styles.settings}>
            <span>
              <AiOutlineSetting className={styles.icon_1} />{' '}
            </span>{' '}
            Settings
          </Link>
          <div onClick={LogoutHandler} className={styles.settings}>
            <span>
              <RiLogoutBoxRLine className={styles.icon_2} />
            </span>{' '}
            Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuProfileBar;
