/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import style from './Onboarding.module.css';
import screen1 from './Assets/screen1.svg';
import CreatePassword from '../GlobalPassword/CreatePassword';

function Onboarding() {
	const [getStarted, setGetStarted] = useState(1);
	
	// Disable onboarding for subsequent run
	// On click get started in onboarding, close onboarding and set isNewUser to false in local storage so that next time the user opens the app it skips the onboarding process

	return (
		<div id="onboarding" className={style.container}>
			{getStarted === 1 ? (
				<div className={style.onboarding}>
					<figure>
						<img src={screen1} aria-hidden alt="" />
					</figure>

					<div className={style.content}>
						<h1>Take Notes, Stay Updated</h1>
						<p>
							Enjoy a great note taking experience while ensuring that servers
							monitored are up to date.
						</p>
					</div>

					<div className={style.action}>
						<div className={style.ellipse_container}>
							<div className={`${style.ellipse} ${style.ellipse_current}`} />
							<div className={style.ellipse} />
						</div>

						<button
							onClick={() => setGetStarted(2)}
							type="button"
							className={style.btn}
						>
							Next
						</button>
					</div>
				</div>
			) : (
				<div className={style.onboarding_form}>
					<CreatePassword/>
				</div>
			)}
		</div>
	);
}

export default Onboarding;
