import React from 'react';
import style from './carousel.module.css';
import { frank,right, left } from '../Images';

const Carousel = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.landPage_section5_div1}>
        <img src={frank} alt="" />
        <p>
          I’ve been able to move around more, knowing I can track my servers on
          the go!
          <br />
          <span>-</span>
        </p>
        <h4>Frank Etim</h4>
      </div>
      <div>
        <img src={left} alt="" className={style.prevC}  />
        <img src={right} alt="" className={style.nextC} />
      </div>
    </div>
  );
};

export default Carousel;
