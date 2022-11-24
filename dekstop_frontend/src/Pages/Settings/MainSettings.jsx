import { FaRegUser, FaChevronRight } from 'react-icons/fa';
import { IoMdSwap } from 'react-icons/io';
import { BiLock } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { Account, Security, userTopbar, General, AppSettings, Support } from './data';
import style from './MainSettings.module.css';

function Settings() {
	

	return (
		<div className={style.settingsContainer}>
			<h1>Settings</h1>

			{userTopbar.map((userHead) => (
				<div key={userHead.id} className={style.userHead}>
					<img src={userHead.userImage} alt="" />
					<h3>{userHead.userName}</h3>
				</div>
			))}

			{Account.map((accounts) => (
				<div key={accounts.title} className={style.border_top}>
					<small className={style.smallHead}>{accounts.title}</small>
					<div className={style.account}>
						<div className={style.accountProfile}>
							<FaRegUser />
							<Link to="/">{accounts.func}</Link>
						</div>
						<Link to="/">
							<FaChevronRight />
						</Link>
					</div>
				</div>
			))}

			{General.map((general) => (
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
			))}

			{Security.map((security) => (
				<div key={security.title}>
					<small className={style.smallHead}>{security.title}</small>
					<div className={style.account}>
						<div className={style.accountProfile}>
							<BiLock />
							<Link to={security.slug}>{security.func}</Link>
						</div>
						<Link to="/">
							<FaChevronRight />
						</Link>
					</div>
				</div>
			))}
			{AppSettings.map((appsettings) => (
				<div key={appsettings.title}>
					<small className={style.smallHead}>{appsettings.title}</small>
					<div className={style.appSettings_cont}>
						<div className={style.appSettings}>
							{appsettings.icon}
							<Link to={appsettings.slug}>{appsettings.func}</Link>
						</div>
						<Link to="/">{appsettings.iconright}</Link>
					</div>
					<span className={style.border_bottom}> </span>
				</div>
			))}
      {Support.map((support) => (
        <div key={support.items} >
        <small className={style.smallHead}>{support.title}</small>
        <ul className={style.support}>
        {support.items.map((items) => (
          <Link to={items.slug}>
                <li
                  key={items.list}
                >
                  <Link to={items.slug}>{items.list}</Link>
                  <Link to={items.slug}>{items.iconright}</Link>
                </li>
                </Link>
              ))}
        </ul>
        </div>
      ))}
		</div>
	);
}

export default Settings;
