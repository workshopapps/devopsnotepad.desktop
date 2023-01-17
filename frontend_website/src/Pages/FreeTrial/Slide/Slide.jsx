import React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
import style from './Slide.module.css'

import img1 from '../../../assets/free_trial-assets/img1.png'
import img2 from '../../../assets/free_trial-assets/img2.png'
import img3 from '../../../assets/free_trial-assets/img3.png'
import img4 from '../../../assets/free_trial-assets/img4.png'
import img5 from '../../../assets/free_trial-assets/img5.png'

const Slide = () => {

    // const { scrollYProgress } = useScroll()
    // const x = useTransform(scrollYProgress, [0, 1], [0, 100])

    const data = [img1, img2, img3, img4, img5]
    return (
        <div className={style.slide}>
            <h1 className={style.slideH1}><span className={style.blue}>Trusted</span> by happy Clients</h1>
            <div className={style.images}>
                {data.map((img, index) => (
                    <img key={index} src={img} alt='' />
                ))}
            </div>
        </div>
    )
}

export default Slide