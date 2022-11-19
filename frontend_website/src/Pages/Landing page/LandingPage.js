import {
  iphone13,
  iphone14,
  iphonegrouped,
  iphonep2,
  iphoneslope,
  google,
  appstore,
  frank,
  sarah,
  titi,
  prosper,
  tim,
  chinonso,
} from './Images';
import style from '../Landing page/landingpage.module.css';

const LandingPage = () => {
  return (
    <div>
      <div className={style.landPage_flex}>
        <div className={style.landPage_col1}>
          <h1 className={style.landPage_h1}>
            The <span className={style.landPage_span}>Ultimate Notedpad </span>
            for DevOps Engineers
          </h1>
          <p className={style.landPage_p}>
            Monitor, document and modify aspects of servers you manage - on the
            go!
          </p>
          <div className={style.landPage_btn}>
            <button>Get Started for Free</button>
            <button>How it works</button>
          </div>
        </div>
        <div className={style.landPage_imgFlex}>
          <img src={iphone13} alt="iPhone 13" />
          <img src={iphone14} alt="" />
        </div>
      </div>
      <div className={`${style.landPage_flex} ${style.landPage_section2}`}>
        <img src={iphonep2} alt="" />
        <div className={style.landPage_sectionItems}>
          <h2>Easily add servers and monitor them on and from your mobile</h2>
          <p>
            Now you can move with your servers in your pocket. Monitor
            activities, get live updates on servers that you manage. Yes,
            directly from on your mobile! Your days of worries are over!
          </p>
        </div>
      </div>
      <div className={`${style.landPage_flex} ${style.landPage_section3}`}>
        <div className={style.landPage_sectionItems1}>
          <h2>Notes. Passwords. Notifications.</h2>
          <p>
            It really is just that easy to use. Create notes for specific
            servers. Format the text to suit you. Your passwords for the servers
            go here quicker for different platform
          </p>
        </div>
        <div className={style.landPage_groupedImg}>
          <img src={iphonegrouped} alt="" />
        </div>
      </div>
      <div className={`${style.landPage_flex} ${style.landPage_section4}`}>
        <div className={style.landPage_section4col}>
          <h2>Simplify your workflow today!</h2>
          <div className={style.landPage_section4Items}>
            <img src={google} alt="" />
            <img src={appstore} alt="" />
          </div>
        </div>
        <div className={style.landPage_section4img}>
          <img src={iphoneslope} alt="" />
          <span></span>
        </div>
      </div>
      <div className={style.landPage_section5}>
        <div>
          <h2>We’re already getting lots of love!</h2>
        </div>
        <div className={style.landPage_section5grid}>
          <div className={style.landPage_section5_div1}>
            <img src={sarah} alt="" />
            <p>
              Using this app has been a life saver!<br/>
              <span>-</span>
            </p>
            <h4>Sarah Walter</h4>
          </div>
          <div className={style.landPage_section5_div2}>
            <img src={frank} alt="" />
            <p>
              I’ve been able to move around more, knowing I can track my servers
              on the go!
              <br />-
            </p>
            <h4>Frank Etim</h4>
          </div>
          <div className={style.landPage_section5_div3}>
            <img src={titi} alt="" />
            <p>
              I’ve been able to move around more, knowing I can track my servers
              on the go!
              <br />-
            </p>
            <h4>Titi Adebayo</h4>
          </div>
          <div className={style.landPage_section5_div4}>
            <img src={prosper} alt="" />
            <p>
              I didn’t know how much I was overstressing until my OpsPad
              encounter!
              <br />-
            </p>
            <h4>Prosper Code</h4>
          </div>
          <div className={style.landPage_section5_div5}>
            <img src={tim} alt="" />
            <p>
              Love is what I found here!
              <br />-
            </p>
            <h4>Tim Delvin</h4>
          </div>
          <div className={style.landPage_section5_div6}>
            <img src={chinonso} alt="" />
            <p>
              Phenomenal is the word! Absolutely!
              <br />-
            </p>
            <h4>Chinonso Light</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
