import React from 'react'
import img1 from '../../../assets/free_trial-assets/Vector1.svg'
import img2 from '../../../assets/free_trial-assets/Vector2.svg'
import img3 from '../../../assets/free_trial-assets/Vector3.svg'
import style from './Info.module.css'

const Info = () => {

    const data = [
        {
            img: img1,
            header: 'All in one',
            text: 'Keep track of critical server events and alerts to determine the availablilty of your server'
        },
        {
            img: img2,
            header: 'Secured Platform',
            text: 'Millions of users trust Shopify to manage their online stores.'
        },
        {
            img: img3,
            header: 'Notes',
            text: 'Jot down notes of events  that occur on each server. Store information while troubleshooting.'
        },
    ]

    return (
        <div className={style.info}>
            {data.map((card, index) => (
                <div key={index} className={style.infoCard}>
                    <div className={style.imgWrap}>
                        <img src={card.img} alt='' />
                    </div>
                    <h4>{card.header}</h4>
                    <p>{card.text}</p>
                </div>
            ))}
        </div>
    )
}

export default Info