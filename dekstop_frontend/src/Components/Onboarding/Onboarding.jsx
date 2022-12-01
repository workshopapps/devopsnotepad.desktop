/* eslint-disable react/require-default-props */
import React from 'react';
import style from './Onboarding.module.css';
import screen2 from './Assets/screen2.svg';

function Onboarding() {
	return (
		<div id="onboarding" className={style.container}>
			<div className={style.onboarding}>
				<figure>
					<img src={screen2} aria-hidden alt="" />
				</figure>

				<div className={style.content}>
					<h1>Welcome to Opspad</h1>
					<p>
						Join millions of Devops to enjoy a great note taking experience.
					</p>
				</div>
			</div>
		</div>
	);
}

export default Onboarding;
