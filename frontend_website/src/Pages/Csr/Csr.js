import React from 'react';
import './Csr.css';

const csr = () => {
  return (
    <div className="csrWrapper">
      <nav className="csrNavbar">
        <h2 className="logoText">Ops<span id='logoText'>pad</span></h2>
        <img src="servers (3) 4.png" alt="logo" className="logo" />
        <ul>
          <li>About Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>FAQs</li>
        </ul>
        <button className="csrBtn">Download App</button>
      </nav>
      <div className="csrMain">
        <div className="csrMainSection1">
          <p className="csrMainSection1-text">
            OUR CORPORATE SOCIAL RESPONSIBILITY{' '}
          </p>
        </div>
      </div>
      <div className="csrMainSection2">
        <img src="image 9 (2).png" alt="img" className="sectionTwoImg" />
        <div>
          <h2 className="csrSectionsTitles">Seamless Documentation Process</h2>
          <p className="csrSectionDetails">
            OpsPad is commited to being a responsible solution - we recognise
            the impact of our product and seek to manage them appropriately.
          </p>
        </div>
      </div>
      <div className="csrMainSection3" id="csrMainSection3">
        <img
          src="image 8 (1).png"
          alt="img"
          className="sectionThreeImg"
          id="sectionThreeImg"
        />
        <div>
          <h2 className="csrSectionsTitles">Policy Implementation</h2>
          <p className="csrSectionDetails">
            We take all feedback we receive from our users seriously, and ensure
            that we fulfill the requirements while taking the necessary steps to
            realise our corporate responsibilities.
          </p>
        </div>
      </div>
      <div className="csrMainSection4">
        <img src="image 10.png" alt="img" className="sectionFourImg" />
        <div>
          <h2 className="csrSectionsTitles">Support To The Devops Community</h2>
          <p className="csrSectionDetails">
            We aim to demonstrate commitment to the DevOps community through
            actions and within our corporate policies.
          </p>
        </div>
      </div>
      <div className="csrMainSection5">
        <div className='rule'></div>
        <p>
          As a team, we recognize that we must integrate our business values and
          operation to meet the expectation of our user in relation to the
          community and the society at large.
        </p>
        <button className='csrSectionBtn'>SIGN UP</button>
      </div>
    </div>
  );
};
export default csr;
