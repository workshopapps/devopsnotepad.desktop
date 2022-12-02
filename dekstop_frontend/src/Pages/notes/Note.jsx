import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Link } from 'react-router-dom';
import Sidenav from '../../Components/SideNav/SideNav';
import notified from './assets/999.png';
import Vecctor from './assets/Vecctor.png';
import Vectoor from './assets/Vectoor.png';
import Vectorc from './assets/Vectorc.png';
import Vectorr from './assets/Vectorr.png';
import Vectorrr from './assets/Vectorrr.png';
import notesStyle from './Note.module.css';
import deleteImg from './assets/Vector (14).png';

// Modal css
const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '50%',
	height: '50%',
	borderRadius: '8px',
	bgcolor: 'background.paper',
	border: 0,
	background: '#FFFFFF',
	boxShadow: '0px 4px 29px rgba(0, 0, 0, 0.12)',
	p: 4,
};

function Note() {
	// State
	const [formDisplay, setFormDisplay] = useState(false);
	const [open, setOpen] = useState(false);
	const [note, setNote] = useState(localStorage.getItem('note'));
	const [inputs, setInputs] = useState(note);
	const [bold, setBold] = useState(false);

	// Handlers
	const handleOpen = () => setOpen(true);
	const handleChanges = (e) => setInputs(e.target.value);
	const handleClose = () => setOpen(false);
	const handleFormShow = () => {
		setFormDisplay((prev) => !prev);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem('note', inputs);
		setNote(localStorage.getItem('note'));
	};
	const handleBold = () => setBold((prev) => !prev);
	const deleteNote = () => {
		localStorage.removeItem('note');
		setNote('');
		setOpen(false);
	};
	const handleCancel = () => {
		setOpen(false);
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

	// Date
	const date = new Date().getDate();
	const hour = new Date().getHours();
	const min = new Date().getMinutes();
	const month = new Date().getMonth();

	const startHere = 'Start note here...';
	const boldStyle = { fontWeight: '900', color: '#000000' };
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
							<Link to="/note">
								{' '}
								<button
									onClick={handleFormShow}
									type="button"
									className={notesStyle.notesContentwoBtn}
									style={formDisplay ? styles : { color: '#6F6F6F' }}
								>
									Notes
								</button>{' '}
							</Link>
							<button type="button" className={notesStyle.notesContentwoBtn}>
								Passwords
							</button>
							<Link to="/notification">
								<button type="button" className={notesStyle.notesContentwoBtn}>
									Notifications
								</button>
								<img src={notified} alt="img" style={{ width: '20px' }} />{' '}
							</Link>
						</div>
						{formDisplay ? (
							<div className={notesStyle.notesFormDiv}>
								<div className={notesStyle.notesFormIcons}>
									<img
										src={Vectorc}
										alt="img"
										className={notesStyle.notesFormIcon}
										onMouseDownCapture={handleBold}
										onFocus={handleBold}
									/>
									<img
										src={Vectorr}
										alt="img"
										className={notesStyle.notesFormIcon}
									/>
									<img
										src={Vectoor}
										alt="img"
										className={notesStyle.notesFormIcon}
									/>
									<img
										src={Vectorrr}
										alt="img"
										className={notesStyle.notesFormIcon}
									/>
									<img
										src={Vecctor}
										alt="img"
										id={notesStyle.deleteIcon}
										className={notesStyle.notesFormIcon}
										onMouseDownCapture={handleOpen}
										onFocus={handleOpen}
									/>
								</div>
								{inputs?.length > 0 ? (
									<p
										className={notesStyle.notesLastEdit}
										id={notesStyle.notesLastEdit}
									>
										{hour}:{min}pm, {date}-{month}-22
									</p>
								) : (
									<p className={notesStyle.notesLastEdit}>Last edit</p>
								)}
								<p
									className={notesStyle.noteText}
									style={bold ? boldStyle : {}}
								>
									{note}
								</p>
								<p>{startHere}</p>
								<form className={notesStyle.notesForm} onSubmit={handleSubmit}>
									<input
										className={notesStyle.notesFormInput}
										onChange={handleChanges}
									/>
								</form>
							</div>
						) : null}
					</div>
				</div>
			</div>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box sx={style} className={notesStyle.notesBox}>
					<Typography id="modal-modal-title" variant="h6" component="h2">
						<div className={notesStyle.notesDeleteDiv}>
							<img
								src={deleteImg}
								alt="img"
								className={notesStyle.notesDeleteImg}
							/>
							<p className={notesStyle.notesDeleteNotification}>
								Are you sure you want too delete notes? Notes deleted cannot be
								retrieved
							</p>
							<div className={notesStyle.notesDeleteBtnDiv}>
								<button
									type="button"
									className={notesStyle.notesDeleteBtn}
									onMouseDownCapture={handleCancel}
									onFocus={handleCancel}
								>
									Cancel
								</button>
								<button
									type="button"
									id={notesStyle.notesDeleteBtn}
									className={notesStyle.notesDeleteBtn}
									onMouseDownCapture={deleteNote}
									onFocus={deleteNote}
								>
									Delete
								</button>
							</div>
						</div>
					</Typography>
				</Box>
			</Modal>
		</div>
	);
}
export default Note;
