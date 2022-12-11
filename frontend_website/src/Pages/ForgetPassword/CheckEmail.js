import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import CheckEmailImage from "../ForgetPassword/Images/checkemail.png"
import { useNavigate } from 'react-router-dom'

const CheckEmail = () => {
    const navigate = useNavigate()
    return (
        <div className={forgetStyles.CheckEmail}>
            <div className={forgetStyles.image}>
                <img src={CheckEmailImage} alt="" />
            </div>

            <h1>Check your Email</h1>
            <p>We have sent password revovery instructions to your inbox.</p>
            <br />
            <button onClick={() => navigate('/login')} className={forgetStyles.submitBtn} >Back to login {'>'}</button>
        </div>
    );
}

export default CheckEmail;