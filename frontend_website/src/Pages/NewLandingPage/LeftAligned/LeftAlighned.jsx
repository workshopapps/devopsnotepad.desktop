import { useState } from 'react';
// Mobile images
import notesImg from '../assets/notes.png';
import passwordImg from '../assets/passwords.png';
import notificationImg from '../assets/notification.png';
// PC images
import pnotesImg from '../assets/pnotes.png';
import ppasswordImg from '../assets/ppasswords.png';
import pnotificationImg from '../assets/pnotification.png';

// React Icons
import { BiNotepad } from 'react-icons/bi';
import { VscKey } from 'react-icons/vsc';
import { BsBell } from 'react-icons/bs';

import classes from './LeftAligned.module.css';
const LeftAligned = () => {
  const [device, setDevice] = useState('mobile');
  const [tab, setTab] = useState('a');
  return (
    <div className={classes.left_aligned}>
      <div className={classes.tab}>
        <div
          className={`${classes.tabItem} ${
            device === 'mobile' ? `${classes.tab_active}` : ''
          }`}
          onClick={() => setDevice('mobile')}
        >
          On Mobile
        </div>
        <div
          className={`${classes.tabItem} ${
            device === 'pc' ? `${classes.tab_active}` : ''
          }`}
          onClick={() => setDevice('pc')}
        >
          On PC
        </div>
      </div>
      <div className={`${classes.box} ${classes.pc}`}>
        <div className={classes.left}>
          <div className={classes.left__item} onClick={() => setTab('a')}>
            <div
              className={`${
                tab !== 'a'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <BiNotepad
                className={`${
                  tab !== 'a' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'a' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'a' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Notes down key events
              </h5>
              <p
                className={`${
                  tab !== 'a' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Jot down notes of specific events that occur on each server.
                Store information while troubleshooting.
              </p>
            </div>
          </div>

          <div className={classes.left__item} onClick={() => setTab('b')}>
            <div
              className={`${
                tab !== 'b'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <VscKey
                className={`${
                  tab !== 'b' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'b' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'b' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Safe and Secured
              </h5>
              <p
                className={`${
                  tab !== 'b' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Safeguard access credentials of server tools. Passwords are
                saved locally and offline on your device, accessible only by
                YOU.
              </p>
            </div>
          </div>

          <div className={classes.left__item} onClick={() => setTab('c')}>
            <div
              className={`${
                tab !== 'c'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <BsBell
                className={`${
                  tab !== 'c' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'c' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'c' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Stay Informed
              </h5>
              <p
                className={`${
                  tab !== 'c' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Notifications on the go, so you miss nothing!
              </p>
            </div>
          </div>
          {/*  */}
        </div>
        <div className={classes.right}>
          {tab === 'a' && device === 'mobile' && (
            <img src={notesImg} alt='' className={classes.img} />
          )}
          {tab === 'b' && device === 'mobile' && (
            <img src={passwordImg} alt='' className={classes.img} />
          )}
          {tab === 'c' && device === 'mobile' && (
            <img src={notificationImg} alt='' className={classes.img} />
          )}
          {/* PC */}
          {tab === 'a' && device === 'pc' && (
            <img src={pnotesImg} alt='' className={classes.pimg} />
          )}
          {tab === 'b' && device === 'pc' && (
            <img src={ppasswordImg} alt='' className={classes.pimg} />
          )}
          {tab === 'c' && device === 'pc' && (
            <img src={pnotificationImg} alt='' className={classes.pimg} />
          )}
        </div>
      </div>

      {/* Mobile Template */}
      {/* Mobile Template */}
      {/* Mobile Template */}
      <div className={`${classes.box} ${classes.mobile}`}>
        <div>
          <div className={classes.left__item} onClick={() => setTab('a')}>
            <div
              className={`${
                tab !== 'a'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <BiNotepad
                className={`${
                  tab !== 'a' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'a' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'a' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Notes down key events
              </h5>
              <p
                className={`${
                  tab !== 'a' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Jot down notes of specific events that occur on each server.
                Store information while troubleshooting.
              </p>
            </div>
          </div>
          {tab === 'a' && device === 'mobile' && (
            <img src={notesImg} alt='' className={classes.img} />
          )}
          {tab === 'a' && device === 'pc' && (
            <img src={pnotesImg} alt='' className={classes.pimg} />
          )}
        </div>

        <div>
          <div className={classes.left__item} onClick={() => setTab('b')}>
            <div
              className={`${
                tab !== 'b'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <VscKey
                className={`${
                  tab !== 'b' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'b' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'b' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Safe and Secured
              </h5>
              <p
                className={`${
                  tab !== 'b' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Safeguard access credentials of server tools. Passwords are
                saved locally and offline on your device, accessible only by
                YOU.
              </p>
            </div>
          </div>
          {tab === 'b' && device === 'mobile' && (
            <img src={passwordImg} alt='' className={classes.img} />
          )}
          {tab === 'b' && device === 'pc' && (
            <img src={ppasswordImg} alt='' className={classes.pimg} />
          )}
        </div>
        <div>
          <div className={classes.left__item} onClick={() => setTab('c')}>
            <div
              className={`${
                tab !== 'c'
                  ? `${classes.svg__box}`
                  : `${classes.active_svg__box}`
              }`}
            >
              <BsBell
                className={`${
                  tab !== 'c' ? `${classes.svg}` : `${classes.active_svg}`
                }`}
              />
            </div>
            <div
              className={`${
                tab !== 'c' ? `${classes.text}` : `${classes.active_text}`
              }`}
            >
              <h5
                className={`${
                  tab !== 'c' ? `${classes.h5}` : `${classes.active_h5}`
                }`}
              >
                Stay Informed
              </h5>
              <p
                className={`${
                  tab !== 'c' ? `${classes.p}` : `${classes.active_p}`
                }`}
              >
                Notifications on the go, so you miss nothing!
              </p>
            </div>
          </div>
          {tab === 'c' && device === 'mobile' && (
            <img src={notificationImg} alt='' className={classes.img} />
          )}
          {tab === 'c' && device === 'pc' && (
            <img src={pnotificationImg} alt='' className={classes.pimg} />
          )}
        </div>
      </div>
    </div>
  );
};
export default LeftAligned;
