import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate } from "react-router-dom";
import verifyimg from "../ForgetPassword/Images/verification.png"

const Verification = () => {
    const navigate = useNavigate()
    return (
        <div className={forgetStyles.Verification}>
            <div className={forgetStyles.verify}>
                <img src={verifyimg} alt="" />
            </div>

            <h1>Verification</h1>
            <p>Enter the OTP code we sent to your email</p>

            <div className={forgetStyles.boxes}>
                <div>
                    <input type="text" required />
                </div>
                <div>
                    <input type="text" required />
                </div>
                <div>
                    <input type="text" required />
                </div>
                <div>
                    <input type="text" required />
                </div>

            </div>
            <button onClick={() => navigate('/login')} className={forgetStyles.submitBtn} type="submit">Back to login {'>'}</button>
        </div>
    );
}

export default Verification;


// /newpassword"