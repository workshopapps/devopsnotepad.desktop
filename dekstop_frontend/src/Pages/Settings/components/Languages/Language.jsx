/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/function-component-definition */
/* eslint-disable arrow-body-style */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import style from './Language.module.css';
import Sidenav from '../../../../Components/SideNav/SideNav';

const Language = () => {
	const [selected, setSelected] = useState('yes');

	const handleChange = (event) => {
		console.log(event.target.value);
		setSelected(event.target.value);
	};

	return (
        <div>
            <Sidenav/>
      
		<div className={style.languageContainer}>
			<div className={style.languageHead}>
				<Link to="/settings">
					<FiArrowLeft style={{ width: '20px', height: '20px' }} />
				</Link>
				<h1>Language</h1>
			</div>
			<small className={style.smallHead}>PREFERRED LANGUAGES</small>
			<div className={style.language_flexcol}>
				<label htmlFor="English (UK)">
					English (UK)
					<input
						type="radio"
						id="en-uk"
						name="choose"
						value="English (UK)"
						checked={selected === 'English (UK)'}
						onChange={handleChange}
					/>
				</label>

				<label htmlFor="English (US)">
					English (US)
					<input
						type="radio"
						id="en-us"
						name="choose"
						value="English (US)"
						onChange={handleChange}
						checked={selected === 'English (US)'}
					/>
				</label>

				<label htmlFor="Italiano (Italia)">
					Francais (France)
					<input
						type="radio"
						id="fr"
						name="choose"
						value="Francais (France)"
						onChange={handleChange}
						checked={selected === 'Francais (France)'}
					/>
				</label>

				<label htmlFor="Francais (France)">
					Italiano (Italia)
					<input
						type="radio"
						id="it"
						name="choose"
						value="Italiano (Italia)"
						onChange={handleChange}
						checked={selected === 'Italiano (Italia)'}
					/>
				</label>
			</div>
		</div>
        </div>
	);
};

export default Language;
