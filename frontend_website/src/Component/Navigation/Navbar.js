import { useContext, useState } from 'react';
import { menuList } from './NavData';
import { navMenu } from './NavData';
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
        {/* <div className={styles.menuBox}>
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
                  {menu.subMenu.map((sMenu, i) => (
                    <li key={i}>
                      <NavLink
                        to={`${sMenu.slug}`}
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
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div> */}

        {navMenu.map((menu, i) => (
          <li key={i} className={styles.menuLi}>
            <NavLink
              to={`${menu.slug}`}
              onClick={() => {
                handleMenuToggle(false);
                setOpen(false);
              }}
              className={({ isActive }) => (isActive ? styles.footer_list : '')}
            >
              {menu.title}
            </NavLink>
          </li>
        ))}

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
          <Link className={styles.download_link} to='/demo'>
            See Demo
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
