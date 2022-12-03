/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Terms.module.css';

export default function NavSection() {
	const { isActive, setIsActive } = useState(false);
	const handleClick = (e) => {
		e.preventDefault();
		setIsActive((current) => !current);
	};
	return (
		<div>
			<div className={classes.container__head}>Legal</div>
			<ul className={classes.nav__section}>
				<li
					onClick={handleClick}
					style={{ backgroundColor: isActive ? '#EDEDED' : '' }}
				>
					<Link to="/terms">Terms of Use</Link>
				</li>

				<li>
					<Link to="/privacy">Privacy Policy</Link>
				</li>
			</ul>
		</div>
	);
}
