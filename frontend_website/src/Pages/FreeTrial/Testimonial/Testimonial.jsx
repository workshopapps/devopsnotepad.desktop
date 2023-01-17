import React from 'react'
import style from './Testimonial.module.css'
import { BsFillPersonFill, BsFillStarFill } from 'react-icons/bs'

const Testimonial = () => {
    const data = [
        {
            name: 'Sarah Walter',
            text: '"I’ve been able to move around more, knowing I can track my servers on the go!"'
        },
        {
            name: 'David Onyezuru',
            text: '"It’s amazing how quickly and easily it is to configure the type of logs you want to receive."'
        },
        {
            name: 'Raymond Akinbote',
            text: '“I usually keep relevant server information in a separate notepad. I believe opspad was watching people like me before servers "'
        },
        {
            name: ' Bolu Ajoke',
            text: '“Having a hard time remembering passwords for various server tools, Opspad has made saving tool credentials a breeze”'
        }
    ]
    return (
        <section className={style.testimonial}>
            {data.map((card) => (
                <div className={style.card}>
                    <div className={style.head}>
                        <BsFillPersonFill />
                    </div>
                    <div className={style.rating}>
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                        <BsFillStarFill />
                    </div>
                    <h4>{card.name}</h4>
                    <p>{card.text}</p>
                </div>
            ))}
        </section>
    )
}

export default Testimonial