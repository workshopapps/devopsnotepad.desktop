import React from 'react';
import { industryNews } from './RoomData';
import RoomCard from './RoomCard';
import arrow from './Images/arrow.png';
import img1 from './Images/img1.png';
import img2 from './Images/img2.png';
import img3 from './Images/img3.png';

// IMPORT CSS
import style from './NewsRoom.module.css';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

const NewsRoom = () => {
  return (
    <>
      <Navigation />
      <div className={style.newsroom__container}>
        <div className={style.Newsroomminilandingpage}>
          <h1>
            Stay<span> up to date</span> with our activities
          </h1>
          <p>
            Stay up-to-date with latest company news,product updates, and
            industry-related events.
          </p>
        </div>

        <div className={style.companyNews}>
          <div className={style.companyNewsHeader}>
            <p>Company News</p>
            <a href='/news-room/view-all'>
              <button>
                View All
                <img src={arrow} alt='' />
              </button>
            </a>
          </div>
          <div className={style.companyNewsContents}>
            <div className={style.companyNewsPost}>
              <img src={img1} alt='' />
              <h1>OpsPad v1.0: The DevOps engineer pocket assistant.</h1>
              <p>November 5, 2022</p>
            </div>
            <div
              className={style.companyNewsPost + ' ' + style.companyNewsPost2}
            >
              <img src={img2} alt='' />
              <h1>Opspad v1.0 launch: What to expect.</h1>
              <p>November 15, 2022</p>
            </div>
            <div
              className={style.companyNewsPost + ' ' + style.companyNewsPost3}
            >
              <img src={img3} alt='' />
              <h1>OpsPad v2.0: A new way to take your notes!</h1>
              <p>November 15, 2022</p>
            </div>
          </div>
        </div>

        <div className={style.industryRelease}>
          <div className={style.industryReleaseHeading}>
            <h1>Industry New Releases</h1>
          </div>

          <div>
            <div className={style.industryReleaseContents}>
              {industryNews.map(({ id, image, date, topic }) => {
                return (
                  <RoomCard key={id} className={style.post}>
                    <div className={style.postimgwrapper}>
                      <img
                        src={image}
                        alt='down img'
                        className={style.postimg}
                      />
                    </div>
                    <h4>{topic}</h4>
                    <small>{date}</small>
                  </RoomCard>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default NewsRoom;
