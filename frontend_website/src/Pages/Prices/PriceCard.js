import React from 'react';
import './PriceCard.css';
import Checkbox from './checkmark.svg';

const PriceCard = ({ card, id }) => {
  return (
    <section
      key={id}
      className={
        card.class === 'transparent'
          ? 'card-container transparent'
          : 'card-container colored'
      }
    >
      <div className="inner-card-container">
        <div className="inner-card-align">
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
        <a
          href="#"
          className={
            card.class === 'transparent'
              ? 'btn-for-price white'
              : 'btn-for-price blue'
          }
        >
          {card.button}
        </a>
      </div>
    </section>
  );
};

export default PriceCard;
