import React, {useRef} from 'react';
import gStyle from './CreatePassword.module.css';
import infoIcon from './images/error.svg';

function createGPassword() {
    const password = useRef()

    const handleSubmit=()=>{
        if(password.current.value < 5){
            alert('password too short')
        }

        // if(password.current.value >= 5){
            
        // }
    }
	return (
		<div className={gStyle.gPasswordContainer}>
			<div className={gStyle.form}>
				<input
					type="password"
					className={gStyle.input}
					ref={password}
				/>
				<span className={gStyle.span}>
					<img src={infoIcon} alt="" />{' '}
					<p className={gStyle.p}>
						Password created would be used to access saved servers in the
						Application.
					</p>
				</span>
                <button className={gStyle.btn} type='button' onClick={handleSubmit}>Done</button>
			</div>
		</div>
	);
}

export default createGPassword;
