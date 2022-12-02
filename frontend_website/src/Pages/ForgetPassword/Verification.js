import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { Link } from "react-router-dom";
import verifyimg from "../ForgetPassword/Images/verification.png"

const Verification = () => {
    return ( 
        <div className={forgetStyles.Verification}>
                <div  className={forgetStyles.verify}>
                    <img src={verifyimg} alt="" />
                </div>

                <h1>Verification</h1>
                <p>Enter the OTP code we sent to your email</p>

                <div className={forgetStyles.boxes}>
                    <div>
                    <input type="text" />
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                    <div>
                    <input type="text" />
                    </div>
                 
                </div>

                <Link to='/newpassword'><input type="submit" value="Continue >"/></Link>
        </div>
     );
}
 
export default Verification;


// /newpassword"