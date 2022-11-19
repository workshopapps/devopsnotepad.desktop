import { useState } from 'react';
import { menuList } from './NavData';
import { IoClose } from 'react-icons/io5';
import logo from './assets/logo.svg';
import styles from './Navigation.module.css';

const Navbar = ({ isOpen, setOpen }) => {
  const [menuOpen, setMenuOpen] = useState({});

  const handleMenuToggle = (index) => setMenuOpen(state => ({ [index]: !state[index] }));

  return (
    <nav className={`${styles.inMenuBar} ${isOpen ? styles.openMenu : ''}`}>
      <div className={styles.logo}>
        <div className={styles.inLogo}>
          <img src={logo} alt='' />
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
                      <li><a href={`${sMenu.slug}`} key={i}>{sMenu.title}</a></li>
                    ))}
                  </div>
                )}
              </div>
            ))}
        </div>

        <div className={styles.navAuthBtn}>
          <a className={styles.login_link} href='/login'>
            Login
          </a>
          <a className={styles.download_link} href='/'>
            Download App
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
