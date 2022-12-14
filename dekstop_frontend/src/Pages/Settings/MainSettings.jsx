/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-lone-blocks */

import { Link } from 'react-router-dom';
import { Security, Support } from './data';
import style from './MainSettings.module.css';
import Sidenav from '../../Components/SideNav/SideNav';
import BackBtn from '../../Components/BackBtn/BackBtn';

function Settings() {
	return (
		<div>
			<Sidenav />
			<BackBtn />

			<div className={style.settingsContainer}>
				<h1>Settings</h1>

				{/* {userTopbar.map((userHead) => (
					<div key={userHead.id} className={style.userHead}>
						<img src={userHead.userImage} alt="" />
						<h3>{userHead.userName}</h3>
					</div>
				))} */}

				{/* {Account.map((accounts) => (
				<div key={accounts.title} className={style.border_top}>
					<small className={style.smallHead}>{accounts.title}</small>
					
					<div className={style.account}>
						<div className={style.accountProfile}>
							{accounts.icon}
							<Link to='/settings/edit-profile'>{accounts.func}</Link>
						</div>
						
							{accounts.iconright}
						</div>
					</div>
				
				</div>
			))} */}

				{/* {General.map((general) => (
				<div key={general.title} className={style.border_top}>
					<small className={style.smallHead}>{general.title}</small>
					<div className={style.account}>
						<div className={style.accountProfile}>
							<IoMdSwap />
							<Link to="/">{general.func}</Link>
						</div>
						<Link to="/">
							<FaChevronRight />
						</Link>
					</div>
				</div>
			))} */}

				{/* {AppSettings.map((appsettings) => (
					<div key={appsettings.title}>
						<small className={style.smallHead}>{appsettings.title}</small>

						<div className={style.appSettings_cont}>
							<div className={style.appSettings}>
								{appsettings.icon}
								<h3>{appsettings.func}</h3>
							</div>
							<Link to={appsettings.slug}>{appsettings.iconright}</Link>
						</div>

						<span className={style.border_bottom}> </span>
					</div>
				))} */}

				{Security.map((security) => (
					<div key={security.title}>
						<small className={style.smallHead}>{security.title}</small>

						<div className={style.account}>
							<div className={style.accountProfile}>
								{security.icon}
								{security.func}
							</div>
							{/* {security.iconright} */}
						</div>
					</div>
				))}

				{Support.map((support) => (
					<div className={style.support_cont} key={support.items}>
						<small className={style.smallHead}>{support.title2}</small>
						<ul className={style.support}>
							{support.items.map((items) => (
								<Link to='' onClick={() =>
								window.open(`${items.slug}`, '_blank')
							}>
									<li key={items.list}>
										{items.list}
										{items.iconright}
									</li>
								</Link>
							))}
						</ul>
					</div>
				))}
			</div>
		</div>
	);
}

export default Settings;
