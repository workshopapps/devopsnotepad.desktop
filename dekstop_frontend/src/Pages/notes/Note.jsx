import React from 'react';
import Sidenav from '../../Component/SideNav/SideNav';
import notesStyle from './Note.module.css';

function Note() {
	// State
	const [formDisplay, setFormDisplay] = React.useState(false);

	// Handle form display
	const handleFormShow = () => {
		setFormDisplay((prev) => !prev);
	};

	// styles
	const styles = {
		fontFamily: 'Manrope',
		fontStyle: 'normal',
		fontWeight: 700,
		fontSize: '14px',
		lineHeight: '24px',
		color: '#202020',
		borderBottom: '2px solid #111111',
	};
	return (
		<div className={notesStyle.notesWrapper}>
			<Sidenav />
			<div className={notesStyle.notes}>
				<h1 className={notesStyle.notesTitle}>HNG SERVER</h1>
				<div className={notesStyle.notesContent}>
					<div className={notesStyle.notesContentOne}>
						<div className={notesStyle.notesContentOneDetails}>
							<h2 className={notesStyle.notesContentOneDetailsTitle}>
								End point:
							</h2>
							<p className={notesStyle.notesContentOneDetailsText}>
								server-devops/18.20.31.10
							</p>
						</div>
						<div className={notesStyle.notesContentOneDetails}>
							<h2 className={notesStyle.notesContentOneDetailsTitle}>
								IP Address:
							</h2>
							<p className={notesStyle.notesContentOneDetailsText}>
								192.168.0.1
							</p>
						</div>
						<div className={notesStyle.notesContentOneDetails}>
							<h2 className={notesStyle.notesContentOneDetailsTitle}>
								Server health:
							</h2>
							<button
								className={notesStyle.notesContentOneDetailsText}
								type="button"
								id={notesStyle.notesContentOneDetailsBtn}
							>
								Excellent
							</button>
						</div>
					</div>
					<div className={notesStyle.notesContentTwo}>
						<div className={notesStyle.notesContentwoBtns}>
							<button
								onClick={handleFormShow}
								type="button"
								className={notesStyle.notesContentwoBtn}
								style={formDisplay ? styles : { color: '#6F6F6F' }}
							>
								Notes
							</button>
							<button type="button" className={notesStyle.notesContentwoBtn}
							>
								Passwords
							</button>
							<button type="button" className={notesStyle.notesContentwoBtn}>
								Notifications
							</button>
						</div>
						{formDisplay ? (
							<div className={notesStyle.notesFormDiv}>
								<div className={notesStyle.notesFormIcons}>
									<img src="Vectorc.png" alt='img' className={notesStyle.notesFormIcon}/>
									<img src="Vectorr.png" alt='img' className={notesStyle.notesFormIcon}/>
									<img src="Vectoor.png" alt='img' className={notesStyle.notesFormIcon}/>
									<img src="Vectorrr.png" alt='img' className={notesStyle.notesFormIcon}/>
									<img src="Vecctor.png" alt='img' id={notesStyle.deleteIcon} className={notesStyle.notesFormIcon}/>
								</div>
								<p className={notesStyle.notesLastEdit}>Last edit</p>
								<form className={notesStyle.notesForm}>
									<input
										type="text"
										placeholder="Start note here..."
										className={notesStyle.notesFormInput}
									/>
								</form>
								
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
export default Note;