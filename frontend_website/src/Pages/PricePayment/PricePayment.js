import React from 'react';
import style from './PricePayment.module.css';
import PaymentForm from './components/PaymentForm/PaymentForm';
import Navigation from '../../Component/Navigation/Navigation';
import Footer from '../../Component/Footer/Footer';
import { useParams } from 'react-router-dom';
import PaymentPlan from './components/PaymentPlan';

const PricePayment = () => {
  const { state, id } = useParams()
  return (
    <>
      <Navigation />
      <section className={style.paymentContainer}>
        <PaymentPlan state={state} id={id} />
        <PaymentForm />
      </section>
      <Footer />
    </>
  );
};

export default PricePayment;
