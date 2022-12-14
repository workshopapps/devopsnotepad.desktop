import { useContext, useState } from 'react';
import { menuList } from './NavData';
import styles from './Navigation.module.css';
import { Link, NavLink } from 'react-router-dom';
import { UserContext } from '../../store/UserContext';

const Navbar = ({ isOpen, setOpen }) => {
  const { user, addUserHandler } = useContext(UserContext);

  const [menuOpen, setMenuOpen] = useState({});
  const handleMenuToggle = (index) =>
    setMenuOpen((state) => ({ [index]: !state[index] }));

  return (
    <nav className={`${styles.inMenuBar} ${isOpen ? styles.openMenu : ''}`}>
      <ul className={styles.menuUlList}>
        <div className={styles.menuBox}>
          {menuList.map((menu, i) => (
            <div key={i} className={styles.sMki}>
              <button
                className={styles.menu_title}
                onClick={() => handleMenuToggle(i)}
                type='button'
              >
                {menu.title} <i className='fa-solid fa-angle-down'></i>
              </button>
              {menu.subMenu && (
                <ul
                  className={`${styles.dropdown} ${
                    menuOpen[i] ? styles.show : ''
                  }`}
                >
                  {menu.subMenu.map((sMenu, i) => {
                    if (sMenu.title === "Github") {
                      window.open(sMenu.slug, "_blank")
                    }
                    return (
                    <li key={i}>
                      <NavLink
                        to={sMenu.slug.length > 20 ? "" : sMenu.slug}
                        onClick={() => {
                          handleMenuToggle(false);
                          setOpen(false);
                        }}
                        className={({ isActive }) =>
                          isActive ? styles.footer_list : ''
                        }
                      >
                        {sMenu.title}
                      </NavLink>
                    </li>
                  )})}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className={styles.navAuthBtn}>
          {user !== null ? (
            <Link
              className={styles.login_link}
              to='/login'
              onClick={() => addUserHandler(null)}
            >
              Logout
            </Link>
          ) : (
            <Link className={styles.login_link} to='/login'>
              Login
            </Link>
          )}
          <Link className={styles.download_link} to='/download'>
            Download App
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
