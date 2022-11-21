import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DevopsCommunity.module.css';
import Banner from './Banner';
import {
  IoIosArrowForward,
  IoIosArrowBack,
  IoIosArrowDown,
} from 'react-icons/io';
import { BiLike } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { activity, slideData } from './data';
import { NextArrow, PrevArrow } from './SliderArrow';

const settings = {
  dots: false,
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      },
    },
    {
      breakpoint: 550,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
      },
    },
  ],
};

const DevopsCommunity = () => {
  return (
    <div className={styles.devopsCommunity}>
      <Banner />
      <div className={styles.slide}>
        <Slider {...settings}>
          {slideData.map((slideList, i) => (
            <div className={styles.cSlideBox} key={i}>
              <div className={styles.slideBoxX}>
                <div>
                  <img src={slideList.icon} alt='' />
                  <p>{slideList.content}</p>
                </div>
                <div className={styles.slideBtn}>
                  <Link to={slideList.slug}>{slideList.linkLabel}</Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className={styles.community_activity}>
        <div className={styles.inCommunity_activity}>
          <div className={styles.leftC}>
            <div className={styles.left}>
              <div className={styles.header}>
                <span>Community Activity</span>
                <div className={styles.selectBox}>
                  <span>
                    Latest activity <IoIosArrowDown />
                  </span>
                </div>
              </div>
              <div className={styles.activity_content}>
                {activity.map((a, i) => (
                  <div className={styles.activity_box} key={i}>
                    <div className={styles.avatar}>
                      <img src={a.avatar} alt='' />
                    </div>
                    <div className={styles.article}>
                      <div className={styles.aContent}>
                        <div className={styles.title}>
                          <h5>{a.title}</h5>
                        </div>
                        <div className={styles.msgBox}>
                          <div className={styles.mBLeft}>
                            <p>{a.message}</p>
                            <div className={styles.mBtBottom}>
                              <p>
                                By &nbsp;<span>{a.name}</span>&nbsp; New Member
                                in &nbsp;<span>{a.category}</span>&nbsp;
                              </p>
                              <p>{a.time}</p>
                            </div>
                          </div>
                          <div className={styles.l_d_box}>
                            <p>
                              <BiLike />
                              <span>0</span>
                            </p>
                            <p>
                              <BsEmojiSmile />
                              <span>1</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className={styles.pagination}>
              <div className={styles.inPagination}>
                <button>
                  <IoIosArrowBack /> Prev
                </button>
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>...</button>
                <button>1245</button>
                <button>
                  Next <IoIosArrowForward />
                </button>
              </div>
            </div>
          </div>
          <div className={styles.right}>
            <div className={styles.rBox}>
              <h5>Get Started</h5>
              <h3>Welcome Community Guidelines Feedback</h3>
            </div>
            <div className={styles.rBox}>
              <h5>Get update on the Opspad Community!</h5>
              <h3>What’s new in OpsPad v3.0:</h3>
              <p>
                We've added insight into the latest feature, fixes, and finesse
                to OpsPad. Join us as we share some…
              </p>

              <h3>How to set up your OpsPad</h3>
              <p>
                Set up your OpsPad like a pro in 5 steps. Steps to setting up
                your OPspad app. 1. Open your app
              </p>

              <h3>Behind the feature : Add and Delete servers</h3>
              <p>
                Team Sandpaper on the complexities of sorting servers and
                designing specialized UIs for OpsPad…
              </p>
              <div className={styles.rLink}>
                <Link to='/blog'>
                  Read our Community Blog <IoIosArrowForward />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DevopsCommunity;
