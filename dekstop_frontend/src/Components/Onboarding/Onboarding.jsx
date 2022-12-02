/* eslint-disable react/require-default-props */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './Onboarding.module.css';
import screen1 from './Assets/screen1.svg';
import GlobalPassword from '../GlobalPassword/CreatePassword';

function Onboarding({ closeOnboarding }) {
	
	const [getStarted, setGetStarted] = useState(1);
	const navigate = useNavigate();
	localStorage.setItem('isNewUser', false);
		navigate('/');
	// Disable onboarding for subsequent run
	// On click get started in onboarding, close onboarding and set isNewUser to false in local storage so that next time the user opens the app it skips the onboarding process
	

	return (
		<div id="onboarding" className={style.container}>
			{getStarted === 1 ? (
				<div>
					<GlobalPassword onClick={closeOnboarding} />
				</div>
			) : (
				<div className={style.onboarding}>
					<figure>
						<img src={screen1} aria-hidden alt="" />
					</figure>

					<div className={style.content}>
						<h1>Take Notes, Stay Updated</h1>
						<p>
							Join millions of Devops to enjoy a great note taking experience.
						</p>
					</div>

					<button onClick={() => setGetStarted(2)} type="button" className={style.btn}>
						Get Started
					</button>
				</div>
			)}
		</div>
	);
}
Onboarding.propTypes = {
	closeOnboarding: PropTypes.func,
};

export default Onboarding;
