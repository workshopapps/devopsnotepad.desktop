import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Vecctor from './assets/Vecctor.png';
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
	// Ids
	const { id } = useParams();

	// States
	const [open, setOpen] = useState(false);
	const [note, setNote] = useState(localStorage.getItem(`${id}`));
	const [inputs, setInputs] = useState(note);
	const [saveMsg, setSaveMsg] = useState(false);
	const [notification, setNotification] = useState(false);
	const [check, setCheck] = useState(false);

	// Handlers
	const handleOpen = () => setOpen(true);
	const handleChanges = (e) => setInputs(e.target.value);
	const handleClose = () => setOpen(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		localStorage.setItem(`${id}`, inputs);
		setNote(localStorage.getItem(`${id}`));
		setInputs('');
		setNotification(false);
		setSaveMsg(true);
	};
	const deleteNote = () => {
		localStorage.removeItem(`${id}`);
		setNote('');
		setOpen(false);
		setSaveMsg(false);
	};
	const handleCancel = () => {
		setOpen(false);
	};
	const handleEdit = () => {
		setSaveMsg(false);
		setNotification(false);
		setNote(false);
		setCheck(true);
	};
	const handleCheckNote = () => {
		if (note) {
			setSaveMsg(true);
		} else {
			setNotification(true);
			setSaveMsg(false);
		}
	};

	return (
		<div className={notesStyle.notesWrapper}>
			<div className={notesStyle.notesContent}>
				<div className={notesStyle.notesContentOne}>
					<div className={notesStyle.notesFormDiv}>
						<div className={notesStyle.notesFormIcons}>
							{saveMsg ? (
								<button
									type="button"
									className={notesStyle.notesSaveBtn}
									id={notesStyle.notesSaveBtn}
									style={{ display: saveMsg ? 'block' : 'none' }}
									onClick={handleEdit}
								>
									Edit Note
								</button>
							) : (
								<button
									type="button"
									className={notesStyle.notesSaveBtn}
									id={notesStyle.notesSaveBtn2}
									onClick={handleCheckNote}
									style={{ display: check ? 'none' : 'block' }}
								>
									Check Note
								</button>
							)}
							<img
								src={Vecctor}
								alt="img"
								id={notesStyle.deleteIcon}
								className={notesStyle.notesFormIcon}
								onMouseDownCapture={handleOpen}
								onFocus={handleOpen}
							/>
						</div>
						<div className={notesStyle.noteTextDiv}>
							<p className={notesStyle.noteText}>
								<p
									style={{ display: saveMsg ? 'block' : 'none' }}
									className={notesStyle.savedNoteAlert}
								>
									Server note:
								</p>
								<p
									style={{
										display: notification ? 'block' : 'none',
										color: 'red',
									}}
									className={notesStyle.savedNoteAlert}
								>
									No note found! Create one and try again.
								</p>
								<div className={notesStyle.savedNote}>
									<p className={notesStyle.notesDisplay}>
										<div style={{ display: saveMsg ? 'block' : 'none' }}>
											{note}
										</div>
									</p>
								</div>
							</p>
						</div>
						<div style={{ display: note ? 'none' : 'block' }}>
							<form onSubmit={handleSubmit} className={notesStyle.notesForm}>
								{note ? (
									<textarea
										className={notesStyle.notesFormInput}
										id={notesStyle.notesFormInput}
										onChange={handleChanges}
									>
										{note}
									</textarea>
								) : (
									<textarea
										className={notesStyle.notesFormInput}
										id={notesStyle.notesFormInput}
										onChange={handleChanges}
										placeholder="Start note here...."
									/>
								)}
								<button type="submit" className={notesStyle.notesSaveBtn}>
									Save Note
								</button>
							</form>
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
									Are you sure you want too delete notes? Notes deleted cannot
									be retrieved
								</p>
								<div className={notesStyle.notesDeleteBtnDiv}>
									<button
										type="button"
										className={notesStyle.notesDeleteBtn}
										id={notesStyle.notesCancelBtn}
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
		</div>
	);
}
export default Note;
