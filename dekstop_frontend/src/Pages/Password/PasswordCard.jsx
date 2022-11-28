import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardStyle from './PasswordCard.module.css';
import EyeIcon from './images/eye.svg';
import Dash from './images/stars.svg';
import Option from './images/option.svg';
import Copy from './images/copy.svg';
import Edit from './images/edit.svg';

function PasswordCard({ user }) {
	const [toggleVisibility, setToggleVisibility] = useState(null);
	const [toggleOptionMenu, setToggleOptionMenu] = useState(false)

	PasswordCard.propTypes = {
		user: PropTypes.node.isRequired,
	};

	useEffect(() => {
		setToggleVisibility(false);
	}, []);

	return (
		<div className={CardStyle.passwordCard}>
			<div className={CardStyle.headFlex}>
				<h1 className={CardStyle.name}>{user.name}</h1>

				<div className={CardStyle.iconsContainer}>
					<button
						type="button"
						onMouseDown={() => {
							setToggleVisibility(true);
						}}
						onMouseUp={() => {
							setToggleVisibility(false);
						}}
						className={CardStyle.openEye}
					>
						<img src={EyeIcon} alt="" />
					</button>
					<button onClick={()=>{setToggleOptionMenu(!toggleOptionMenu)}} type="button" className={CardStyle.options}>
						<img src={Option} alt="" />
					</button>

					{toggleOptionMenu && <div className={CardStyle.optionCard}>
						<button type='button' className={CardStyle.cp}>
							<img src={Copy} alt="" />{' '}
							<span className={CardStyle.ct}>Copy Password</span>
						</button>
						<button type='button' className={CardStyle.ep}>
							<img src={Edit} alt="" />
							<span className={CardStyle.et}>Edit Password</span>
						</button>
					</div>}
				</div>
			</div>
			<div className={CardStyle.password}>
				<span className={CardStyle.input}>
					{toggleVisibility ? (
						user.password
					) : (
						<img className={CardStyle.dash} src={Dash} alt="" />
					)}
				</span>
			</div>
		</div>
	);
}

export default PasswordCard;
