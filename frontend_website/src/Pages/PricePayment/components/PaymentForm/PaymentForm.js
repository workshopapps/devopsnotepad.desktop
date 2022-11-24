import React, { useState } from 'react';
import formStyle from './PaymentForm.module.css';
import Verve from '../../images/verve.svg';
import Mastercard from '../../images/mastercard.svg';
import Visa from '../../images/visa.svg';

const PaymentForm = () => {
  const [person, setPerson] = useState({
    cardNumber: '',
    cardName: '',
    Date: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setPerson({ ...person, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className={formStyle.formContainer} onSubmit={handleSubmit}>
      <form className={formStyle.form}>
        <h2 className={formStyle.payment}>Payment</h2>
        <div className={formStyle.debitCard}>
          <h2 className={formStyle.debitCardHeader}>Debit card</h2>
          <div className={formStyle.debitCardImg}>
            <img className={formStyle.mastercard} src={Mastercard} alt='' />
            <img className={formStyle.visa} src={Visa} alt='' />
            <img className={formStyle.verve} src={Verve} alt='' />
          </div>
        </div>
        <div className={formStyle.formControl}>
          <label className={formStyle.label} htmlFor='cardNumber'>
            Card Number
          </label>
          <input
            type='tel'
            required
            maxLength={19}
            autoComplete='off'
            id='cardNumber'
            name='cardNumber'
            placeholder='0000 0000 0000 0000'
            value={person.cardNumber}
            onChange={handleChange}
            className={formStyle.input}
          />
        </div>
        <div className={formStyle.formControl}>
          <label className={formStyle.label} htmlFor='cardName'>
            Card Name
          </label>
          <input
            type='text'
            required
            autoComplete='off'
            id='cardName'
            name='cardName'
            placeholder='Enter card name here'
            value={person.cardName}
            onChange={handleChange}
            className={formStyle.input}
          />
        </div>
        <div className={formStyle.formControl}>
          <div className={formStyle.lastInputs}>
            <div className={formStyle.miniContainer}>
              <label className={formStyle.label} htmlFor='Date'>
                Date
              </label>
              <input
                type='numeric'
                maxLength={6}
                required
                autoComplete='off'
                id='Date'
                name='Date'
                placeholder='MM/YYYY'
                value={person.Date}
                onChange={handleChange}
                className={formStyle.input}
              />
            </div>
            <div className={formStyle.miniContainer}>
              <label className={formStyle.label} htmlFor='cvv'>
                CVV
              </label>
              <input
                type='numeric'
                maxLength={3}
                required
                autoComplete='off'
                id='cvv'
                name='cvv'
                placeholder='000'
                value={person.cvv}
                onChange={handleChange}
                className={formStyle.input}
              />
            </div>
          </div>
        </div>
        <button type='submit' className={formStyle.priceBtn}>
          Make Payment
        </button>
      </form>
    </div>
  );
};

export default PaymentForm;
