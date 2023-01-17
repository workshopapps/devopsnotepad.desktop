import React, { useState } from 'react'
import Input from '../../ComingSoon/Input/Input'
import style from './HeroSection.module.css'

import HeroImg from '../../../assets/free_trial-assets/hero.png'

const HeroSection = () => {
    const [email, setEmail] = useState('');
    // const [buttonclick, setButtonclick] = useState(false);

    const handleSubmit = event => {
        event.preventDefault();
        setEmail('');
        fetch('https://opspad.dev/api/notify-me/', {
            method: 'POST',
            body: JSON.stringify({
                email
            }),
            headers: {
                "accept": "application/json",
                "Content-Type": "application/json",
            }
        }).then((response) => {
            response.json()
            if (response.status === 200) {
                // setButtonclick(true)
            }
        })
    };
    return (
        <div className={style.THero}>
            <div className={style.THeroText}>
                <h1 className={style.HeroH1}>Manage your server on the go <span className={style.HeroH1Blue}>for free</span></h1>
                <p>Save time and work more efficiently using Opspad. Sign-Up
                    for a free trial and get to setup your account to view any
                    type of logs in less than a minute added with safely storing
                    your server information</p>
                <div className={style.FormTextDiv}>
                    <form className={style.HeroForm} onSubmit={handleSubmit}>
                        <label className={style.label}>
                            Enter your email address
                            <Input
                                className={style.input}
                                type='email'
                                name='email'
                                required
                                placeholder='email@example.com'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>
                        <button className={style.button}>Start free trial</button>
                    </form>
                    <h4 className='HeroH4'>Sign up for free. No credit cards required.</h4>
                    <p>By entering your email, you have agreed to receiving marketing emails from Opspad.</p>
                </div>

            </div>

            <img className={style.THeroImg} src={HeroImg} alt='' />
        </div>
    )
}

export default HeroSection