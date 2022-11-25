import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import s from './Csr.module.css';

const Csr = () => {
  const [isShown, setIsShown] = useState(false);

  //Handle navbar
  const handleNavbar = (e) => {
    e.preventDefault();
    setIsShown((prev) => !prev);
  };
  const style = {
    display: 'flex',
    alignItems: 'left',
    flexDirection: 'column',
    justifyContent: 'left',
    backgroundColor: '#212000',
    color: '#ffffff',
    position: 'sticky',
    marginRight: '-40px',
    borderRadius: '10px',
    fontSize: '12px',
    marginTop: '310px',
    padding: '5px 30px',
    paddingRight: '150px',
  };
  return (
    <div className={s.csrWrapper}>
      <nav className={s.csrNavbar}>
        <Link to='/' className={s.logoAndTextFlex}>
          <h2 className={s.logoText}>
            Ops<span id={s.logoText}>pad</span>
          </h2>
          <img src='servers (3) 4.png' alt='logo' className={s.logo} />
        </Link>
        <ul>
          <Link to='/about-us'>
            <li>About Us</li>
          </Link>
          <Link to='/blog'>
            <li>Blog</li>
          </Link>
          <Link to='/contact-us'>
            <li>Contact</li>
          </Link>
          <Link to='/faq'>
            <li>FAQs</li>
          </Link>
        </ul>
        <button className={s.csrBtn}>Download App</button>
        <img
          src='Vector (13).png'
          alt='menu'
          className={s.csrMenuImg}
          onClick={handleNavbar}
        />
        <div
          className={s.navbar}
          style={isShown ? style : {}}
          onMouseLeave={handleNavbar}
        >
          <li>ABout Us</li>
          <li>Blog</li>
          <li>Contact</li>
          <li>FAQs</li>
        </div>
      </nav>
      <div className={s.csrMain}>
        <div className={s.csrMainSection1}>
          <p className={s.csrMainSection1Text}>
            OUR CORPORATE SOCIAL RESPONSIBILITY{' '}
          </p>
        </div>
      </div>
      <div className={s.csrMainSection2}>
        <img src='image 9 (2).png' alt='img' className={s.sectionTwoImg} />
        <div className={s.csrMainSectionsDivs}>
          <h2 className={s.csrMainSectionsTitles}>
            Seamless Documentation Process
          </h2>
          <p className={s.csrMainSectionDetails}>
            OpsPad is commited to being a responsible solution - we recognise
            the impact of our product and seek to manage them appropriately.
          </p>
        </div>
      </div>
      <div className={s.csrMainSection3} id={s.csrMainSection3}>
        <img
          src='image 8 (1).png'
          alt='img'
          className={s.sectionThreeImg}
          id={s.sectionThreeImg}
        />
        <div className={s.csrMainSectionsDivs}>
          <h2 className={s.csrMainSectionsTitles} id={s.csrMainSectionsTitle}>
            Policy Implementation
          </h2>
          <p className={s.csrMainSectionDetails}>
            We take all feedback we receive from our users seriously, and ensure
            that we fulfill the requirements while taking the necessary steps to
            realise our corporate responsibilities.
          </p>
        </div>
      </div>
      <div className={s.csrMainSection4}>
        <img src='image 10.png' alt='img' className={s.sectionFourImg} />
        <div className={s.csrMainSectionsDivs}>
          <h2 className={s.csrMainSectionsTitles}>
            Support To The Devops Community
          </h2>
          <p className={s.csrMainSectionDetails}>
            We aim to demonstrate commitment to the DevOps community through
            actions and within our corporate policies.
          </p>
        </div>
      </div>
      <div className={s.csrMainSection5}>
        <div className={s.rule}></div>
        <p>
          As a team, we recognize that we must integrate our business values and
          operation to meet the expectation of our user in relation to the
          community and the society at large.
        </p>
        <button className={s.csrSectionBtn}>SIGN UP</button>
      </div>
    </div>
  );
};
export default Csr;
