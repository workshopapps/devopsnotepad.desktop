import React from 'react'
import style from '../PricePayment.module.css'
import Checkbox from '../images/checkmark.svg';
import { useParams } from 'react-router-dom';
import Info from './Prices.json'

const PaymentPlan = () => {
    const { state, id } = useParams()
    return (
        <div className={`${style.cardContainer} ${style.cardBorder}`}>
            <h2 className={style.order}>Your Order</h2>
            <div className={style.card}>
                <h4 className={style.title}>{Info[id].plan}</h4>
                <h2 className={style.price}>{state === "true" ? Info[id].priceYearly : Info[id].priceMonthly}</h2>
                <ul className={style.list}>
                    {Info[id].offer.map((item) => (
                        <li className={style.li}>
                            <img className={style.img} src={Checkbox} alt='' />
                            <span className={style.span}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PaymentPlan