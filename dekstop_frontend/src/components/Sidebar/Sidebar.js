import React from 'react'
import "./Sidebar.css"
import logo from "../../images/Opspad.png"
import ball from "../../images/volleyball.png"
import down from "../../images/down.png"
import plus from "../../images/plus.png"

const Sidebar = () => {
  return (
    <div className='server'>
        <div className="server-container">
            <img src={logo} alt="logo" className='logo' />
            <div className="drop-down">
                <img src={ball} alt="" className='ball'/>
                <p>Server List</p>
                <img src={down} alt="" className='down'/>
            </div>
            <div className="list">
                <ul>
                    <li>HNG Server</li>
                    <li>AYO Server</li>
                    <li>OMP Server</li>
                </ul>
            </div>
            <div className="butt">
                <button className="add">Add Server</button>
                <img src={plus} alt="" />
            </div>
            <p>Setting</p>
        </div>
    </div>
  )
}

export default Sidebar