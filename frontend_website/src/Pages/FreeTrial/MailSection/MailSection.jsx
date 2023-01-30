import React, { useState } from 'react';
import Input from '../../ComingSoon/Input/Input';
import { useNavigate } from 'react-router-dom';
import style from './MailSection.module.css';

const MailSection = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  // const [buttonclick, setButtonclick] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    localStorage.setItem('enteredEmail', JSON.stringify(email));
    navigate('/signup');

    // setEmail('');
    // fetch('https://opspad.dev/api/notify-me/', {
    //   method: 'POST',
    //   body: JSON.stringify({
    //     email,
    //   }),
    //   headers: {
    //     accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // }).then((response) => {
    //   response.json();
    //   if (response.status === 200) {
    //     // setButtonclick(true)
    //   }
    // });
  };
  return (
    <div className={style.mailWrapper}>
      <h1 className={style.mailWrapperH1}>
        Tracking down server issues just got easier!
      </h1>
      <form className={style.mailForm} onSubmit={handleSubmit}>
        <label className={style.label}>
          Enter your email address
          <Input
            className={style.input}
            type='email'
            name='email'
            required
            placeholder='email@example.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button className={style.button}>Start free trial</button>
      </form>
      <p>We do not sell or share your information with anyone</p>
      <p>
        By entering your email, you agree to receive marketing emails from
        Opspad.
      </p>
    </div>
  );
};

export default MailSection;
