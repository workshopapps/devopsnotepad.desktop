import React from 'react'
import arrowleft from './Images/arrowleft.png'
import img1 from './Images/img1.png'
import img2 from './Images/img2.png'
import img3 from './Images/img3.png'
import img4 from './Images/img4.png'
import img5 from './Images/img5.png'
import img6 from './Images/img6.png'

import style from './NewsRoomViewMore.module.css'

const NewsRoomViewMore = () =>{
    return (
            <div className={style.NewsRoomViewMoreWrapper}>
               <div className={style.NewsRoomViewMore}>
                    <div className={style.Newsroomminilandingpage}>
                        <h1>Stay<span> up to date</span> with our activities</h1>
                        <p>Stay up-to-date with latest company news,product updates, and industry-related events.</p>
                    </div>

                    <div className={style.companyNews}>
                        <div className={style.companyNewsHeader}>
                            <p>Company News</p>
                            <a href="/news-room">
                                <button>
                                    <img src={arrowleft} alt="" />
                                    Back 
                                </button>
                            </a>
                        </div>

                        <div className={style.companyNewsPostAll}>
                            <div className={style.companyNewsPost}>
                                <img src={img1} alt="" />
                                <h1>OpsPad v1.0: The DevOps engineer pocket assistant.</h1>
                                <p>November 5, 2022</p>
                            </div>
                            <div className={style.companyNewsPost}>
                                <img src={img2} alt="" />
                                <h1>Opspad v1.0 launch: What to expect.</h1>
                                <p>November 15, 2022</p>
                            </div>
                            <div className={style.companyNewsPost}>
                                <img src={img3} alt="" />
                                <h1>OpsPad v2.0: A new way to take your notes!</h1>
                                <p>November 15, 2022</p>
                            </div>
                            <div className={style.companyNewsPost}>
                                <img src={img4} alt="" />
                                <h1>OpsPad v1.0: The DevOps engineer pocket assistant.</h1>
                                <p>November 5, 2022</p>
                            </div>
                            <div className={style.companyNewsPost}>
                                <img src={img5} alt="" />
                                <h1>Opspad v1.0 launch: What to expect.</h1>
                                <p>November 15, 2022</p>
                            </div>
                            <div className={style.companyNewsPost}>
                                <img src={img6} alt="" />
                                <h1>OpsPad v2.0: A new way to take your notes!</h1>
                                <p>November 15, 2022</p>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        )
}

export default NewsRoomViewMore