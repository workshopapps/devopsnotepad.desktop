import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import successimg from "../ForgetPassword/Images/success.png"
import { useNavigate } from "react-router-dom";


const Success = () => {
    const navigate = useNavigate()
    return (
        <div className={forgetStyles.Success}>
            <div className={forgetStyles.logoImg}>
                <img src={successimg} alt="" />
            </div>
            <p>Your password has been changed successfully. </p>
            <button onClick={() => navigate('/login')} className={forgetStyles.submitBtn} type="submit">Back to login {'>'}</button>
        </div>
    );
}

export default Success;