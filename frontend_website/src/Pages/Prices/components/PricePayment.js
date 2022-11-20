import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './PricePayment.css';
import Checkbox from '../checkmark.svg';
import Data from '../Data';
import Verve from '../verve.svg';
import Mastercard from '../mastercard.svg';
import Visa from '../visa.svg';

const PricePayment = () => {
  const { state, index } = useParams();
  const [monthly, setMonthly] = useState('');
  const [yearly, setYearly] = useState('');
  const [person, setPerson] = useState({
    cardNumber: '',
    cardName: '',
    Date: '',
    CVV: '',
  });

  useEffect(() => {
    setMonthly(Data[0].items.index);
    setYearly(Data[1].items.index);
  }, []);
  return (
    <section className="price-payment-container">
      <div className="card-container card-active-border">
        <h2>Your Order</h2>
        <div className="card">
          <h4>Professional</h4>
          <h2>#5,000 / month</h2>
          <ul>
            <li>
              <img src={Checkbox} alt="" />
              <span>Unlimited Servers</span>
            </li>
            <li>
              <img src={Checkbox} alt="" />
              <span>Unlimited notes</span>
            </li>
            <li>
              <img src={Checkbox} alt="" />
              <span>Unlimited downloads</span>
            </li>
            <li>
              <img src={Checkbox} alt="" />
              <span>Third party integration</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="price-payment-form-container">
        <form>
          <div className="debit-card">
            <h2>Debit card</h2>
            <div className="debit-card-image">
              <img src={Mastercard} alt="" />
              <img src={Visa} alt="" />
              <img src={Verve} alt="" />
            </div>
          </div>
          <div className="form-control">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="number"
              required
              autoComplete="off"
              id="cardNumber"
              name="cardNumber"
              placeholder="0000 0000 0000 0000"
              value={person.cardNumber}
            />
          </div>
          <div className="form-control">
            <label htmlFor="cardName">Card Name</label>
            <input
              type="text"
              required
              autoComplete="off"
              id="cardName"
              name="cardName"
              placeholder="Enter card name here"
              value={person.cardName}
            />
          </div>
          <div className="form-control ">
            <div className="half-each">
              <div className="date-container">
                <label htmlFor="Date">Date</label>
                <input
                  type="date"
                  required
                  autoComplete="off"
                  id="Date"
                  name="Date"
                  placeholder="MM/YYYY"
                  value={person.Date}
                />
              </div>
              <div className="cvv-container">
                <label htmlFor="cvv">CVV</label>
                <input
                  type="number"
                  required
                  autoComplete="off"
                  id="cvv"
                  name="cvv"
                  placeholder="000"
                  value={person.CVV}
                />
              </div>
            </div>
          </div>
          <div className="form-control">
            <button type="submit" className="button-class">
              Make Payment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default PricePayment;
