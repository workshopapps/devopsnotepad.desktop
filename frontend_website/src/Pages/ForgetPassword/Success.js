import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import successimg from "../ForgetPassword/Images/success.png"
import { Link } from "react-router-dom";


const Success = () => {
    return ( 
        <div className={forgetStyles.Success}>
           
            <div className={forgetStyles.logoImg}>
    <img src={successimg} alt="" />
                    </div>
        
           <p>Your password has been changed successfully. </p>

           <Link to='/' ><input type="submit" value="Back to login"/></Link>

        </div>
     );
}
 
export default Success;