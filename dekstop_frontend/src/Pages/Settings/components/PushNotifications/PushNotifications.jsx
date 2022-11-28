import React from 'react';
import Modal from 'react-modal';
import close24 from '../../assets/close-24.svg';
import Toggle from '../toggle';
import styles from './PushNotifications.module.css';

const customStyles = {
	content: {},
};

Modal.setAppElement('#root');

function ModalFont() {
	const [modalIsOpen, setIsOpen] = React.useState(false);

	function openModal() {
		setIsOpen(true);
	}

	function afterOpenModal() {}

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<button className={`${styles.ModalText}`} onClick={openModal}>
				All active
			</button>

			<Modal
				isOpen={modalIsOpen}
				onAfterOpen={afterOpenModal}
				onRequestClose={closeModal}
				style={customStyles}
				className={styles.ModalContainer}
			>
				<img
					src={close24}
					className={styles.ModalClose}
					alt="close"
					onClick={closeModal}
				/>
				<div className={styles.pushFlex}>
					<h2>Push Notifications</h2>
					<Toggle className={styles.pushToggle} />
				</div>
			</Modal>
		</div>
	);
}

export default ModalFont;
