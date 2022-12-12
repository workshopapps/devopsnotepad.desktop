import React from 'react';
import PropTypes from 'prop-types';
import deleteStyle from './DeleteModal.module.css';
import Warning from '../../images/warning.svg';

function deleteModal({ closeDeleteModal, runRemove, id }) {
	deleteModal.propTypes = {
		closeDeleteModal: PropTypes.node.isRequired,
        runRemove: PropTypes.node.isRequired,
        id: PropTypes.node.isRequired,
	};

	return (
		<div className={deleteStyle.deleteModalContainer}>
			<div className={deleteStyle.deleteModal}>
				<div className={deleteStyle.centerItems}>
					<img src={Warning} alt="" />
					<h4 className={deleteStyle.header}>Delete Password</h4>
					<p className={deleteStyle.text}>
						Are you sure you want to delete this password?
					</p>
					<div className={deleteStyle.buttonContainer}>
						<button
							type="button"
							onClick={closeDeleteModal}
							className={deleteStyle.cancel}
						>
							Cancel
						</button>
						<button
							type="button"
							onClick={runRemove(id)}
							className={deleteStyle.delete}
						>
							Delete
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default deleteModal;
