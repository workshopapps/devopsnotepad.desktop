/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import style from './EditProfile.module.css';
import  userImage  from '../assets/ProfilePicture.png';

function EditProfile() {
	return (
		<div className={style.profileContainer}>
			<div className={style.profileHead}>
				<Link to="/settings">
					<FiArrowLeft style={{ width: '20px', height: '20px' }} />
				</Link>
				<h1>Edit Profile</h1>
			</div>
			<div className={style.profileImage}>
				<img src={userImage} alt="" />
                <button>Change Image</button>
			</div>
            
		</div>
	);
}

export default EditProfile;
