import React from 'react';
import styles from './ContactUs.module.css';
// import email from './images/email.png';
// import phone from './images/phone.png';
import support from './images/support.png';
import sales from './images/sales.png';
import press from './images/press.png';
import developer from './images/developer.png';
import { useFormik } from 'formik';
import { contactUsSchema } from './Schema';
import { Link } from 'react-router-dom';
import { RiCloseCircleFill } from 'react-icons/ri';

const onSubmit = async (values, actions) => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  alert('Form Submitted');
  actions.resetForm();
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
      firstName: '',
      lastName: '',
      phone: '',
      subject: '',
      message: '',
    },

    validationSchema: contactUsSchema,
    onSubmit,
  });

  return (
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
                If you’re having trouble with OpsPad, check out the FAQs section
                or get assistance from other OpsPad users in our discussion
                forums.
              </p>

              <button className={styles.btns}>
                <Link to='/faq'>GET SUPPORT</Link>
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
                For press and partnerships enquiries, Click on the button below.
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
                <Link to='/integrations'>INTEGRATIONS</Link>
              </button>
            </div>
          </div>
        </section>

        <section className={styles.wrap}>
          <p className={styles.reachOut}> Need More Help?</p>

          <p className={styles.canHelp}>
            We want to hear from you. Let us know how <br /> we can help.
          </p>
        </section>

        <section className={styles.wrapper}>
          <form action='#' autoComplete='off' onSubmit={handleSubmit}>
            <div className={styles.row}>
              <div className={styles.col}>
                <label for='firstName'>First Name</label>
                <input
                  type='text'
                  id='firstName'
                  placeholder='What’s your first name?'
                  className={styles.end}
                  required
                  onChange={handleChange}
                  value={values.firstName}
                  onBlur={handleBlur}
                />

                {errors.firstName && touched.firstName && (
                  <p className={styles.errorMsg}>
                    {' '}
                    <RiCloseCircleFill /> {errors.firstName}{' '}
                  </p>
                )}
              </div>

              <div className={styles.col}>
                <label for='lastName'>Last Name</label>
                <input
                  type='text'
                  id='lastName'
                  placeholder='What’s your last name?'
                  className={styles.start}
                  required
                  onChange={handleChange}
                  value={values.lastName}
                  onBlur={handleBlur}
                />

                {errors.lastName && touched.lastName && (
                  <p className={styles.errorMsg}>
                    {' '}
                    <RiCloseCircleFill /> {errors.lastName}{' '}
                  </p>
                )}
              </div>
            </div>

            <div className={styles.row}>
              <div className={styles.col}>
                <label for='phone'>Phone Number</label>
                <input
                  type='number'
                  id='phone'
                  placeholder='What’s your phone number?'
                  className={styles.end}
                  required
                  onChange={handleChange}
                  value={values.phone}
                  onBlur={handleBlur}
                />

                {errors.phone && touched.phone && (
                  <p className={styles.errorMsg}>
                    {' '}
                    <RiCloseCircleFill /> {errors.phone}{' '}
                  </p>
                )}
              </div>

              <div className={styles.col}>
                <label for='subject'>Subject</label>
                <input
                  type='text'
                  placeholder='How can we help?'
                  id='subject'
                  className={styles.start}
                  required
                  onChange={handleChange}
                  value={values.subject}
                  onBlur={handleBlur}
                />

                {errors.subject && touched.subject && (
                  <p className={styles.errorMsg}>
                    {' '}
                    <RiCloseCircleFill /> {errors.subject}{' '}
                  </p>
                )}
              </div>
            </div>

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
                  {' '}
                  <RiCloseCircleFill /> {errors.message}{' '}
                </p>
              )}
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
  );
};

export default ContactUs;
