import React from 'react'
// import { motion, useScroll, useTransform } from 'framer-motion'
import style from './Slide.module.css'

import img1 from '../../../assets/free_trial-assets/img1.png'
import img2 from '../../../assets/free_trial-assets/img2.png'
import img3 from '../../../assets/free_trial-assets/img3.png'
import img4 from '../../../assets/free_trial-assets/img4.png'
import img5 from '../../../assets/free_trial-assets/img5.png'
import img6 from '../../../assets/free_trial-assets/img6.png'
import img7 from '../../../assets/free_trial-assets/img7.png'
import img8 from '../../../assets/free_trial-assets/img8.png'
import img9 from '../../../assets/free_trial-assets/img9.png'
import img10 from '../../../assets/free_trial-assets/img10.png'
import img11 from '../../../assets/free_trial-assets/img11.png'
import img12 from '../../../assets/free_trial-assets/img12.png'
import img13 from '../../../assets/free_trial-assets/img13.png'
import img14 from '../../../assets/free_trial-assets/img14.png'
import img15 from '../../../assets/free_trial-assets/img15.png'
import img16 from '../../../assets/free_trial-assets/img16.png'
import img17 from '../../../assets/free_trial-assets/img17.png'
import img18 from '../../../assets/free_trial-assets/img18.png'
// import img19 from '../../../assets/free_trial-assets/img19.png'
import img20 from '../../../assets/free_trial-assets/img20.png'
import img21 from '../../../assets/free_trial-assets/img21.png'
import img22 from '../../../assets/free_trial-assets/img22.png'
import img23 from '../../../assets/free_trial-assets/img23.png'
import img24 from '../../../assets/free_trial-assets/img24.png'
import img25 from '../../../assets/free_trial-assets/img25.png'



const Slide = () => {

    // const { scrollYProgress } = useScroll()
    // const x = useTransform(scrollYProgress, [0, 1], [0, 100])

    const data = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12,
        img13, img14, img15, img16, img18, img17, img20, img21, img22, img23, img24, img25
    ]
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