import { useState } from 'react';

import Input from '../../ComingSoon/Input/Input';
import Button from '../Button/Button';
import ListItem from './ListItem';

import classes from './SignUp.module.css';
import ComingSoonModalCss from './ComingSoonModal.module.css';

const types = [
  {
    title: 'All Roles',
  },
  {
    title: 'Business Development',
  },
  {
    title: 'Marketing',
  },
  {
    title: 'Finance',
  },
  {
    title: 'Customer Support',
  },
  {
    title: 'People Operations',
  },
  {
    title: 'Design',
  },
  {
    title: 'Engineering',
  },
  {
    title: 'Product',
  },
  {
    title: 'Translations',
  },
];


const comingsoonmodalWraper = ComingSoonModalCss.comingsoonmodalWraper
const comingsoonmodal = ComingSoonModalCss.comingsoonmodal

const SignUp = () => {
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
      } else {
        setButtonclick(false)
      }
    })
  };

  return (
    <section className={classes.section} data-testid='career__sign--up'>
      <form onSubmit={handleSubmit} className={classes.left}>
        <h3 className={classes.h3}>Nothing here that matches your skillset?</h3>
        <h1 className={classes.h1}>Sign up for future updates</h1>
        <label className={classes.label}>Your email</label>
        <Input
          className={classes.input}
          type='email'
          required
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ul className={classes.ul}>
          {types.map((type, index) => (
            <ListItem key={index} title={type.title} />
          ))}
        </ul>
        <Button className={classes.button} onClick={() => setButtonclick(true)}>Get Notified</Button>
      </form>
      <div className={classes.right}>
        <div className={`${classes.box} ${classes.box_1}`}></div>
        <div className={`${classes.box} ${classes.box_2}`}></div>
        <div className={`${classes.box} ${classes.box_3}`}></div>
      </div>
      s
      {buttonclick &&
        <div className={comingsoonmodalWraper}>
          <div className={comingsoonmodal}>
            <h1>You will be notified for future updates. <br />
              <span>Please check your email</span>
            </h1>
            <button onClick={() => setButtonclick(false)}>Ok</button>
          </div>
        </div>
      }
    </section>
  );
};
export default SignUp;
