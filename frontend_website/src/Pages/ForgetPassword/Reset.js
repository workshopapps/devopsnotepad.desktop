import React, { useState } from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate } from "react-router-dom";
import logo from "../ForgetPassword/Images/logo.png"

const Reset = () => {
    const [form, setForm] = useState({
        email: '',
        emailIsValid: false,
        emailIsFocus: false,
        formIsValid: false,
    });
    const [err, setErr] = useState('')
    const emailOnChangeHandler = (e) => {
        setForm((prev) => {
            return { ...prev, email: e.target.value };
        });

        if (form.email.includes('@')) {
            setForm((prev) => {
                return { ...prev, emailIsValid: true };
            });
        } else {
            setForm((prev) => {
                return { ...prev, emailIsValid: false };
            });
        }
    };
    const emailOnBlurHandler = (e) => {
        setForm((prev) => {
            return { ...prev, emailIsFocus: true };
        });
    };
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault();
        fetch('https://opspad.hng.tech/api/auth/reset-password', {
            // mode: 'no-cors',
            method: "POST",
            body: JSON.stringify({
                email: form.email
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                response.json()
                if (response.status === 200) (navigate('/checkemail'))
                else {
                    setErr('Something went wrong :/')
                }
            })
            .then(json => console.log(json));
    }
    return (
        <div className={forgetStyles.Reset}>
            <div className={forgetStyles.logoImg}>
                <img src={logo} alt="" />
            </div>
            <h1>PASSWORD RESET</h1>
            <h3 style={{ color: 'red' }}>{err}</h3>
            <p>Enter your Opspad <span>username</span> or the <span>email address</span>  you
                used to register.  We’ll send you an email with your username
                and a link to reset your password.</p>

            <div className={forgetStyles.inputEmail}>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="email">Email/Username</label>
                    <input
                        type="email"
                        id="Email"
                        name="email"
                        placeholder='example@email.com'
                        value={form.email}
                        required
                        onChange={emailOnChangeHandler}
                        onBlur={emailOnBlurHandler}
                        invalid={!form.emailIsValid && form.emailIsFocus ? 'invalid' : ''}
                    />
                    <button className={forgetStyles.submitBtn} type="submit">Submit</button>
                    <button onClick={() => navigate('/login')} style={{ backgroundColor: '#fff', border: '1px solid blue', color: 'blue' }} className={forgetStyles.submitBtn}>Cancel</button>

                </form>
            </div>

            <p>If you still need help, contact <span>Opspad Support</span></p>
        </div>


    );
}

export default Reset;
