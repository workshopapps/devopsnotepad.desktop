import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { AiOutlinePlus } from 'react-icons/ai'
import { FaTimes } from 'react-icons/fa'
import style from '../Faq.module.css'

const Accordion = ({ Data }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={isActive ? style.accordionItemO : style.accordionItem}>
            <div className={style.accordionTitle} onClick={() => setIsActive(!isActive)}>
                <h2 className={style.titleH1}>{Data.title}</h2>
                <div>{isActive ? <FaTimes className={style.times} /> : <AiOutlinePlus className={style.plus} />}</div>
            </div>
            {isActive ? (
                <div className={style.accordionContent}>
                    <p>{Data.content}</p>
                    <ul>
                        {Data.list?.map(x => <li>{x}</li>)}
                    </ul>
                    <p>{Data?.more}</p>
                    <Link href={Data?.link}>{Data?.link}</Link>
                </div>
            ) : null}
        </div>
    );
};

export default Accordion;