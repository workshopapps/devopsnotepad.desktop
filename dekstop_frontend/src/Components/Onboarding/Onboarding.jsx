/* eslint-disable react/require-default-props */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import style from './Onboarding.module.css';
import screen1 from './Assets/screen1.svg';
import screen2 from './Assets/screen2.svg';

function Onboarding({ closeOnboarding }) {
	const [getStarted, setGetStarted] = useState(1);

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
				<div className={style.onboarding}>
					<figure>
						<img src={screen2} aria-hidden alt="" />
					</figure>

					<div className={style.content}>
						<h1>Convenient Server Monitoring</h1>
						<p>
							With Opspad, monitoring of servers is now easier. You are one
							click away from enjoying this and many more services.
						</p>
					</div>

					<div className={style.action}>
						<div className={style.ellipse_container}>
							<div className={style.ellipse} />
							<div className={`${style.ellipse} ${style.ellipse_current}`} />
						</div>

						<button
							onClick={closeOnboarding}
							type="button"
							className={style.btn}
						>
							Get Started
						</button>
					</div>
				</div>
			)}
		</div>
	);
}

Onboarding.propTypes = {
	closeOnboarding: PropTypes.func,
};
export default Onboarding;
