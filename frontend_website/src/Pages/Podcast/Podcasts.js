import React from 'react';
import './Podcasts.css';
import first from './images/image 19.png';
import second from './images/image 24.png';
import mark from './images/Ellipse 477.png';
import face from './images/Ellipse 478.png';
import Login from './Login';

const Podcast = () => {
  return (
    <div className='podcast'>
      <div className='podcast-contain'>
        <h2 className='podcast-head'>WELCOME TO OPSPAD PODCAST</h2>
        <div className='podcast-top'>
          <div className='podcast-top-left'>
            <h4>PODCAST CHANNEL- The Devops Lifestyle</h4>
            <p>
              The DevOps lifestyle Podcast is a weekly show for Devops
              professionals at all career levels looking for a way to manage
              work efficientlyand reduce stress. These sessions are
              opportunities to talk shop, get career advice from leadinfg lights
              in the industry, learn how to balance work and life, get the
              industry latest news, ask questions from experts and get answers.
            </p>
          </div>
          <div className='podcast-top-right'>
            <img src={second} alt='' className='second' />
          </div>
        </div>
        <div className='podcast-middle'>
          <div className='podcast-middle-left'>
            <div className='subtitle'>Why join our community?</div>
            <p>
              Joining the community allows you access to information about the
              DevOps community, and it helps us better understand the challenges
              our users have so we can better focus on solving them and
              improving our software.
            </p>
            <img src={first} alt='' className='img-first' />
            <p>
              To learn more about how Opspad is helping thousands of users
              achieve the right balance. Click the register botton below.
            </p>
            <p>
              Visit our websites to get access the eventful package of all the
              podcast available to you. <br /> www.opspad.com
            </p>
            <div className='left-box small'>
              <div className='top det'>
                <p>"We bring the latest news on all DevOps related topics."</p>
                <img src={face} alt='' />
              </div>
              <div className='bottom det'>
                <img src={face} alt='' />
                <p>Register now to explore without limits.</p>
              </div>
            </div>
            <p className='bold'>
              The DevOps Lifestyle Podcast isi brought to you by Team SandPaper,
              creators of the OpsPad{' '}
            </p>
            <p>
              We appreciate your decision to jon the Devops Lifestyle Podcast{' '}
            </p>
            <div className='mark' id='mark'>
              <img src={mark} alt='' className='face' />
              <div className='mark-det'>
                <p className='name'>Mark</p>
                <p>CEO Ops Podcast</p>
              </div>
            </div>
          </div>
          <div className='podcast-middle-right'>
            <div className='left-box'>
              <div className='box'>
                <div className='top det'>
                  <p>
                    "We bring the latest news on all DevOps related topics."
                  </p>
                  <img src={face} className='face' alt='' />
                </div>
                <div className='bottom det'>
                  <img src={face} className='face' alt='' />
                  <p>Register now to explore without limits.</p>
                </div>
              </div>
            </div>
            <div className='left-most'>
              <div className='contain'>
                <h5>Most viewed podcast </h5>
                <p>Introduction to Devops. A complete guide for beginners.</p>
                <p>
                  Exploring the AI of the Devops lifestyle. A talk with Mr Mark,
                  CEO of HNG.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='button'>
          <button className='btn'>Register Now</button>
        </div>
      </div>
      {/* <Login/> */}
    </div>
  );
};

export default Podcast;
