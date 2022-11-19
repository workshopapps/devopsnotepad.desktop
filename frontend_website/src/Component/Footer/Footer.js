import logo from './assets/logo.svg';
import googlePlay from './assets/googleplay.svg';
import appStore from './assets/appstore.svg';
import { Links } from './menuData';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="inFooter">
        <div className="mainFooter">
          <div className="logo">
            <a href="/">
              <img src={logo} alt="" />
            </a>
          </div>
          <div className="dMFooter">
            <ul className="footerLink">
              {Links.map((link, linkKey) => (
                <div key={linkKey} className="miUM">
                  <h4>{link.title}</h4>
                  {link.list && (
                    <div>
                      {link.list.map((b, i) => (
                        <li key={i}>
                          <a href={`${b.slug}`}>{b.title}</a>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              ))}

              <li className="miUM right">
                <h4>DOWNLOAD APP</h4>
                <div className="fDownloadAppLink">
                  <a href="/"><img src={googlePlay} alt="googlePlay" /></a>
                  <a href="/"><img src={appStore} alt="appStore" /></a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="bottomFooter">
          <span className='f_copyright'>All rights reserved &copy; 2022</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
