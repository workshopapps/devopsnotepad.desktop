import React from 'react';
import { Link } from 'react-router-dom';
import s from './Csr.module.css';

const Csr = () => {
  return (
    <div className={s.csrWrapper}>
      <div className={s.csrMain}>
        <div className={s.csrMainSection1}>
          <div className={s.csrOverlay}>
            <p className={s.csrMainSection1Text}>
              OUR CORPORATE SOCIAL RESPONSIBILITY{' '}
            </p>
          </div>
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
        <p>
          As a team, we recognize that we must integrate our business values and
          operation to meet the expectation of our user in relation to the
          community and the society at large.
        </p>
        <div className={s.rule}></div>
        <Link to='/signup'>
          <button className={s.csrSectionBtn}>Sign Up</button>
        </Link>
      </div>
    </div>
  );
};
export default Csr;
