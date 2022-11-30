import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import create from './EditForm.module.css';

function EditForm({ user, closeEditForm, handleEdit }) {
	EditForm.propTypes = {
		user: PropTypes.node.isRequired,
        closeEditForm: PropTypes.node.isRequired,
        handleEdit: PropTypes.node.isRequired,
	};

	const [formerUser, setFormerUser] = useState('');

	const [input, setInput] = useState({
		ToolName: '',
		CurrentPassword: '',
		NewPassword: '',
	});

	const handleSubmit = (e) => {
		e.preventDefault();

        if(input.CurrentPassword !== formerUser.password){
            // eslint-disable-next-line 
            alert('Incorrect current password, action revoked!')
        }

        if(input.CurrentPassword === input.NewPassword){
            setInput({...input, NewPassword: ''})
            // eslint-disable-next-line 
            alert('Choose a new password different from current password')
        }

		if (input.CurrentPassword === formerUser.password && input.CurrentPassword !== input.NewPassword && input.NewPassword.length > 0) {
            handleEdit({
                name: formerUser.name,
                password: input.NewPassword,
                id: formerUser.id
            })

			setInput({ ToolName: '', CurrentPassword: '', NewPassword: '' });

			closeEditForm();

			setTimeout(() => {
                // eslint-disable-next-line 
				alert('Password edited in sucessfully');
			}, 500);
		}
	};

    function handleChange(e) {
		const { name } = e.target;
		const { value } = e.target;
		setInput({ ...input, [name]: value });
	}

    function handleExisting(e) {
		const { name } = e.target;
		const { value } = e.target;
		setFormerUser({ ...user, [name]: value });
	}

    useEffect(()=>{
        setFormerUser(user)
    },[])

	return (
		<div className={create.formContainer}>
			<form className={create.form} onSubmit={handleSubmit}>
				<div className={create.headerContainer}>
					<button
						type="button"
						onClick={closeEditForm}
						className={create.cancel}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="currentColor"
							className={create.svg}
						>
							<path
								fillRule="evenodd"
								d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
								clipRule="evenodd"
							/>
						</svg>
					</button>

					<h1 className={create.formHeader}>Edit Password</h1>
				</div>
				<div className={create.alignElements}>
					<div className={create.control}>
						<label className={create.label} htmlFor="name">
							Tool Name
						</label>
						<input
							className={create.input}
							type="text"
							name="name"
							value={formerUser.name}
							onChange={handleExisting}
						/>
					</div>
					<div className={create.control}>
						<label className={create.label} htmlFor="CurrentPassword">
							Current Password
						</label>
						<input
							className={create.input}
							type="password"
							name="CurrentPassword"
							value={input.CurrentPassword}
							onChange={handleChange}
						/>
					</div>
					<div className={create.control}>
						<label className={create.label} htmlFor="NewPassword">
							New Password
						</label>
						<input
							className={create.input}
							type="password"
							name="NewPassword"
							value={input.NewPassword}
							onChange={handleChange}
						/>
					</div>
					<button className={create.btn} type="submit">
						Save
					</button>
				</div>
			</form>
		</div>
	);
}

export default EditForm;
