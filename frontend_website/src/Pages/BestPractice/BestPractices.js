import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';
import img4 from './Images/img4.png';
import img5 from './Images/img5.png';
import img6 from './Images/img6.png';
import img7 from './Images/img7.png';
import img8 from './Images/img8.png';
import img9 from './Images/img9.png';
import img10 from './Images/img10.png';

import { BiWifi0 } from 'react-icons/bi';
import { BiChevronDown } from 'react-icons/bi';
import { useState } from 'react';

import BestPracticeCSS from './BestPractices.module.css';

const firstSectionWrapper = BestPracticeCSS.firstSectionWrapper;
const subLinksWrapper = BestPracticeCSS.subLinksWrapper;
const subLinks = BestPracticeCSS.subLinks;
const desSubLinks = BestPracticeCSS.desSubLinks;
const openSublinkBtn = BestPracticeCSS.openSublinkBtn;
const bestPracticediv = BestPracticeCSS.bestPracticediv;

// NEW UPDATE SECTION CLASSES STARTS HERE
const newUpdatesSction = BestPracticeCSS.newUpdatesSction;
const updateImg = BestPracticeCSS.updateImg;
const newUpdatesSctionContents = BestPracticeCSS.newUpdatesSctionContents;
const timeLineWrapper = BestPracticeCSS.timeLineWrapper;
const timeLine = BestPracticeCSS.timeLine;
const timeLinedot = BestPracticeCSS.timeLinedot;
const newUpdateParagraph = BestPracticeCSS.newUpdateParagraph;

// PORPULAR POST SECTION CLASSES STARTS HERE
const porpularPostSection = BestPracticeCSS.porpularPostSection;
const porpularNav = BestPracticeCSS.porpularNav;
const porpularNavPostText = BestPracticeCSS.porpularNavPostText;
const porpularNavseeall = BestPracticeCSS.porpularNavseeall;
const posts = BestPracticeCSS.posts;
const post = BestPracticeCSS.post;
const postTimeLine = BestPracticeCSS.postTimeLine;
const postOnedot = BestPracticeCSS.postOnedot;

// MANAGING AND MONITORING SECTION CLASSES STARTS HERE
const managingWrapper = BestPracticeCSS.managingWrapper;
const managing = BestPracticeCSS.managing;

// RECENT POST SECTION CLASSES STARTS HERE
const recentPost = BestPracticeCSS.recentPost;
const recentPostGrid = BestPracticeCSS.recentPostGrid;
const loadMoreBtn = BestPracticeCSS.loadMoreBtn;

// RECENT POST SECTION CLASSES STARTS HERE
const devopsEngineer = BestPracticeCSS.devopsEngineer;

const BestPractice = () => {
  const [openSublinks, setOpenSubinks] = useState(false);

  return (
    <div>
      <div className={firstSectionWrapper}>
        <nav className={subLinksWrapper}>
          <h4>Best Practices</h4>
          <div className={desSubLinks}>
            <p>OpsPad</p>
            <p>DevOps</p>
            <p>Log Management</p>
            <p>Customer Experience</p>
            <p>Observability and Monitoring</p>
            <p>Consolidating Tools</p>
          </div>
          {openSublinks && (
            <div className={subLinks}>
              <p>OpsPad</p>
              <p>DevOps</p>
              <p>Log Management</p>
              <p>Customer Experience</p>
              <p>Observability and Monitoring</p>
              <p>Consolidating Tools</p>
            </div>
          )}
          <button
            className={openSublinkBtn}
            onClick={() => {
              if (!openSublinks) {
                setOpenSubinks(true);
              } else {
                setOpenSubinks(false);
              }
            }}
          >
            <BiChevronDown className={openSublinkBtn} />
          </button>
        </nav>

        <div className={bestPracticediv}>
          <h1>Best practices for DevOps engineers</h1>
          <p>
            Implementable habits every Devops engineer should develop at work
          </p>
        </div>

        <div className={newUpdatesSction}>
          <img src={img1} className={updateImg} alt='Mini Landing page'></img>
          <div className={newUpdatesSctionContents}>
            <div className={timeLineWrapper}>
              <p className={timeLine}>OPSPAD</p>
              <BiWifi0 className={timeLinedot} />
              <p className={timeLine}>3 MINUTE READ</p>
            </div>
            <h1>Setting up alert systems for unique servers.</h1>
            <p className={newUpdateParagraph}>
              Find out what's up with this new update. Opspad tools and features
              that would bring out the best in you.
            </p>
            <h5>
              BY <span>NICHOLAS OTIJI</span>
            </h5>
          </div>
        </div>

        <div className={porpularPostSection}>
          <nav className={porpularNav}>
            <p className={porpularNavPostText}>Porpular Post</p>
            <p className={porpularNavseeall}>See all</p>
          </nav>
          <div className={posts}>
            <div className={post}>
              <img src={img2} alt='' />
              <div className={postTimeLine}>
                <p>CUSTOMER EXPERIENCE</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>
                Passionate about UX? Pay attention to web performance metrics
              </h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img3} alt='' />
              <div className={postTimeLine}>
                <p>OPSPAD</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>Navigating user dashboards and setting up servers</h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img4} alt='' />
              <div className={postTimeLine}>
                <p>LOG MANAGEMENT</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>
                See everything in your tech stack with these logging best
                practices
              </h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
          </div>
        </div>

        <div className={managingWrapper}>
          <div className={managing}>
            <h2>Managing and monitoring servers can be less brain-numbing</h2>
            <p>
              with all your passwords in one location, server events
              notifications, and To-Do notes!
            </p>
            <button>Use OpsPad for FREE</button>
          </div>
        </div>

        <div className={recentPost}>
          <div className={porpularNav}>
            <h2 className={porpularNavPostText}>Recent Post</h2>
            <p className={porpularNavseeall}>See ALl</p>
          </div>
          <div className={recentPostGrid}>
            <div className={post}>
              <img src={img5} alt='' />
              <div className={postTimeLine}>
                <p>CONSOLIDATING TOOLS</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>Best SRE practices for conquering instant releases</h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img6} alt='' />
              <div className={postTimeLine}>
                <p>DEVOPS</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>11 API governance practices</h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img7} alt='' />
              <div className={postTimeLine}>
                <p>OBSERVABILITY AND MONITORING</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>Alert! Best practices for alert quality</h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img8} alt='' />
              <div className={postTimeLine}>
                <p>LOG MANAGEMENT</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>
                See everything in your tech stack with these logging best
                practices
              </h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img9} alt='' />
              <div className={postTimeLine}>
                <p>CUSTOMER EXPERIENCE</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>
                Passionate about UX? Pay attention to web performance metrics
              </h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
            <div className={post}>
              <img src={img10} alt='' />
              <div className={postTimeLine}>
                <p>OPSPAD</p>
                <BiWifi0 className={postOnedot} />
                <p>8 MINUTE READ</p>
              </div>
              <h1>Navigating user dashboards and setting up servers</h1>
              <h4>
                Learn how Opspad's features makes it easier for you to take
                notes and track progress of your different servers{' '}
              </h4>
            </div>
          </div>
          <button className={loadMoreBtn}>Load more</button>
        </div>

        <div className={devopsEngineer}>
          <h1>
            DevOps engineers at Slack report a 5X increase in productivity!
          </h1>
          <p>
            Discover OpsPad's flexible features designed to help improve
            productivity
          </p>
          <button>Use OpsPad for FREE</button>
        </div>
      </div>
    </div>
  );
};

export default BestPractice;
