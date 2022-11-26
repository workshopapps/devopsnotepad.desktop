import React from 'react'
import "./Modal.css"
import tick from "./tick.png"

export default function Modal(props){

    if (props.modal === false){
        return null
    }

  return (
    <div className='modal' onMouseDownCapture={close}>
        <div className="modal-contain" onMouseDownCapture={(e) => {e.stopPropagation()}}>
            <div className="modal-box">
                <img src={tick} alt="" className='tick'/>
                <h4>Server Added Successfully </h4>
                <p>You have successfully added a <br /> new server </p>
                <button type='button' className='mod-btn'>Back To Dashboard</button>
            </div>
        </div>
    </div>
  )
}
