import { useState } from 'react';

import img1 from '../../../assets/coming_soon-assets/Images/img1.png';

import Button from '../../CareerPage/Button/Button';
import Input from '../Input/Input';

import classes from './Header.module.css';

const Header = () => {
  const [email, setEmail] = useState('');
  return (
    <div className={classes.leftAligned} data-testid='coming__header'>
      <div className={classes.left}>
        <h1 className={classes.h1}>Stay on top of updates</h1>
        <p className={classes.p}>
          Awesome Features and easy Accessiility for end-users
        </p>
        <h2 className={classes.h2}>Be the first to know</h2>
        <Input
          className={classes.input}
          type='email'
          placeholder='email@example.com'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button className={classes.button}>Notify me</Button>
      </div>
      <figure className={classes.right}>
        <img src={img1} alt='updates' className={classes.img} />
      </figure>
    </div>
  );
};
export default Header;
