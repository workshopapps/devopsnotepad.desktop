import React from 'react'
import { accordionData } from './data'
import Accordion from './Accordion/Accordion'
import style from './Faq.module.css'

const Faq = () => {
  return (
    <div className={style.accordion}>
      {accordionData.map((item, index) => (
        <Accordion key={index} Data={item} />
      ))}
    </div>
  )
}

export default Faq