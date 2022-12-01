import React from 'react';
import style from './PriceCard.module.css';
import Checkbox from '../../images/checkmark.svg';
import { Link } from 'react-router-dom';

const PriceCard = ({ card, id, toggleMonthly }) => {
  const containerNature =
    card.class === 'transparent' ? style.transparent : style.colored;
  const buttonNature = card.class === 'transparent' ? style.white : style.blue;
  return (
    <section key={id} className={`${style.cardContainer} ${containerNature}`}>
      <div className={style.innerCardContainer}>
        <div className={style.innerCardAlign}>
          <h4 className={style.title}>{card.title}</h4>
          <h2 className={style.price}>
            {card.price}{card.price !== 'Free' ? (<span style={{ fontSize: '14px' }}>USD</span>) : null}</h2>
          <ul className={style.list}>
            {card.list.map((item, index) => {
              return (
                <li className={style.li}>
                  <img className={style.img} src={Checkbox} alt='' />
                  <span className={style.span}>{item}</span>
                </li>
              );
            })}
          </ul>
        </div>
        <Link to={`/prices/payment/${toggleMonthly}/${id}`}>
          <button className={`${style.btn} ${buttonNature}`}>
            {card.button}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default PriceCard;
