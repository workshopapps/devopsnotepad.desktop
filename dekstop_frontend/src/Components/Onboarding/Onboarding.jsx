/* eslint-disable react/require-default-props */
import { useNavigate } from 'react-router-dom';
import style from './Onboarding.module.css';
import screen1 from './Assets/screen1.svg';

function Onboarding() {
	const navigate = useNavigate();
	// Disable onboarding for subsequent run
	// On click get started in onboarding, close onboarding and set isNewUser to false in local storage so that next time the user opens the app it skips the onboarding process
	function onClick() {
		localStorage.setItem('isNewUser', false);
		navigate('/');
	}

	return (
		<div id="onboarding" className={style.container}>
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

				<button onClick={onClick} type="button" className={style.btn}>
					Get Started
				</button>
			</div>
		</div>
	);
}

export default Onboarding;
