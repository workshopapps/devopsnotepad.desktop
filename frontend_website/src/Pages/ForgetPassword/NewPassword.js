import React, { useState } from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";

const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [reset, setReset] = useState(false)
    const [searchParams] = useSearchParams()
    const Params = Object.fromEntries([...searchParams])
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            password: password,
            confirmPassword: confirmPassword,
            token: Params.token,
            id: Params.id
        }

        fetch('https://opspad.hng.tech/api/auth/update-password', {
            mode: 'no-cors',
            method: "POST",
            body: data,
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setReset(true)
            })
            .catch(err => console.log(err))
            (navigate('/success'))
    }
    return (
        <>
            {reset ? (navigate('/login')) : (
                <div className={forgetStyles.NewPassword}>
                    <h1>Password Reset</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="Email" name="email" required onChange={e => setPassword(e.target.value)} />
                        <label htmlFor="password">Confirm Password</label>
                        <input type="password" id="Email" name="email" required onChange={e => setConfirmPassword(e.target.value)} />
                        <button disabled={password !== confirmPassword} className={forgetStyles.submitBtn} type='submit'>Submit</button>
                    </form>
                </div>
            )}

        </>


    );
}

export default NewPassword;