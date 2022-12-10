import React, { useState } from "react";
import forgetStyles from "../ForgetPassword/ForgetPassword.module.css"
import { useNavigate, useSearchParams } from "react-router-dom";
import validator from 'validator'
import { AiFillEyeInvisible } from 'react-icons/ai'
import { AiFillEye } from 'react-icons/ai';
import classes from '../Login/Input.module.css'

const NewPassword = () => {
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [reset] = useState(false)
    const [serverErr, setServerErr] = useState('')
    const [err, setErr] = useState('')
    const [searchParams] = useSearchParams()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordConfirm, setShowPasswordConfirm] = useState(false)
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
                        <div className={forgetStyles.InputContainer}>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="Email"
                                name="email"
                                required
                                className={forgetStyles.passwordInputs}
                                onChange={e => {
                                    setPassword(e.target.value);
                                    validate(e.target.value)
                                }} />
                            <div className={classes.eye} style={{ top: '27px' }} onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ?
                                    <span className={classes.eyeSvg}><AiFillEyeInvisible /></span> :
                                    <span className={classes.eyeSvg}><AiFillEye /></span>}
                            </div>
                        </div>
                        <label htmlFor="password">Confirm Password</label>
                        <div className={forgetStyles.InputContainer}>
                            <input
                                type={showPasswordConfirm ? 'text' : 'password'}
                                id="Email"
                                name="email"
                                required
                                className={forgetStyles.passwordInputs}
                                onChange={e => {
                                    setConfirmPassword(e.target.value);
                                    validate(e.target.value)
                                }} />
                            <div className={classes.eye} style={{ top: '27px' }} onClick={() => setShowPasswordConfirm(!showPasswordConfirm)}>
                                {showPasswordConfirm ?
                                    <span className={classes.eyeSvg}><AiFillEyeInvisible /></span> :
                                    <span className={classes.eyeSvg}><AiFillEye /></span>}
                            </div>
                        </div>

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