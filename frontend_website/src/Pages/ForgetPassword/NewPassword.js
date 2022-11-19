import React from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { Link } from "react-router-dom";

const NewPassword = () => {
    return ( 
        <div className={forgetStyles.NewPassword}>
            <h1>Password Reset</h1>
            <form action="submit">

             <label for="email">Email/Username</label>
                <input type="text" id="Email" name="email"/>
             <label for="email">Password</label>
                <input type="text" id="Email" name="email"/>
              

                <Link to='/success' ><input type="submit" value="Submit"/></Link>

            </form>
        </div>
     );
}
 
export default NewPassword;