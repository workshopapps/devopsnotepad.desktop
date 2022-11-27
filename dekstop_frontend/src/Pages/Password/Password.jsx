import React, {useState, useEffect, useCallback} from 'react';
import SideNav from '../../components/SideNav/SideNav';
import passwordStyle from './Password.module.css';
import PasswordCard from './PasswordCard';
import Data from './Data';
import Add from './images/add.svg';
import CreateForm from './components/createForm/CreateForm'

function Password() {
	const [showCreateform, setShowCreateform] = useState(null)
	
	const closeShowForm = useCallback(() => {
		setShowCreateform(false)
	}, [showCreateform]);

	useEffect(()=>{
		setShowCreateform(false)
	},[])
	return (
		<div className={passwordStyle.passwordCon}>
			<SideNav />
			<div className={passwordStyle.password}>
				<div className={passwordStyle.passCon}>
					{Data.map((user, index) => (
						<PasswordCard user={user} index={index} />
					))}
					<div className={passwordStyle.btnContainer}>
					<button onClick={()=>{setShowCreateform(true)}} type="button" className={passwordStyle.btn}>
						<span className={passwordStyle.btnText}>Add new password</span>
						<img className={passwordStyle.btnIcon} src={Add} alt="" />
					</button>
					</div>
				</div>
			</div>
			{showCreateform && <CreateForm closeShowForm={closeShowForm}/>}
		</div>
	);
}

export default Password;
