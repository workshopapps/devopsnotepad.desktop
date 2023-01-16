import React from 'react';
import style from './ContactUs.module.css';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';

function ContactUs() {
  return (
    <>
      <Navigation />
      <section className={style.container}>
        <h1>Get in touch</h1>
        <p>
          Reach out to our support team to learn more about our platform and
          learn how Opspad can solve your server management challenges.
        </p>

        <div className={style.card_container}>
          <div className={style.card}>
            <h2>Support</h2>
            <p>
              Reach out to our support team to report any issues and learn more
              about our platform.
            </p>
            <button className={style.btn}>Contact Support</button>
          </div>

          <div className={style.card}>
            <h2>Admin</h2>
            <p>
              Have any suggestions on improvements or bug report reach out to
              our admin team.
            </p>
            <a href='!#' className={style.btn}>
              Email Admin
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ContactUs;
