import React from 'react';
import { Link } from 'react-router-dom';
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { TeamData } from '../data/team-members';

const TeamDeptInfo = ({ position, isRowReverse, desc, ctaText }) => {
  return (
    <div className='team__desc__and__images'>
      <div
        className='team__desc__and__images-inner container'
        style={{ flexDirection: isRowReverse ? 'row-reverse' : '' }}
      >
        <article className='team__desc'>
          <p>{desc}</p>
          <Link to={'/our-team/all-teams'}>
            <button className='team__desc__cta fs-3'>See all {ctaText}</button>
          </Link>
        </article>

        {/* swiper for >= medium screens */}
        <div className='swiper__wrapper d-none d-md-block'>
          <Swiper
            className='swiper'
            modules={[Autoplay, Pagination]}
            spaceBetween={5}
            slidesPerView={1}
            pagination={{ clickable: true }}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {TeamData.filter(
              (team) => team.role === position,
            )[0].desktopSlides.map((slide, i) => (
              <SwiperSlide className='swiper__slide' key={i}>
                <div className='img__wrapper'>
                  <img src={slide} alt={`${position} img`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* swiper for <= sm screens */}
        <div className='swiper__wrapper d-block d-md-none'>
          <Swiper
            className='swiper'
            modules={[Autoplay]}
            spaceBetween={5}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {TeamData.filter(
              (team) => team.role === position,
            )[0].mobileSlides.map((slide, i) => (
              <SwiperSlide className='swiper__slide' key={i}>
                <div className='img__wrapper'>
                  <img src={slide} alt={`${position} img`} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default TeamDeptInfo;
