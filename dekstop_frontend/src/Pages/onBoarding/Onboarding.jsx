
import onboarding from './Onboarding.module.css';
import frame1 from "./images/frame1.png"
import frame2 from "./images/frame2.png"



function Onboarding(){
 return(
    <div className={onboarding.onboardingSection}>
        <div className={onboarding.onboardingSectionCard1}>
        <div className={onboarding.boardingImages}>
        <img src={frame1} alt="" className={onboarding.boardingImage}/>
        </div>
            <h1 className={onboarding.boardingTitle}>
                take notes, <br/>
                Stay updated.
                </h1>
                <p className={onboarding.boardingText}>
                Enjoy a great note taking experience while ensuring that servers monitored are up to date.
                    </p>    

        </div>
        <div className={onboarding.onboardingSectionCard1}>
        <div className={onboarding.boardingImages}>
        <img src={frame2} alt="" className={onboarding.boardingImage} />
        </div>
            <h1 className={onboarding.boardingTitle}>
               Convenient server <br/> monitoring
                </h1>
                <p className={onboarding.boardingText}>
                With Opspad, monitoring of servers is now easier. You are one click away from enjoying this and many more services. 
                    </p>    

        </div>
        </div>
 )
}

export default Onboarding