import React from 'react';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import Footer from '../../Component/Footer/Footer';
import Navigation from '../../Component/Navigation/Navigation';
import style from './DemoPage.module.css';
import one from './assets/one.png';
import two from './assets/two.png';
import three from './assets/three.png';

const DemoPage = () => {
  return (
    <>
      <Navigation />

      <div className={style.container}>
        <section className={style.main_container}>
          <div className={style.main}>
            <div className={style.main_text}>
              <h1>
                Get Ready To Experience <span>Ease</span> With Opspad
              </h1>
              <p>
                One of our team members will reach out to you to answer any
                questions you may have. Meanwhile , get to know us a little
                better
              </p>
            </div>

            <figure aria-hidden='true'>
              <img src={one} alt='header image' aria-hidden='true' />
            </figure>
            {/* <div className={style.videoCtn}>
            <ReactPlayer
              className={style.video}
              url='https://youtu.be/TcUlnDJwtPg'
            ></ReactPlayer>
          </div> */}
          </div>

          <div className={style.video_wrap}>
            <div className={style.video_container}>
              <iframe
                className={style.video}
                src='https://www.youtube.com/embed/TcUlnDJwtPg'
                title='YouTube
              video player'
                frameborder='0'
                allow='accelerometer; autoplay;
              clipboard-write; encrypted-media; gyroscope; picture-in-picture;
              web-share'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </section>

        <section className={style.action_container}>
          <div className={style.action}>
            <h2 className={style.action_heading}>
              Use Opspad <span>without paying</span>
            </h2>
            <ul className={style.action_list}>
              <li>Follow the information on the user guide</li>
              <li>Get setup in less than a minute</li>
              <li>
                Test with a network/ server to see in-person how you can view
                your logs.
              </li>
            </ul>

            <Link className={style.action_button} to='/free-trial'>
              Start a free trial
            </Link>

            <figure className={style.action_img} aria-hidden='true'>
              <img src={two} alt='' aria-hidden='true' />
            </figure>
          </div>

          <div className={style.action}>
            <h2 className={style.action_heading}>
              We’d love to <span>get your feedback on Opspad</span>
            </h2>
            <ul className={style.action_list}>
              <li>
                We’d love to tailor our product features to match your exact
                need
              </li>
              <li>We want to hear from you about any concerns you have</li>
              <li>Your feedback helps us gauge what your preferences are</li>
            </ul>

            <a
              className={style.action_button}
              rel='noreferrer noopener'
              href='https://docs.google.com/forms/d/1CLL4OCQ3-HMMcJxQKaNJo6EZg3yAOl3N4UC0bvhHB4I/edit?usp=drivesdk'
            >
              Take a 30-second survey
            </a>

            <figure aria-hidden='true' className={style.action_img}>
              <img src={three} alt='' aria-hidden='true' />
            </figure>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DemoPage;
