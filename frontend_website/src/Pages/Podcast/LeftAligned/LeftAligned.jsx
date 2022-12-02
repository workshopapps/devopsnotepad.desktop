import cir3 from '../images/cir3.png';

import Vec2 from '../images/Vec2.png';

import { ImMusic } from 'react-icons/im';
import { BsSoundwave, BsBroadcastPin } from 'react-icons/bs';

import classes from './LeftAligned.module.css';

const LeftAligned = () => {
  return (
    <div className={classes.leftaligned} data-testid='coming__left'>
      <div className={classes.left}>
        <h2 className={classes.h2}>Promote your podcast</h2>
        <p className={classes.p}>
          Expand your audience by boosting awareness on connected social
          accounts and distribute to trendy listening appps like Spotify,
          Itunes, and Apple PPodcast with just a few clicks away.
        </p>
      </div>
      <figure className={classes.right}>
        <div className={classes.div_1}>
          <div className={classes.div_2}>
            <img
              src={cir3}
              alt='Promote your podcast'
              className={classes.img}
            />
          </div>
          <BsBroadcastPin className={classes.vec_1} />
          <img
            src={Vec2}
            alt='Promote your podcast'
            className={classes.vec_2}
          />
          <BsSoundwave className={classes.vec_3} />
          <ImMusic className={classes.vec_4} />
        </div>
      </figure>
    </div>
  );
};
export default LeftAligned;
