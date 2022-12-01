import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { Link } from "react-router-dom";
import logo from "../ForgetPassword/Images/logo.png"


const Reset = () => {
    return (
        <div className={forgetStyles.Reset}>
            <div className={forgetStyles.logoImg}>
                <img src={logo} alt="" />
            </div>
            <h1>PASSWORD RESET</h1>
            <p>Enter your Opspad <span>username</span> or the <span>email address</span>  you
                used to register.  We’ll send you an email with your username
                and a link to reset your password.</p>

            <div className={forgetStyles.inputEmail}>

                <form>
                    <label for="email">Email/Username</label>
                    <input type="text" id="Email" name="email" />
                    <Link to='/checkemail' ><input type="submit" value="Submit" /></Link>
                    <Link><input type="cancel" value="Cancel" /></Link>

                </form>
            </div>

            <p>If you still need help, contact <span>Opspad Support</span></p>
        </div>


    );
}

export default Reset;
