/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/button-has-type */
import React, { useState } from 'react';
import faq from './Faq.module.css';
import cloud from './assets/cloud.png';
import Ans from './Component/Ans';

function Faq () {
  const [answer, setAnswer] = useState("Opspad is a DevOps notepad you can use to manage and keep track of your servers.")
  const [btnName, setBtnName] = useState('btn1');

  const setAns = (name, description) => {
    setBtnName(name)
    setAnswer(description)
  }

  return (
    <div className={faq.faqContainer}>
      <div className={faq.faqHeader}>
        You've got questions? We've got answers!
      </div>

      <div className={faq.gridContainer}>
        {/* for mobile view */}
        <div className={faq.mobileview}>
          <div className={faq.grid2Header}>Ans.</div>
          <div className={faq.ansgrid}>
            <div>
              <img src={cloud} alt="cloud" style={{
                height: '20px', width: '20px'
              }} />
            </div>
            <div className={faq.ansScroll}>
              <Ans answer={answer} />
            </div>
          </div>
        </div>

        <div>
          <div className={faq.grid1Header}>FAQS</div>
          <div className={faq.buttonContainer}>
            <button
              className={btnName === "btn1" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn1", "Opspad is a DevOps notepad you can use to manage and keep track of your servers.")}
            >
              What is Opspad?
            </button>
            <button
              className={btnName === "btn2" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn2", "OpsPad is designed exclusively for DevOps engineers to use as they manage and keep track of servers.")}

            >
              Who is OpsPad created for?
            </button>
            <button
              className={btnName === "btn3" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn3", "No, there is no need to pre-install any software.")}

            >
              Do I need to install any software before establishing a remote session
            </button>
            <button
              className={btnName === "btn4" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn4", "Yes, it is absolutely secure. All transmissions take place through Industry Standard Security using SSL/256-bit AES encryption protocols")}

            >
              Is OpsPad secure?
            </button>
            <button
              className={btnName === "btn5" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn5", "There are no specific restrictions on the number of notes you can create, access or edit. However, you may be limited by the hardware restrictions of your device.")}

            >
              Are There Any Limitations On The Number Of Notes I Can Create, Access, or Edit With OpsPad?
            </button>
            <button
              className={btnName === "btn6" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn6", "We reserve the right, in our sole discretion, to make changes or modifications to these Terms of Use at any time and for any reason. Please check for any changes by checking the “Last updated” date of these Terms of Use to stay informed of updates.")}

            >
              What are the terms of use?
            </button>
            <button
              className={btnName === "btn7" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn7", "Yes. Your use of the OpsPad must be in these Terms. Regarding your use of the OpsPad Service; agree that you are responsible for your conduct and all conduct under your account.  Much as passwords to your different servers are secured and stored for you, you agree to safeguard your password and to keep your Basic Subscriber Information current. You also agree that you will not share your account credentials or give others access. In addition, you understand that all Content created, transmitted, stored, or displayed in your account, is your sole responsibility.")}

            >
              Are There Rules About What I Can Do on the OpsPad Service?
            </button>
            <button
              className={btnName === "btn8" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn8", "OpsPad allows you to input, upload, or store in the OpsPad Service any text and other data you choose to store concerning servers and logs. We also collect and receive the following types of information; Basic subscriber information, device information, location information, and data usage.")}

            >
              What Information Does OpsPad  Collect?
            </button>
            <button
              className={btnName === "btn9" ? faq.btnColored : faq.btn}
              onClick={() => setAns("btn9", "We have specific rules for how and when we use the information we collect and receive. We are committed to protecting the privacy of your information. We use the information we collect and receive to provide, maintain, and improve the Opspad Service, to provide troubleshooting and customer support, to protect the OpsPad Service for all our users, and to contact you")}
            >
              How Does OpsPad Use My Information?
            </button>
          </div>

        </div>
        <div className={faq.desktopView}>
          <div className={faq.grid2Header}>Ans.</div>
          <div className={faq.ansgrid}>
            <div>
              <img src={cloud} alt="cloud" style={{
                height: '20px', width: '20px'
              }} />
            </div>
            <div>
              <Ans answer={answer} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
