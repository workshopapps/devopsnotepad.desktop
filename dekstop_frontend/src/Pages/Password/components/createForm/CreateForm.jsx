import React from 'react'
import create from './CreateForm.module.css'

function CreateForm() {

    function handleSubmit(e){
        return e.preventDefault();
    }

  return (
    <div className={create.formContainer}>
        <form className={create.form} onSubmit={handleSubmit}>
            <div className={create.headerContainer}>
            <h1 className={create.formHeader}>Add password</h1>
            </div>
            <div className={create.control}>
                <label className={create.label} htmlFor="ToolName">Tool Name</label>
                <input className={create.input} type="text" name="ToolName" />
            </div>
            <div className={create.control}>
                <label className={create.label} htmlFor="NewPassword">New Password</label>
                <input className={create.input} type="numeric" name="NewPassword" />
            </div>
            <div className={create.control}>
                <label className={create.label} htmlFor="ConfirmPassWord">Confirm Password</label>
                <input className={create.input} type="text" name="ConfirmPassWord" />
            </div>
            <button type='submit'>Save new password</button>
        </form>
    </div>
  )
}

export default CreateForm