import React from 'react';
import style from './partner.module.css';
import hands from './assets/hands.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import  {PartnerData}  from './data/PartnerTechnologies'
import {PartnerCardData} from './data/PartnerCardData';

const Partner = () => {
  return (
    <>
   
       <div className={style.introContainer}>
             <div className={style.holdingHands}>
               <img src={hands} alt='holding hands'   />     
            </div>  
             <div className={style.introGroup}>
            <h1 className={style.firstHeadingStyling}>
              Partner with <span className={style.firstHeadingBlue}> Opspad </span>
            </h1>
             <p className={style.firstParagraph}>
                  Offer your expertise to opspad users all over the 
                  world and help us deliver the best product tailored
                  to meet the needs of our users.
            </p>
             <button className={style.partnerButton}>
               Become a partner
            </button>
            </div>
      </div> 
         <div className={style.partnersTechnology}>
            <div className={style.partnersTechnologyCard}>
                {PartnerData.map((item) => (
                  <>
                  <span className={style.cardDetails}>
                   <img src={item.img}  alt='technology' className={style.cardImage}/>
                  <h2 className={style.cardHeader}>{item.name}</h2>
                  </span>
                  <p className={style.cardText}>{item.detail}</p>
                  </>
                ))} 
            </div>
            <button className={style.partnerButton}>
               Become a partner
            </button>

           
           { <div className={style.partnerCard}>
                  <h3 className={style.partnerCardHeading}> What our partners say about us</h3>
                  <div className={style.partnerCardContainer}>
                    {PartnerCardData.map((item) => (
                      <div className={style.partnerCardContainerBody}>
                        <img className={style.containerCardImage} src={item.img} alt="patners" />
                        <div className={style.containerCardContent}>
                            <p className={style.cardItem1}>{item.name}</p>
                            <p className={style.cardItem2}>{item.position}</p>
                            <p className={style.cardItemThird}>{item.characteristics}</p>
                            <p className={style.cardItem4}>{item.text}</p>
                        </div>
                      </div>
                    
                    ))}
                  </div>
             </div>
}
            
          
        </div>
    </>
  )
}

export default Partner;