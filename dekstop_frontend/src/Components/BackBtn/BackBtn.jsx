import React from 'react';
import { useNavigate } from 'react-router-dom';
import style from './BackBtn.module.css';
import backbtn from './Assets/back.svg';

function BackBtn() {
	const navigate = useNavigate();

	return (
		<button
			type="button"
			className={style.container}
			onClick={() => {
				navigate(-1);
			}}
		>
			<img src={backbtn} alt="go back to previous page" />
		</button>
	);
}

export default BackBtn;
