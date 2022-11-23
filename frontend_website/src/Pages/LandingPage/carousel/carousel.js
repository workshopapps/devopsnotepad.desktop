import { Carousel } from 'antd';
import style from './carousel.module.css';
import { frank, left, right } from '../Images';
import { useRef } from 'react';

const Carousl = () => {
  const ref = useRef();
  return (
    <div>
      <Carousel 
      style={{  height: '300px', margin: '0 35px', padding: '0' }}
        autoplay
        pauseOnHover={true}
        draggable
        ref={ref}
      >
        <div className={style.landPage_section5_div1}>
          <img src={frank} alt='' />
          <p>
            I’ve been able to move around more, knowing I can track my servers
            on the go!
            <br />
            <span>-</span>
          </p>
          <h4>Frank Etim</h4>
        </div>
        <div className={style.landPage_section5_div1}>
          <img src={frank} alt='' />
          <p>
            I’ve been able to move around more, knowing I can track my servers
            on the go!
            <br />
            <span>-</span>
          </p>
          <h4>Frank Etim</h4>
        </div>
        <div className={style.landPage_section5_div1}>
          <img src={frank} alt='' />
          <p>
            I’ve been able to move around more, knowing I can track my servers
            on the go!
            <br />
            <span>-</span>
          </p>
          <h4>Frank Etim</h4>
        </div>
      </Carousel>
      <div className={style.Carousel_btn}>
        <img
          src={left}
          alt=''
          className={style.prevC}
          onClick={() => ref.current.prev()}
        />
        <img
          src={right}
          alt=''
          className={style.nextC}
          onClick={() => ref.current.next()}
        />
      </div>
    </div>
  );
};

export default Carousl;