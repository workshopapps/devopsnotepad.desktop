// IMPORTING THE CSS FOR THE PAGE
import FeatureCSS from './Feature.module.css';

// IMPORTING THE IMAGES NEEDED FOR THE PAGE
import noteimg from './Images/noteimage.png';
import serversImg from './Images/serverImg.png';
import passwordimg from './Images/passwordImg.png';
import authenimg from './Images/authenticationImg.png';
import authenimgMobile from './Images/authenticationImgMobile.png';
import bell from './Images/bell.png';
import profileKey from './Images/profilekey.png';
import abOpspadimg from './Images/aboutopspadimg.png';

// ======================= RENAMING THE STYLING FOR BETTER USAGE AND READABILITY ===========================
const featureWrapper = FeatureCSS.featureWrapper;
const feature = FeatureCSS.feature;

// MINI LADING PAGE SECTION
const opspadfeaturesminilandingpage = FeatureCSS.opspadfeaturesminilandingpage;
const minilandpageheading = FeatureCSS.minilandpageheading;
const minilandpageparagraph = FeatureCSS.minilandpageparagraph;
const minilandpagebtn = FeatureCSS.minilandpagebtn;

// SERVER SECTION
const servers = FeatureCSS.servers;
const serverImgWrapper = FeatureCSS.serverImgWrapper;
const serverImg = FeatureCSS.serverImg;
const serversText = FeatureCSS.serversText;
const serversTextHeading = FeatureCSS.serversTextHeading;
const serversTextParagraph = FeatureCSS.serversTextParagraph;

// NOTE SECTION
const notesSection = FeatureCSS.notesSection;
const noteImgWrapper = FeatureCSS.noteImgWrapper;
const noteImg = FeatureCSS.noteImg;
const notesText = FeatureCSS.notesText;
const notesTextHeading = FeatureCSS.notesTextHeading;
const notesTextParagraph = FeatureCSS.notesTextparagraph;

// PASSWORD SECTION
const password = FeatureCSS.password;
const passwordImgWrapper = FeatureCSS.passwordImgWrapper;
const passwordImg = FeatureCSS.passwordImg;
const passwordText = FeatureCSS.passwordText;
const passwordTextHeading = FeatureCSS.passwordTextHeading;
const passwordTextParagraph = FeatureCSS.passwordTextParagraph;

// AUTNEHTICATION SECTION
const autentication = FeatureCSS.autentication;
const autenticationText = FeatureCSS.autenticationText;
const autenticationTextHeading = FeatureCSS.autenticationTextHeading;
const autenticationTextParagraoh = FeatureCSS.autenticationTextParagraoh;
const authenImgWrapper = FeatureCSS.authenImgWrapper;
const authenImg = FeatureCSS.authenImg;
const authenImgMobile = FeatureCSS.authenImgMobile;

// FLEXIBILITY AND SECURITY SCETION
const notificationandsigninoption = FeatureCSS.notificationandsigninoption;
const notificationandsigninoptionFlex =
  FeatureCSS.notificationandsigninoptionFlex;
const notifications = FeatureCSS.notifications;
const Bell = FeatureCSS.Bell;
const notificationsHeading = FeatureCSS.notificationsHeading;
const notificationsParagraph = FeatureCSS.notificationsParagraph;
const profile = FeatureCSS.profile;
const profileHeading = FeatureCSS.profileHeading;
const profileParagraph = FeatureCSS.profileParagraph;
const notificationProfileText = FeatureCSS.notificationProfileText;
const profileImg = FeatureCSS.profileImg;

// ABOUT OPSPAD SECTION
const aboutOpspad = FeatureCSS.aboutOpspad;
const aboutOpspadContent = FeatureCSS.aboutOpspadContent;
const aboutOpspadContentHeading = FeatureCSS.aboutOpspadContentHeading;
const aboutOpspadContentParagraph = FeatureCSS.aboutOpspadContentParagraph;
const aboutOpspadContentButton = FeatureCSS.aboutOpspadContentButton;
const aboutOpspadImgWrapper = FeatureCSS.aboutOpspadImgWrapper;
const abOpsImg = FeatureCSS.abOpsImg;

// ====================================== CREATING THE FEATURE PAGE ========================================

const Feature = () => {
  return (
    <div className={featureWrapper}>
      <div className={feature}>
        <div className={opspadfeaturesminilandingpage}>
          <h1 className={minilandpageheading}>
            Ops<span>pad</span> features
          </h1>
          <p className={minilandpageparagraph}>
            {' '}
            We are changing the whole DevOps system
          </p>
          <button className={minilandpagebtn}>Sign up for free</button>
        </div>

        {/* =================SERVERS SECTION ================*/}
        <div className={servers}>
          <div className={serverImgWrapper}>
            <img src={serversImg} className={serverImg} alt='' />
          </div>
          <div className={serversText}>
            <h2 className={serversTextHeading}>Servers</h2>
            <p className={serversTextParagraph}>
              Tracking down server issues just got easier! OpsPad filters log to
              give you the best and most relevant information you need per time
              concerning your server(s).
            </p>
          </div>
        </div>

        {/* ====================== NOTES SECTION ==================*/}
        <div className={notesSection}>
          <div className={notesText}>
            <h2 className={notesTextHeading}>Notes</h2>
            <p className={notesTextParagraph}>
              You can make notes of specific events that occur on each server,
              so you don't miss anything important while troubleshooting issues
              related to those servers.
            </p>
          </div>
          <div className={noteImgWrapper}>
            <img src={noteimg} className={noteImg} alt='' />
          </div>
        </div>

        {/*========================= PASSWORD SECTION ==================*/}
        <div className={password}>
          <div className={passwordImgWrapper}>
            <img src={passwordimg} className={passwordImg} alt='' />
          </div>
          <div className={passwordText}>
            <h2 className={passwordTextHeading}>Passwords</h2>
            <p className={passwordTextParagraph}>
              Manage password of Server Tools End user can put/manage (update)
              server tools & access credentials for each server tools (user id,
              password).
            </p>
          </div>
        </div>

        {/*============================= AUTENTICATION SECTION ======================*/}
        <div className={autentication}>
          <div className={autenticationText}>
            <h2 className={autenticationTextHeading}>Authentication</h2>
            <p className={autenticationTextParagraoh}>
              End User is required to authenticate before viewing server tools
              information and is required to Authenticate after a specified an
              elapsed time period.
            </p>
          </div>
          <div className={authenImgWrapper}>
            <img src={authenimg} className={authenImg} alt='' />
            <img src={authenimgMobile} className={authenImgMobile} alt='' />
          </div>
        </div>

        {/* FLEXBILITY AND SECURITY SECTION */}
        <div className={notificationandsigninoption}>
          <div className={notificationandsigninoptionFlex}>
            <div className={notifications}>
              <img src={bell} className={Bell} alt='' />
              <h4 className={notificationsHeading}>Notifications</h4>
              <p className={notificationsParagraph}>
                Receive notifications indicating the status of your server and
                server tools.
              </p>
            </div>
            <div className={profile}>
              <img src={profileKey} className={profileImg} alt='' />
              <h4 className={profileHeading}>Single sign in Options (SSO)</h4>
              <p className={profileParagraph}>
                OpsPad allows you log in with a single ID across all your
                devices.
              </p>
            </div>
          </div>
          <p className={notificationProfileText}>
            Designed for flexibility and security...
          </p>
        </div>
      </div>
      {/* ABOUT OPSPAD SECTION  */}
      <div className={aboutOpspad}>
        <div className={aboutOpspadContent}>
          <h4 className={aboutOpspadContentHeading}>About Opspad</h4>
          <hr />
          <p className={aboutOpspadContentParagraph}>
            We are building the DevOp notepad exclusively for the devops
            engineers A tool for managing and keeping track of servers,
            remembering passwords for various tools used to access these
            servers.share information, and work together.
          </p>
          <button className={aboutOpspadContentButton}>Sign up for free</button>
        </div>
        <div className={aboutOpspadImgWrapper}>
          <img src={abOpspadimg} className={abOpsImg} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Feature;
