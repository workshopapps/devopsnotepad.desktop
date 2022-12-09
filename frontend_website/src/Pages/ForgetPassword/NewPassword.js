import React, { useState } from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import validator from 'validator'

const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [reset] = useState(false)
    const [serverErr, setServerErr] = useState('')
    const [err, setErr] = useState('')
    const [searchParams] = useSearchParams()
    const Params = Object.fromEntries([...searchParams])
    const navigate = useNavigate()
    const handleSubmit = e => {
        e.preventDefault();


        fetch('https://opspad.hng.tech/api/auth/update-password', {
            // mode: 'no-cors',
            method: "POST",
            body: JSON.stringify(
                {
                    password: password,
                    token: Params.token,
                    id: Params.id
                }
            ),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                response.json()
                if (response.status === 200) {
                    (navigate('/success'))
                    setServerErr('')
                }
                else {
                    setServerErr('Something went wrong :/')
                }
            })
            .then(json => console.log(json));
    }
    const validate = (value) => {

        if (validator.isStrongPassword(value, {
            minLength: 8, minLowercase: 1,
            minUppercase: 1, minNumbers: 1, minSymbols: 1
        })) {
            setErr('')
        } else {
            setErr('MinLength(8), uppercase, lowercase, character, number')
        }
    }
    return (
        <>
            {reset ? (navigate('/login')) : (
                <div className={forgetStyles.NewPassword}>
                    <h1>Password Reset</h1>
                    <h3 style={{ color: 'red' }}>{serverErr}</h3>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="Email"
                            name="email"
                            required
                            onChange={e => {
                                setPassword(e.target.value);
                                validate(e.target.value)
                            }} />
                        <label htmlFor="password">Confirm Password</label>
                        <input
                            type="password"
                            id="Email"
                            name="email"
                            required
                            onChange={e => {
                                setConfirmPassword(e.target.value);
                                validate(e.target.value)
                            }} />
                        {err === '' ? null :
                            <span style={{
                                fontWeight: 'bold',
                                color: 'red',
                            }}>{err}</span>}
                        <button disabled={password !== confirmPassword} className={forgetStyles.submitBtn} type='submit'>Submit</button>
                    </form>
                </div>
            )}

        </>


    );
}

export default NewPassword;