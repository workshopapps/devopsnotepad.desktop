import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './GetDemo.module.css';
import Slide from '../FreeTrial/Slide/Slide';
import Back from './assets/BackArrow.svg';
import OpspadLogo from './assets/OpspadLogo.svg';
import Checkmark from './assets/Checkmark.svg';

function GetDemo() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    job: '',
  });

  const { firstName, lastName, email, company, job } = formData;

  function onMutateForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    console.log(formData);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      company: '',
      job: '',
    });
    // If post successful route to demo page
    navigate('/demo');
  }

  return (
    <div className={style.container}>
      <header className={style.header}>
        <button
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={Back} alt='go back to previous page' />
        </button>
        <Link to={'/'}>
          <img src={OpspadLogo} alt='Home Link' />
        </Link>
      </header>

      <main className={style.main}>
        <div className={style.main_heading}>
          <h2>Unlock New Ways to Manage Your Servers on Mobile</h2>
        </div>

        <div className={style.content_wrapper}>
          <div className={style.content}>
            <h1>
              Watch the Opspad <span>Demo Video</span> Now
            </h1>

            <p>
              <span>
                OPSPAD is a simple server management and logging solution that
                takes less than a minute to setup and can be used from a mobile
                phone.
              </span>

              <span>
                {' '}
                This demo would show you in under TWO minutes how to:
              </span>
            </p>

            <ul className={style.list}>
              <li className={style.list_item}>
                <img src={Checkmark} alt='list checkmark' />
                <span>Setup Opspad across your devices (mobile, PC)</span>
              </li>
              <li className={style.list_item}>
                <img src={Checkmark} alt='list checkmark' />
                <span>
                  Store and manage access credentials for server tools
                </span>
              </li>
              <li className={style.list_item}>
                <img src={Checkmark} alt='list checkmark' />
                <span>View log information and your server status</span>
              </li>
              <li className={style.list_item}>
                <img src={Checkmark} alt='list checkmark' />
                <span>Take notes of key server events on the notepad</span>
              </li>
            </ul>
          </div>
        </div>

        <form className={style.form} onSubmit={onSubmitForm}>
          <div className={style.form_heading}>
            <h2>GET A DEMO</h2>
            <p>Fill in your details and watch a demo of Opspad</p>
          </div>

          <div className={`${style.form_control} ${style.first_name}`}>
            <label htmlFor='firstName'>First Name</label>
            <input
              id='firstName'
              value={firstName}
              type='text'
              placeholder='What’s your first name?'
              onChange={onMutateForm}
              required
            />
          </div>

          <div className={`${style.form_control} ${style.last_name}`}>
            <label htmlFor='lastName'>Last Name</label>
            <input
              id='lastName'
              value={lastName}
              type='text'
              placeholder='What’s your last name?'
              onChange={onMutateForm}
              required
            />
          </div>

          <div className={`${style.form_control} ${style.email}`}>
            <label htmlFor='email'>Email Address</label>
            <input
              id='email'
              value={email}
              type='email'
              placeholder='What’s your email address?'
              onChange={onMutateForm}
              required
            />
          </div>

          <div className={`${style.form_control} ${style.company}`}>
            <label htmlFor='company'>Company Name</label>
            <input
              id='company'
              value={company}
              type='text'
              placeholder='Where do you work?'
              onChange={onMutateForm}
              required
            />
          </div>

          <div className={`${style.form_control} ${style.job}`}>
            <label htmlFor='job'>Job Function</label>
            <select
              className={job === '' ? style.none : ''}
              name='job'
              id='job'
              value={job}
              onChange={onMutateForm}
              required
            >
              <option className={style.none} value=''>
                What do you do?
              </option>
              <option value='DevOps'>DevOps</option>
              <option value='IT Admin'>IT Admin</option>
              <option value='Software Engineer'>Software Engineer</option>
              <option value='Server/System Admin'>Server/System Admin</option>
              <option value='Executive'>Executive</option>
              <option value='Others'>Others</option>
            </select>
          </div>

          <p className={style.terms}>
            By providing information in this form, you agree to{' '}
            <span
              onClick={() => {
                navigate('/terms-of-service');
              }}
            >
              Opspad Privacy Policy
            </span>
          </p>

          <button type='submit' className={style.submit}>
            See Demo
          </button>
        </form>
      </main>

      <section className={style.clients}>
        <Slide />
        {/* <h2>
          <span>Trusted </span>by happy Clients
        </h2>
        <div className={style.client_list}>
        </div>
         */}
        <div aria-hidden='true' className={style.footer}></div>
      </section>
    </div>
  );
}

export default GetDemo;
