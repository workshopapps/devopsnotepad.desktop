import React, { useState } from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";

const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [reset, setReset] = useState(false)
    const [err, setErr] = useState('')
    const [searchParams] = useSearchParams()
    const Params = Object.fromEntries([...searchParams])
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();

        const data = {
            password: password,
            token: Params.token,
            id: Params.id
        }

        fetch('https://opspad.hng.tech/api/auth/update-password', {
            // mode: 'no-cors',
            method: "POST",
            body: JSON.stringify({
                data
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                response.json()
                if (response.status === 200) {
                    (navigate('/success'))
                    setErr('')
                }
                else {
                    setErr('Something went wrong :/')
                }
            })
            .then(json => console.log(json));
    }
    return (
        <>
            {reset ? (navigate('/login')) : (
                <div className={forgetStyles.NewPassword}>
                    <h1>Password Reset</h1>
                    <h3 style={{ color: 'red' }}>{err}</h3>
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