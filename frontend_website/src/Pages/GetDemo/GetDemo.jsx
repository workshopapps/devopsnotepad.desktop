import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import style from './GetDemo.module.css';
import Slide from '../FreeTrial/Slide/Slide';
import LoadingAnimation from '../../Component/LoadingAnimation/LoadingAnimation';
import Back from './assets/BackArrow.svg';
import OpspadLogo from './assets/OpspadLogo.svg';
import Checkmark from './assets/Checkmark.svg';

function GetDemo({ setDemoView }) {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [errorSuccessMessage, setErrorSuccessMessage] = useState('');
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    company: '',
    role: '',
  });

  const { firstname, lastname, email, company, role } = formData;

  function onMutateForm(e) {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  }

  async function onSubmitForm(e) {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('https://opspad.dev/api/admin/follow-up', {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify(formData),
      });

      // If response is not successful, throw an error
      if (!response.ok) {
        throw new Error('Bad fetch response');
      }

      const data = await response.json();
      console.log(data);
      setLoading(false);

      // If Post request is successful, create a variable in local storage with a value of true
      localStorage.setItem(
        'd5339e41-f0c2-46b9-b3bb-038c767c4ebb',
        JSON.stringify(true),
      );

      // If post request is successful display demo by changing demoView to true in demo
      setTimeout(() => {
        if (response.ok) setDemoView();
      }, 2000);

      setErrorSuccessMessage('Your demo is now ready');
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        company: '',
        role: '',
      });
    } catch (error) {
      setErrorSuccessMessage(`An error occurred: ${error.message}, 
      Please try again later`);
    }
    setTimeout(() => {
      setErrorSuccessMessage('');
    }, 5000);
    setLoading(false);
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
        <Link className={style.home_link} to={'/'}>
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
            <label htmlFor='firstname'>First Name</label>
            <input
              id='firstname'
              value={firstname}
              type='text'
              placeholder='What’s your first name?'
              onChange={onMutateForm}
              required
            />
          </div>

          <div className={`${style.form_control} ${style.last_name}`}>
            <label htmlFor='lastname'>Last Name</label>
            <input
              id='lastname'
              value={lastname}
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
            <label htmlFor='role'>Job Function</label>
            <select
              className={role === '' ? style.none : ''}
              name='role'
              id='role'
              value={role}
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

          <div className={style.loading}>
            {loading && <LoadingAnimation />}
            {errorSuccessMessage && <span>{errorSuccessMessage}</span>}
          </div>
        </form>
      </main>

      <section className={style.clients}>
        <Slide />
        <div aria-hidden='true' className={style.footer}></div>
      </section>
    </div>
  );
}

export default GetDemo;
