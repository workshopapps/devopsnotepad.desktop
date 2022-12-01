import React from 'react';
import style from './PricePayment.module.css';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Checkbox from './images/checkmark.svg';

const PricePayment = () => {
  return (
    <section className={style.paymentContainer}>
      <div className={`${style.cardContainer} ${style.cardBorder}`}>
        <h2 className={style.order}>Your Order</h2>
        <div className={style.card}>
          <h4 className={style.title}>Professional</h4>
          <h2 className={style.price}>200usd</h2>
          <ul className={style.list}>
            <li className={style.li}>
              <img className={style.img} src={Checkbox} alt='' />
              <span className={style.span}>Unlimited Servers</span>
            </li>
            <li className={style.li}>
              <img className={style.img} src={Checkbox} alt='' />
              <span className={style.span}>Unlimited notes</span>
            </li>
            <li className={style.li}>
              <img className={style.img} src={Checkbox} alt='' />
              <span className={style.span}>Unlimited downloads</span>
            </li>
            <li className={style.li}>
              <img className={style.img} src={Checkbox} alt='' />
              <span className={style.span}>Third party integration</span>
            </li>
          </ul>
          <button className={style.btn}>Choose Professional</button>
        </div>
      </div>
      <PaymentForm />
    </section>
  );
};

export default PricePayment;
