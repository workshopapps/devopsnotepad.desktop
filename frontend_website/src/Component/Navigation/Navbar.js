import { useState } from 'react';
import { menuList } from './menuData';
import { IoClose } from 'react-icons/io5';
import logo from './assets/logo.svg';

const Navbar = ({ isOpen, setOpen }) => {
  const [productDropdown, setProductDropdown] = useState(false);
  const [companyDropdown, setCompanyDropdown] = useState(false);
  const [resourcesDropdown, setResourcesDropdown] = useState(false);
  const [communityDropdown, setCommunityDropdown] = useState(false);

  return (
    <nav className={`inMenuBar ${isOpen ? 'openMenu' : ''}`}>
      <div className='logo'>
        <div className='inLogo'>
          <img src={logo} alt='' />
          <IoClose className='closeIcon' onClick={() => setOpen(false)} />
        </div>
      </div>
      <ul className='menuUlList'>
        {/* <li><a href="/">Home</a></li> */}
        <div className='menuBox'>
          <button
            className='menu_title'
            onClick={() => {
              setProductDropdown(!productDropdown);
              setCompanyDropdown(false);
              setResourcesDropdown(false);
              setCommunityDropdown(false);
            }}
          >
            Product <i className='fa-solid fa-angle-down'></i>
          </button>
          <div className={`dropdown ${productDropdown ? 'show' : ''}`}>
            {menuList.map((menu, i) => (
              <div key={i}>
                {menu.product && (
                  <li>
                    {menu.product.map((b, i) => (
                      <a href={`${b.slug}`} key={i}>
                        {b.title}
                      </a>
                    ))}
                  </li>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='menuBox'>
          <button
            className='menu_title'
            onClick={() => {
              setCompanyDropdown(!companyDropdown);
              setProductDropdown(false);
              setResourcesDropdown(false);
              setCommunityDropdown(false);
            }}
          >
            Company <i className='fa-solid fa-angle-down'></i>
          </button>
          <div className={`dropdown ${companyDropdown ? 'show' : ''}`}>
            {menuList.map((menu, i) => (
              <div key={i}>
                {menu.company && (
                  <li>
                    {menu.company.map((b, i) => (
                      <a href={`${b.slug}`} key={i}>
                        {b.title}
                      </a>
                    ))}
                  </li>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='menuBox'>
          <button
            className='menu_title'
            onClick={() => {
              setResourcesDropdown(!resourcesDropdown);
              setProductDropdown(false);
              setCompanyDropdown(false);
              setCommunityDropdown(false);
            }}
          >
            Resources <i className='fa-solid fa-angle-down'></i>
          </button>
          <div className={`dropdown ${resourcesDropdown ? 'show' : ''}`}>
            {menuList.map((menu, i) => (
              <div key={i}>
                {menu.resources && (
                  <li>
                    {menu.resources.map((b, i) => (
                      <a href={`${b.slug}`} key={i}>
                        {b.title}
                      </a>
                    ))}
                  </li>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className='menuBox'>
          <button
            className='menu_title'
            onClick={() => {
              setCommunityDropdown(!communityDropdown);
              setProductDropdown(false);
              setCompanyDropdown(false);
              setResourcesDropdown(false);
            }}
          >
            Community <i className='fa-solid fa-angle-down'></i>
          </button>
          <div className={`dropdown ${communityDropdown ? 'show' : ''}`}>
            {menuList.map((menu, i) => (
              <div key={i}>
                {menu.community && (
                  <li>
                    {menu.community.map((b, i) => (
                      <a href={`${b.slug}`} key={i}>
                        {b.title}
                      </a>
                    ))}
                  </li>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className='navAuthBtn'>
          <a className='login_link' href='/login'>
            Login
          </a>
          <a className='download_link' href='/'>
            Download App
          </a>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
