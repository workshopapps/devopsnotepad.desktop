import logo from "./assets/logo.svg";
import googlePlay from "./assets/googleplay.svg";
import appStore from "./assets/appstore.svg";
import { Links } from "./menuData";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
    <div className="inFooter">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="dInFooter">
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

          <div className="miUM right">
            <h4>DOWNLOAD APP</h4>
            <div className="fDownloadAppLink">
              <a href="/"><img src={googlePlay} alt="googlePlay" /></a>
              <a href="/"><img src={appStore} alt="appStore" /></a>
            </div>
          </div>
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Footer