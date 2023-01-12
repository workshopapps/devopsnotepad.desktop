import React from 'react';
import styles from './ContactUs.module.css';
import support from './images/support.png';
import sales from './images/sales.png';
import press from './images/press.png';
import developer from './images/developer.png';
import { useFormik } from 'formik';
import { contactUsSchema } from './Schema';
import { Link } from 'react-router-dom';
import { RiCloseCircleFill } from 'react-icons/ri';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

const onSubmit = async (values, actions) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    const req = await fetch('https://opspad.dev/api/contact-us', {
      method: 'POST',
      body: JSON.stringify(values),
      headers: { 'Content-type': 'application/json' },
    });
    const res = await req.json();
    console.log(values);
    alert('Form Submitted ' + res.message);
    actions.resetForm();
  } catch (error) {
    console.log({ error });
  }
};

const ContactUs = () => {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },

    validationSchema: contactUsSchema,
    onSubmit,
  });

  return (
    <>
      <Navigation />
      <div>
        <section className={styles.container}>
          <section className={styles.contact}>
            <p className={styles.contactUs}>CONTACT US</p>

            <p className={styles.inTouch}>Get in Touch Today!</p>

            <p className={styles.help}>
              We want to hear from you. Let us know <br /> how we can help.
            </p>
          </section>

          <section className={styles.support}>
            <div className={styles.col1}>
              <div className={styles.card}>
                <img src={support} alt='' />

                <p className={styles.supportP}>Support</p>

                <p className={styles.assistance}>
                  If you’re having trouble with OpsPad, check out the FAQs
                  section or get assistance from other OpsPad users in our
                  discussion forums.
                </p>

                <button className={styles.btns}>
                  <Link
                    to='/faq'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    GET SUPPORT
                  </Link>
                </button>
              </div>

              <div className={styles.card}>
                <img src={sales} alt='' />

                <p className={styles.supportP}>
                  Sales <br />{' '}
                </p>

                <p className={styles.assistance}>
                  Are you interested in the OpsPad? Get in touch with an OpsPad
                  sales representative. <br /> <br />{' '}
                </p>

                <button
                  className={styles.btns}
                  onClick={() =>
                    (window.location = 'mailto:sales@teamsandpaper.com')
                  }
                >
                  CONTACT US
                </button>
              </div>
            </div>

            <div className={styles.col1}>
              <div className={styles.card}>
                <img src={press} alt='' />

                <p className={styles.supportP}>Press & Partnership Enquiries</p>

                <p className={styles.assistance}>
                  For press and partnerships enquiries, Click on the button
                  below.
                </p>

                <button
                  className={styles.btns}
                  onClick={() =>
                    (window.location = 'mailto:partnerships@teamsandpaper.com')
                  }
                >
                  CONTACT US
                </button>
              </div>

              <div className={styles.card}>
                <img src={developer} alt='' />

                <p className={styles.supportP}>
                  Developer <br /> <br />{' '}
                </p>

                <p className={styles.assistance}>
                  If you are interested in an integration, please refer to our
                  Developer / API Support. <br />{' '}
                </p>

                <button className={styles.btns}>
                  <Link
                    to='/integrations'
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    INTEGRATIONS
                  </Link>
                </button>
              </div>
            </div>
          </section>

          <section className={styles.wrap}>
            <p className={styles.reachOut}> Need More Help?</p>

            <p className={styles.canHelp}>
              We want to hear from you. Let us know how we can help.
            </p>
          </section>

          <section className={styles.wrapper}>
            <form onSubmit={handleSubmit}>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label htmlFor='firstname'>First Name</label>
                  <input
                    type='text'
                    id='firstname'
                    placeholder='What’s your first name?'
                    name='firstname'
                    className={styles.start}
                    required
                    onChange={handleChange}
                    value={values.firstname}
                    onBlur={handleBlur}
                  />

                  {errors.firstname && touched.firstname && (
                    <p className={styles.errorMsg}>
                      <RiCloseCircleFill /> {errors.firstname}
                    </p>
                  )}
                </div>

                <div className={styles.col}>
                  <label htmlFor='lastname'>Last Name</label>
                  <input
                    type='text'
                    id='lastname'
                    placeholder='What’s your last name?'
                    className={styles.end}
                    required
                    onChange={handleChange}
                    value={values.lastname}
                    onBlur={handleBlur}
                  />

                  {errors.lastname && touched.lastname && (
                    <p className={styles.errorMsg}>
                      {' '}
                      <RiCloseCircleFill /> {errors.lastname}{' '}
                    </p>
                  )}
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.col}>
                  <label htmlFor='email'>Email</label>
                  <input
                    type='email'
                    id='email'
                    placeholder='What’s your email address?'
                    className={styles.start}
                    required
                    onChange={handleChange}
                    value={values.email}
                    onBlur={handleBlur}
                  />

                  {errors.email && touched.email && (
                    <p className={styles.errorMsg}>
                      {' '}
                      <RiCloseCircleFill /> {errors.email}{' '}
                    </p>
                  )}
                </div>

                <div className={styles.col}>
                  <label htmlFor='subject'>Subject</label>
                  <input
                    type='text'
                    placeholder='How can we help?'
                    id='subject'
                    className={styles.end}
                    required
                    onChange={handleChange}
                    value={values.subject}
                    onBlur={handleBlur}
                  />

                  {errors.subject && touched.subject && (
                    <p className={styles.errorMsg}>
                      <RiCloseCircleFill /> {errors.subject}
                    </p>
                  )}
                </div>
              </div>
              <div className={styles.row}>
                <div className={styles.col}>
                  <label for='message'>Your Message</label>
                  <textarea
                    id='message'
                    rows='4'
                    className={styles.message}
                    placeholder='Hello there, I would like to talk about how to...'
                    required
                    onChange={handleChange}
                    value={values.message}
                    onBlur={handleBlur}
                  ></textarea>

                  {errors.message && touched.message && (
                    <p className={styles.errorMsg}>
                      <RiCloseCircleFill /> {errors.message}
                    </p>
                  )}
                </div>
              </div>
              <div>
                <button className={styles.btn} disabled={isSubmitting}>
                  Send Message
                </button>
              </div>
            </form>
          </section>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
