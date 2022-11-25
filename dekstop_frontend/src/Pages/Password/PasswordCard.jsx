import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CardStyle from './PasswordCard.module.css';
// import { Box, Stack, Typography, SvgIcon } from '@mui/material';
import EyeIcon from './images/eye.svg';
import Dash from './images/stars.svg';
// import Add from './images/add.svg';
// import Copy from './images/copy.svg';
// import Edit from './images/edit.svg';
import Option from './images/option.svg';
// import Start from './images/stars.svg';
// import Warning from './images/warning.svg';

// import VisibilityIcon from '@mui/icons-material/Visibility';
// import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// import MoreVertIcon from '@mui/icons-material/MoreVert';
// import { ReactComponent as Dash } from './images/stars.svg';

function PasswordCard({ user }) {
	const [toggleVisibility, setToggleVisibility] = useState(null);
	PasswordCard.propTypes = {
		user: PropTypes.node.isRequired,
	};

	useEffect(() => {
		setToggleVisibility(false);
	}, []);

	return (
		// <Box
		// 	sx={{
		// 		height: '113px',
		// 		width: '979px',
		// 		alignContent: 'center',
		// 		border: '1px solid #C7C7C7',
		// 		marginBottom: '20px',
		// 		padding: '20px',
		// 	}}
		// >
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
					<button type="button" className={CardStyle.options}>
						<img src={Option} alt="" />
					</button>
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
