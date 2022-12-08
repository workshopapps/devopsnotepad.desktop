import React from 'react';
import style from './partner.module.css';
import hands from './assets/hands.png';
<<<<<<< HEAD
import jane from './assets/jane.png'
import micheal from './assets/micheal.png'
import zoey from './assets/zoey.png'
import leftArrow from './assets/leftArrow.png'
import rightArrow from './assets/rightArrow.png'
import { useState } from 'react';

=======
import jane from './assets/jane.png';
import micheal from './assets/micheal.png';
import zoey from './assets/zoey.png';
import leftArrow from './assets/leftArrow.png';
import rightArrow from './assets/rightArrow.png';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';
>>>>>>> 044ef40dd9da1804b4ded72a9277f5525016c9d9

const Partner = () => {

  const [openText, setOpenText] = useState(true)
  const [openTechnologyText, setOpenTechnologyText] = useState(false)
  const [openChannelText, setOpenChannelText] = useState(false)

  return (
<<<<<<< HEAD
    <div className={style.partnerPageContainer}>
      <div className={style.PartnerMinilanding}>
        <h1>Partner With Opspad</h1>
        <p>
          We are interested in working with   companies that 
          share our vision and are ready to offer their 
          expertise to the mutual growth of our communities. 
        </p>
        <a href="/contact-us">
          <button>Become a Partner</button>
        </a>
      </div>

      <div className={style.servicePartner}>
        <div className={style.servicePartnerContent}>
            <h3
              onClick={
                function(){
                  setOpenText(true)
                  setOpenTechnologyText(false)
                  setOpenChannelText(false)
                }
              }
            >Services Partner</h3>
            {
              openText &&
               <p>
               As our service partners, you would be willing 
               and able to provide services such as accounting, 
               marketing, product development, maintenance or 
               training that are essential to the growth of our company.
             </p>
            }
            <h5
              onClick={
                function(){
                  setOpenText(false)
                  setOpenTechnologyText(true)
                  setOpenChannelText(false)
                }
              }
            >Technology Partner</h5>
            {
              openTechnologyText && 
              <p>
              As  our technology partner, you would be able 
              to integrate your products in ours and ours in 
              yours. This partnership involves exchnaging of 
              valuable data between both parties to offer 
              more value to our users.
            </p>
            }
            <h5
              onClick={
                  function(){
                    setOpenText(false)
                    setOpenTechnologyText(false)
                    setOpenChannelText(true)
                  }
              }
            >Channel Partner</h5>
            {
               openChannelText &&
               <p>
                As our channel partner, your duty is to distribute
                our products either by employing full marketing 
                techniques or by means of referrals. Are you interested 
                in supporting team sandpaper through cause-related marketing?
             </p>
            }
             <a href="/contact-us">
              <button>Become a Partner</button>
            </a>
=======
    <>
      <Navigation />
      <div className={style.partnerPageContainer}>
        <div className={style.PartnerMinilanding}>
          <h1>Partner With Opspad</h1>
          <p>
            We are interested in working with companies that share our vision
            and are ready to offer their expertise to the mutual growth of our
            communities.
          </p>
          <button>Become a Partner</button>
        </div>

        <div className={style.servicePartner}>
          <div className={style.servicePartnerContent}>
            <h3>Services Partner</h3>
            <p>
              As our service partners, you would be willing and able to provide
              services such as accounting, marketing, product development,
              maintenance or training that are essential to the growth of our
              company.
            </p>
            <h5>Technology Partner</h5>
            <h5>Channel Partner</h5>
            <button>Become a partner</button>
          </div>
          <div className={style.handImageWrapper}>
            <img src={hands} className={style.handImage} alt='Imageof hands' />
          </div>
>>>>>>> 044ef40dd9da1804b4ded72a9277f5525016c9d9
        </div>

        <div className={style.partners}>
          <h1 className={style.partnersHeading}>
            What our partners say about us
          </h1>
          <div className={style.partnersCarousel}>
            <div className={style.carouselContents}>
              <img src={jane} alt='First carouselImage' />
              <h3>Jane Doe</h3>
              <h6>Lead developer, Zuri inc.</h6>
              <h4>They make working fun</h4>
              <p>
                I have had the opportunity of working with several companies
                before now, but Opspad works differently.
              </p>
            </div>
            <div
              className={style.carouselContents + ' ' + style.carouselContents2}
            >
              <img src={micheal} alt='First carouselImage' />
              <h3>Matthew Lane</h3>
              <h6>Personnel manager, Datapoint</h6>
              <h4>Great Teamwork</h4>
              <p>
                Working inteams is not always easy to cope with, but the Opspad
                team is one i am willing to owork with over and over again.
              </p>
            </div>
            <div
              className={style.carouselContents + ' ' + style.carouselContents2}
            >
              <img src={zoey} alt='First carouselImage' />
              <h3>Zoey Cruz</h3>
              <h6>Marketing lead, Soreline ltd.</h6>
              <h4>Great product, I love it.</h4>
              <p>
                One of the rules of excellent marketing is that to sell a
                product, you have to love it enough to want to use it. I can’t
                say enough how amazing this app is.
              </p>
            </div>
          </div>
          <div className={style.arrows}>
            <img src={leftArrow} alt='' />
            <img src={rightArrow} alt='' />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Partner;
