import { useState } from 'react';
import img1 from '../../../assets/coming_soon-assets/Images/img1.png';
import Button from '../../CareerPage/Button/Button';
import Input from '../Input/Input';
import classes from './Header.module.css';
import ComingSoonModalCss from './ComingSoonModal.module.css';


const comingsoonmodalWraper = ComingSoonModalCss.comingsoonmodalWraper
const comingsoonmodal = ComingSoonModalCss.comingsoonmodal

const Header = () => {
  const [email, setEmail] = useState('');
  const [buttonclick, setButtonclick] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    setEmail('');
    fetch('https://opspad.dev/api/notify-me/', {
      method: 'POST',
      body: JSON.stringify({
        email
      }),
      headers: {
        "accept": "application/json",
        "Content-Type": "application/json",
      }
    }).then((response) => {
      response.json()
      if (response.status === 200) {
        setButtonclick(true)
      }
    })
  };

  return (
    <div className={classes.leftAligned} data-testid='coming__header'>
      <form onSubmit={handleSubmit} className={classes.left}>
        <h1 className={classes.h1}>Stay on top of <span> updates</span></h1>
        <p className={classes.p}>
          Awesome Features and easy Accessiility for end-users
        </p>
        <h2 className={classes.h2}>Be the first to know</h2>
        <label className={classes.label}>
          Email
          <Input
            className={classes.input}
            type='email'
            name='email'
            required
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <Button className={classes.button}>Notify me</Button>
      </form>
      <figure className={classes.right}>
        <img src={img1} alt='updates' className={classes.img} />
      </figure>

      {buttonclick &&
        <div className={comingsoonmodalWraper}>
          <div className={comingsoonmodal}>
            <h1>You will be notified for future updates. <br /> <span>Please check your email</span></h1>
            <button onClick={() => setButtonclick(false)}>Ok</button>
          </div>
        </div>
      }
    </div>
  );
};
export default Header;
