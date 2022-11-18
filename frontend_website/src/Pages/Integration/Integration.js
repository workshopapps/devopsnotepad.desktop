import bannerImg from './assets/hero-section-image.png';
import { getMore, list } from './data';
import './Integration.css';

const Integration = () => {
  return (
    <div className="integration">
      <div className="banner">
        <div className="subtitle">
          <h1>Get more from opspad app with our integrations</h1>
        </div>
        <div className="banner_img">
          <img src={bannerImg} alt="bannerImg" />
        </div>
      </div>
      <div className="hM_content">
        <div className="inHM_content">
          {list.map((item, i) => {
            return (
              <div className={`${item.banner_flex_position ? 'container inHM_box flexDirection' : 'container inHM_box'}`} key={i}>
                <div className={`${item.banner_flex_position ? 'inHmL inHmL2' : 'inHmL'}`}>
                  <h3>{item.heading}</h3>
                  <p>{item.content}</p>
                </div>
                <div className="inHmR">
                  <img src={item.banner} alt="iMhy1" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="get_more">
        <div className="inGet_more">
          <div className="subtitle">
            <h4>Connect your favorite apps</h4>
            <p>Opspad is the hub of your productivity - integrating the tools you rely on to get things done.</p>
          </div>
          <div className="inGet_more_box">
          {getMore.map((item, i) => {
            return(
              <div className="box" key={i}>
                <div className="boxImg">
                  <img src={item.img} alt="" />
                </div>
                <h3>{item.heading}</h3>
                <p>
                  {item.content}
                </p>
                <a className={`${item.gmail ? 'learnMore learnMoreGmail' : 'learnMore'}`} href={item.slug}>Learn More</a>
              </div>
            )
          })}
          </div>
        </div>
      </div>
      <div className="getMoret">
        <div className="inGetMoret">
          <h4>Get more from your app with opspad integrations</h4>
          <a href="/">Sign up for free</a>
        </div>
      </div>
    </div>
  );
};

export default Integration;
