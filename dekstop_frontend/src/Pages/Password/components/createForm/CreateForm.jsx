/* eslint-disable no-alert */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import create from './CreateForm.module.css';

function CreateForm({ closeShowForm, addPassword }) {
	const [input, setInput] = useState({
		ToolName: '',
		NewPassword: '',
		ConfirmPassword: '',
	});

	CreateForm.propTypes = {
		closeShowForm: PropTypes.node.isRequired,
		addPassword: PropTypes.node.isRequired,
	};

	function handleSubmit(e) {
		e.preventDefault();

		if (input.NewPassword !== input.ConfirmPassword) {
			alert('Password does not match');
		}

		if (
			input.ToolName.length > 0 &&
			input.NewPassword === input.ConfirmPassword
		) {
			addPassword({
				name: input.ToolName,
				password: input.NewPassword,
				id: new Date().getTime().toString(),
			});

			setInput({ ToolName: '', NewPassword: '', ConfirmPassword: '' });

			closeShowForm();
			setTimeout(() => {
				alert('Password created sucessfully');
			}, 500);
		}
	}

	function handleChange(e) {
		const { name } = e.target;
		const { value } = e.target;
		setInput({ ...input, [name]: value });
	}

	return (
		<div className={create.formContainer}>
			<form className={create.form} onSubmit={handleSubmit}>
				<div className={create.headerContainer}>
					<button
						type="button"
						onClick={closeShowForm}
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

					<h1 className={create.formHeader}>Add password</h1>
				</div>
				<div className={create.alignElements}>
					<div className={create.control}>
						<label className={create.label} htmlFor="ToolName">
							Tool Name
						</label>
						<input
							className={create.input}
							type="text"
							name="ToolName"
							value={input.ToolName}
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
					<div className={create.control}>
						<label className={create.label} htmlFor="ConfirmPassWord">
							Confirm Password
						</label>
						<input
							className={create.input}
							type="password"
							name="ConfirmPassword"
							value={input.ConfirmPassword}
							onChange={handleChange}
						/>
					</div>
					<button className={create.btn} type="submit">
						Save new password
					</button>
				</div>
			</form>
		</div>
	);
}

export default CreateForm;
