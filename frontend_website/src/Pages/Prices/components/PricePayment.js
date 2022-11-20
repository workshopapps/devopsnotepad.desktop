import React from 'react';
import './PricePayment.css';
import Checkbox from '../checkmark.svg';

const PricePayment = () => {
  return (
    <section className="price-payment-container">
      <div className="card-container card-active-border">
        <div className="card">
          <h4>{card.title}</h4>
          <h2>{card.price}</h2>
          <ul>
            {card.list.map((item, index) => {
              return (
                <li>
                  <img src={Checkbox} alt="" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="price-payment-form-container">
        <form></form>
      </div>
    </section>
  );
};

export default PricePayment;
