import React from 'react'
import { BiPencil } from 'react-icons/bi'
import { MdDeleteOutline } from 'react-icons/md'
import style from './ServerOptionsModal.module.css'

const ServerOptionsModal = () => {
    return (
        <div className={style.modalContainer}>
            <div className={style.edit}>
                <BiPencil />
                <p>Edit Server</p>
            </div>
            <div className={style.delete}>
                <MdDeleteOutline />
                <p>Delete Server</p>
            </div>
        </div>
    )
}

export default ServerOptionsModal