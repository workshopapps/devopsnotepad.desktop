import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import CheckEmailImage from "../ForgetPassword/Images/checkemail.png"
// import Verification from "./Verification";
import { Link } from "react-router-dom";

const CheckEmail = () => {
    return (    
        <div className={forgetStyles.CheckEmail}>
            <div className={forgetStyles.image}>
            <img src={CheckEmailImage} alt="" />
            </div>
            
            <h1>Check your Email</h1>
            <p>We have sent password revovery instructions to your inbox.</p>
            <br />
            <Link to="/verfication" ><input type="submit" value="Open Email App"/></Link>
           

        </div>
      );
}
 
export default CheckEmail;