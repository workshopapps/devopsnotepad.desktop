import group from './assets/groups.svg';
import chat from './assets/chat.svg';
import solution from './assets/solution.svg';

import devops from './assets/devops.png';
import styles from './DevopsCommunity.module.css';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.inBanner}>
        <div className={styles.article}>
          <div className={styles.left}>
            <h1>Ask questions, Get answers, Share ideas</h1>
            <h3 className={styles.h3}>
              Connect with opspad users around the world.
            </h3>
            <p>
              Our community has everything you need; ask questions, get answers,
              and share ideas with like-minded users.
            </p>
            <div className={styles.right}>
              <div>
                <img
                  src={group}
                  alt='Group'
                  style={{ width: '20', height: '20' }}
                />
                <p>1,305</p>
                <span>Members Online</span>
              </div>
              <div>
                <img
                  src={chat}
                  alt='Chat'
                  style={{ width: '20', height: '20' }}
                />
                <p>156k</p>
                <span>Discussions</span>
              </div>
              <div>
                <img
                  src={solution}
                  alt='Solution'
                  style={{ width: '20', height: '20' }}
                />
                <p>48.5k</p>
                <span>Solutions</span>
              </div>
            </div>
          </div>
          <figure className={styles.img}>
            <img src={devops} alt='DevOps' />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;
