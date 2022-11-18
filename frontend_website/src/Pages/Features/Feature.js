// IMPORTING THE CSS FOR THE PAGE
import FeatureCSS from './Feature.module.css'

// IMPORTING THE IMAGES NEEDED FOR THE PAGE
import noteimg from './Images/noteimage.png'
import serversImg from './Images/serverImg.png'
import passwordImg from './Images/passwordImg.png'
import authenimg from './Images/authenticationImg.png'
import abOpsImg from './Images/aboutopspad.png'


// ======================= RENAMING THE STYLING FOR BETTER USAGE AND READABILITY ===========================
const featureWrapper = FeatureCSS.featureWrapper
const feature = FeatureCSS.feature

// MINI LADING PAGE SECTION
const opspadfeaturesminilandingpage = FeatureCSS.opspadfeaturesminilandingpage
const minilandpageheading = FeatureCSS.minilandpageheading
const minilandpageparagraph = FeatureCSS.minilandpageparagraph
const minilandpagebtn = FeatureCSS.minilandpagebtn

// NOTE SECTION
const notesSection = FeatureCSS.notesSection
const noteImg = FeatureCSS.noteImg
const notesText = FeatureCSS.notesText
const notesTextHeading = FeatureCSS.notesTextHeading
const notesTextParagraph = FeatureCSS.notesTextparagraph

// SERVER SECTION
const servers = FeatureCSS.servers
const serverImg = FeatureCSS.serverImg
const serversText = FeatureCSS.serversText
const serversTextHeading = FeatureCSS.serversTextHeading
const serversTextParagraph = FeatureCSS.serversTextParagraph

// PASSWORD SECTION
const password = FeatureCSS.password
const passwordText = FeatureCSS.passwordText
const passwordTextHeading = FeatureCSS.passwordTextHeading
const passwordTextParagraph = FeatureCSS.passwordTextParagraph

// AUTNEHTICATION SECTION
const autentication = FeatureCSS.autentication
const autenticationText = FeatureCSS.autenticationText
const autenticationTextHeading = FeatureCSS.autenticationTextHeading
const autenticationTextParagraoh = FeatureCSS.autenticationTextParagraoh
const authenImg = FeatureCSS.authenImg

// FLEXIBILITY AND SECURITY SCETION
const flexibilitysecurity = FeatureCSS.flexibilitysecurity
const notifications = FeatureCSS.notifications



// ====================================== CREATING THE FEATURE PAGE ========================================

const Feature = () =>{
    return(
        <div className={featureWrapper}>
            <div className={feature}>
                <div className={opspadfeaturesminilandingpage}>
                    <h1 className={minilandpageheading}>Ops<span>pad</span> features</h1>
                    <p className={minilandpageparagraph}> We are changing the whole DevOps system</p>
                    <button className={minilandpagebtn}>Sign up for free</button>
                </div>

                {/* =================SERVERS SECTION ================*/}
                <div className={servers}>
                    <div>
                        <img src={serversImg} className={serverImg} alt="" />
                    </div>
                    <div className={serversText}>
                        <h2 className={serversTextHeading}>Servers</h2>
                        <p className={serversTextParagraph}>
                            Tracking down server issues just 
                            got easier! OpsPad filters log to give 
                            you the best and most relevant 
                            information you need per time 
                            concerning your server(s).
                        </p>
                    </div>
                </div>
                
                 {/* ====================== NOTES SECTION ==================*/}
                 <div className={notesSection}>
                    <div className={notesText}>
                        <h2 className={notesTextHeading}>Notes</h2>
                        <p className={notesTextParagraph}>
                           You can make notes of specific events 
                           that occur on each server, so you 
                           don't miss anything important while 
                           troubleshooting issues related to 
                           those servers.
                        </p>
                    </div>
                    <div>
                        <img src={noteimg} className={noteImg} alt="" />
                    </div>
                </div>

                {/*========================= PASSWORD SECTION ==================*/}
                <div className={password}>
                    <div>
                        <img src={passwordImg} alt="" />
                    </div>
                    <div className={passwordText}>
                        <h2 className={passwordTextHeading}>Passwords</h2>
                        <p className={passwordTextParagraph}>
                            Manage password of Server Tools End 
                            user can put/manage (update) server
                            tools & access credentials for each 
                            server tools (user id, password).
                        </p>
                    </div>
                </div>

                {/*============================= AUTENTICATION SECTION ======================*/}
                <div className={autentication}>
                    <div className={autenticationText}>
                        <h2 className={autenticationTextHeading}>Authentication</h2>
                        <p className={autenticationTextParagraoh}>
                            End User is required to authenticate 
                            before viewing server tools information 
                            and is required to Authenticate after a 
                            specified an elapsed time period.
                        </p>
                    </div>
                    <div>
                        <img src={authenimg} className={authenImg} alt="" />
                    </div>
                </div>

                {/* FLEXBILITY AND SECURITY SECTION */}
                <div className={flexibilitysecurity}>
                    <div className={notifications}>
                        <img src="" alt="" />
                        <h4>Notifications</h4>
                        <p>
                            Logs have already been filtered, to get 
                            info that can help know what is 
                            happening with the server.
                        </p>
                    </div>
                </div>  

             </div>
        </div>
    )
}

export default Feature