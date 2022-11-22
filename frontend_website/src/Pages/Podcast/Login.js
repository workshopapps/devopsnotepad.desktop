import React from 'react';
import './Login.css';
import google_img from './images/Google svg.png';
import github from './images/Vector.png';
import facebook from './images/Facebook svg.png';

const Login = () => {
  return (
    <div className='login'>
      <div className='login-contain'>
        <h5>Enter your login details below.</h5>

        <form action=''>
          <div className='name each'>
            <label htmlFor='name'>Name</label>
            <input
              type='text'
              name='name'
              id='name'
              placeholder='Enter your name'
            />
          </div>
          <div className='email each'>
            <label htmlFor='email'>Email</label>
            <input
              type='text'
              name='email'
              id='email'
              placeholder='Example@gmail.com'
            />
          </div>
          <div className='password each'>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              name='password'
              id='password'
              placeholder='Must be seven characters...'
            />
          </div>

          <button>Log in</button>
        </form>

        <div className='butt'>
          <span className='line'></span>
          <p>or log in with</p>
          <span className='line'></span>
        </div>

        <div className='logos'>
          <img src={google_img} alt='' />
          <img src={github} alt='' />
          <img src={facebook} alt='' />
        </div>
      </div>
    </div>
  );
};

export default Login;
