import React from 'react';
import { Link } from 'react-router-dom';
import styles from './DevopsCommunity.module.css';
import Banner from './Banner';
import { IoIosArrowDown } from 'react-icons/io';
import { BiLike } from 'react-icons/bi';
import { BsEmojiSmile } from 'react-icons/bs';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { activity, slideData } from './data';
import { NextArrow, PrevArrow } from './SliderArrow';
import Pagination from './Pagination/Pagination';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

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
    <>
      <Navigation />{' '}
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
                </div>
              </div>
            ))}
          </Slider>
          {slideData.map((slideList, i) => (
            <div className={styles.slideBtn}>
              {slideList.linkLabel !== '' ? (
                <Link to={slideList.slug}>{slideList.linkLabel}</Link>
              ) : (
                ''
              )}
            </div>
          ))}
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
                          <div className={styles.communityContent}>
                            <div className={styles.mBContent}>
                              <p>{a.message}</p>
                              <div className={styles.mBCauthor}>
                                <p>
                                  From &nbsp;<span>{a.name}</span>&nbsp;
                                </p>
                                <p>{a.time}</p>
                              </div>
                            </div>
                            <div className={styles.l_d_box}>
                              <p className={styles.svg_box}>
                                <BiLike style={{ fill: 'rgb(45, 45, 45)' }} />
                                <span>0</span>
                              </p>
                              <p className={styles.svg_box}>
                                <BsEmojiSmile
                                  style={{ fill: 'rgb(45, 45, 45)' }}
                                />
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
              <Pagination />
            </div>
            <div className={styles.right}>
              <div className={styles.rBox}>
                <h5 className={styles.h5}>Get Started</h5>
                <h3 style={{ marginBottom: '-2.5rem' }}>
                  Welcome <br />
                  Community Guidelines Feedback
                </h3>
              </div>
              <div className={styles.rBox}>
                <h5>Get update on the Opspad Community!</h5>
                <h3>What’s new in OpsPad v3.0:</h3>
                <p>
                  We've added insight into the latest feature, fixes, and
                  finesse to OpsPad. Join us as we share some…
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
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default DevopsCommunity;
