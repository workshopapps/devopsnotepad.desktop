import { useState } from 'react';
import { menuList } from './NavData';
import { IoClose } from 'react-icons/io5';
import logo from './assets/logo.svg';
import styles from './Navigation.module.css';
import { Link } from 'react-router-dom';

const Navbar = ({ isOpen, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState({});

  const handleMenuToggle = (index) => setMenuOpen(state => ({ [index]: !state[index] }));

  return (
    <nav className={`${styles.inMenuBar} ${isOpen ? styles.openMenu : ''}`}>
      <div className={styles.logo}>
        <div className={styles.inLogo}>
          <Link to="/" onClick={() => {setOpen(false)}}>
            <img src={logo} alt='' />
          </Link>
          <IoClose
            className={styles.closeIcon}
            onClick={() => setOpen(false)}
          />
        </div>
      </div>
      <ul className={styles.menuUlList}>
        <div className={styles.menuBox}>
          {menuList.map((menu, i) => (
            <div key={i} className={styles.sMki}>
              <button className={styles.menu_title} onClick={() => handleMenuToggle(i)} type="button">
                {menu.title} <i className='fa-solid fa-angle-down'></i>
              </button>
              {menu.subMenu && (
                <div className={`${styles.dropdown} ${menuOpen[i] ? styles.show : ''}`}>
                  {menu.subMenu.map((sMenu, i) => (
                    <li><Link to={`${sMenu.slug}`} key={i} onClick={() => {
                      handleMenuToggle(false)
                      setOpen(false)
                    }}>{sMenu.title}</Link></li>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <div className={styles.navAuthBtn}>
          <Link className={styles.login_link} to='/login'>
            Login
          </Link>
          <Link className={styles.download_link} to='/'>
            Download App
          </Link>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
