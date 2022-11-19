import React from 'react'
import "./NewsRoom.css"
import LeftImg from "./Images/Rectangle 153.png"
import { rightRoom } from "./RoomData"
import { industryNews } from "./RoomData"
import RoomCard from "./RoomCard"

const NewsRoom = () => {
  return (
    <section className="newsrooms">
      <div className="newsroom__container">
        <h2>Stay up to date with our activities</h2>
        <p>Stay up-to-date with latest company news,product updates, and industry-related events.</p>
          <div className="company__news">
            <div className="TS__CNV">
              <h4>Company News</h4>
              <small>View All</small>
            </div>
              <div className="newsroom__RT">
            <div className="left__room">
              <div className="left__newsroom-lish">
                <div className="left__img">
                  <img src={LeftImg} alt='left she'/>
                </div>
                <div className="left__DT">
                <small>November 5, 2022</small>
                <h4>OpsPad v1.0: <br/>
                  The DevOps engineer pocket assistant</h4>
                  </div>
              </div>
            
            </div>
            <div className="right__room">
              <div className="right__wrapper-room">
                  {rightRoom.map(({id, image, date, topic, className}) =>{
                    return(
                      <RoomCard key={id} className="newsroom__rights-right">
                        <div className={`news__right-img ${className}`}>
                            <img src={image} alt="first img"/>
                        </div>
                        <div className="newsroom__DT">
                        <small>{date}</small>
                        <h4>{topic}</h4>
                        </div>
                      </RoomCard>
                    )
                  })}
              </div>
            </div>
            </div>
          </div>
          <div className="industry__releases">
          <div className="TS__CNV">
          <h4>Industry Releases</h4>
              <small>View All</small>
            </div>

            <div className="down__room">
              <div className="down__wrapper-room">
                  {industryNews.map(({id, image, date, topic}) =>{
                    return(
                      <RoomCard key={id} className="newsroom__downs-down">
                        <div className="down_img">
                            <img src={image} alt="down img"/>
                        </div>
                        <div className="newsroom__DT-down">
                        <small>{date}</small>
                        <h4>{topic}</h4>
                        </div>
                      </RoomCard>
                    )
                  })}
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default NewsRoom