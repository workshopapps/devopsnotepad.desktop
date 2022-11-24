import React from 'react'
import "./Modal.css"
import tick from "../../images/tick.png"

const Modal = ({modal, open, close}) => {

    if (modal === false){
        return null
    }

  return (
    <div className='modal' onClick={close}>
        <div className="modal-contain" onClick={(e) => {e.stopPropagation()}}>
            <div className="modal-box">
                <img src={tick} alt="" className='tick'/>
                <h4>Server Added Successfully </h4>
                <p>You have successfully added a <br /> new server </p>
                <button className='mod-btn'>Back To Dashboard</button>
            </div>
        </div>
    </div>
  )
}

export default Modal