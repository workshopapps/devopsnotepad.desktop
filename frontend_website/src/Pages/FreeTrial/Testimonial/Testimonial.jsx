import React from 'react'
import style from './Testimonial.module.css'
import { BsFillStarFill } from 'react-icons/bs'

import imgNwoman from '../Img/Nwoman.jpg'
import imgNman from '../Img/Nman.jpg'
import imgWman from '../Img/WMan.jpg'
import imgWman1 from '../Img/WMan1.jpg'
// import imgWman1 from '../Img/Nman.jpg'

const Testimonial = () => {
    const data = [
        {
            name: 'Glory James',
            text: '"I’ve been able to move around more, knowing I can track my servers on the go!"',
            img: imgNwoman
        },
        {
            name: 'Stephen friday',
            text: '"It’s amazing how quickly and easily it is to configure the type of logs you want to receive."',
            img: imgNman
        },
        {
            name: 'Bernard Davis',
            text: '“I usually keep relevant server information in a separate notepad. I believe opspad was watching people like me before servers "',
            img: imgWman
        },
        {
            name: ' Philip Anderson',
            text: '“Having a hard time remembering passwords for various server tools, Opspad has made saving tool credentials a breeze”',
            img: imgWman1
        }
    ]
    return (
        <section className={style.testimonial}>
            {data.map((card) => (
                <div className={style.card}>
                    <div className={style.head}>
                        {/* <BsFillPersonFill /> */}
                        <img style={style.testimonialImage} src={card.img} alt="" />
                    </div>
                    <div className={style.rating}>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                    <h4>{card.name}</h4>
                    <p className={style.cardText}>{card.text}</p>
                </div>
            ))}
        </section>
    )
}

export default Testimonial