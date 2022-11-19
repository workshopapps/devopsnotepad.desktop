import { useState } from 'react';

import Input from '../../ComingSoon/Input/Input';
import Button from '../Button/Button';
import ListItem from './ListItem';

import classes from './SignUp.module.css';

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

const SignUp = () => {
  const [email, setEmail] = useState('');
  return (
    <section className={classes.section} data-testid='career__sign--up'>
      <div className={classes.left}>
        <h3 className={classes.h3}>Nothing here that matches your skillset?</h3>
        <h1 className={classes.h1}>Sign up for future updates</h1>
        <label className={classes.label}>Your email</label>
        <Input
          className={classes.input}
          type='email'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ul className={classes.ul}>
          {types.map((type, index) => (
            <ListItem key={index} title={type.title} />
          ))}
        </ul>
        <Button className={classes.button}>Get Notified</Button>
      </div>
      <div className={classes.right}>
        <div className={`${classes.box} ${classes.box_1}`}></div>
        <div className={`${classes.box} ${classes.box_2}`}></div>
        <div className={`${classes.box} ${classes.box_3}`}></div>
      </div>
    </section>
  );
};
export default SignUp;
