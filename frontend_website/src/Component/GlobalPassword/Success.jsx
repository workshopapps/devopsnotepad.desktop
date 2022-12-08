/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-no-bind */
import React from 'react';
import Modal from 'react-modal';
import CheckSucess from './asset/success-check.svg';
import styles from './Success.module.css';

const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
	},
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

function Success() {
	const [modalIsOpen, setIsOpen] = React.useState(true);

	function closeModal() {
		setIsOpen(false);
	}

	return (
		<div>
			<Modal
				isOpen={modalIsOpen}
				onRequestClose={closeModal}
				style={customStyles}
				contentLabel="Example Modal"
			>
				<div className={styles.success_container}>
					<img src={CheckSucess} alt="s" />
					<h3>Password Changed Successfully </h3>
					<p>You have successfully made changes to your password</p>
					<button onClick={closeModal}>Back to Settings</button>
				</div>
			</Modal>
		</div>
	);
}

export default Success;
