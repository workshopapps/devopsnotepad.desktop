import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import CardStyle from './PasswordCard.module.css';
import EyeIcon from './images/eye.svg';
import Dash from './images/stars.svg';
import Option from './images/option.svg';
import Copy from './images/copy.svg';
import Edit from './images/edit.svg';
import Delete from './images/delete.svg';
import DeleteModal from './components/deleteModal/DeleteModal';
import EditForm from './components/editForm/EditForm';

function PasswordCard({ user, removePassword, editPassword }) {
	const [toggleVisibility, setToggleVisibility] = useState(null);
	const [toggleOptionMenu, setToggleOptionMenu] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [showEditForm, setShowEditForm] = useState(null);

	// PropType Declaration
	PasswordCard.propTypes = {
		user: PropTypes.node.isRequired,
		removePassword: PropTypes.node.isRequired,
		editPassword: PropTypes.node.isRequired,
	};

	// Object Destructuring
	const { name, password, id } = user;

	// Methods and Functions

	const closeEditForm = useCallback(() => {
		setShowEditForm(false);
		setToggleOptionMenu(false);
		document.body.style.overflow = 'unset';
	}, [showEditForm]);

	const openShowEditForm = () => {
		setShowEditForm(true);
		document.body.style.overflow = 'hidden';
	};

	const handleRemove = (value) =>
		useCallback(() => {
			removePassword(value);
			setShowDeleteModal(false);
			setToggleOptionMenu(false);
			setTimeout(() => {
				// eslint-disable-next-line
				alert('Password deleted successfully');
			}, 500);
		});

	const handleEdit = (value) => {
		editPassword(value);
	};

	const handleCopy = () => {
		navigator.clipboard.writeText(password);
		setToggleOptionMenu(false);
		setTimeout(() => {
			// eslint-disable-next-line
			alert('Password copied to clipboard');
		}, 500);
	};

	const closeDeleteModal = useCallback(() => {
		setShowDeleteModal(false);
		setToggleOptionMenu(false);
		document.body.style.overflow = 'unset';
	}, [showDeleteModal]);

	const openDeleteModal = () => {
		setShowDeleteModal(true);
		document.body.style.overflow = 'hidden';
	};

	useEffect(() => {
		setToggleVisibility(false);
		setShowEditForm(false);
	}, []);

	return (
		<div id={user.id} className={CardStyle.passwordCard}>
			<div className={CardStyle.headFlex}>
				<h1 className={CardStyle.name}>{name}</h1>

				<div className={CardStyle.iconsContainer}>
					<button
						type="button"
						onMouseDown={() => {
							setToggleVisibility(true);
						}}
						onMouseUp={() => {
							setToggleVisibility(false);
						}}
						className={CardStyle.openEye}
					>
						<img src={EyeIcon} alt="" />
					</button>
					<button
						onClick={() => {
							setToggleOptionMenu(!toggleOptionMenu);
						}}
						type="button"
						className={CardStyle.options}
					>
						<img src={Option} alt="" />
					</button>

					{toggleOptionMenu && (
						<div className={CardStyle.optionCard}>
							<button
								type="button"
								className={CardStyle.cp}
								onClick={handleCopy}
							>
								<img src={Copy} alt="" />{' '}
								<span className={CardStyle.ct}>Copy Password</span>
							</button>
							<button
								type="button"
								className={CardStyle.ep}
								onClick={openShowEditForm}
							>
								<img src={Edit} alt="" />
								<span className={CardStyle.et}>Edit Password</span>
							</button>
							<button
								type="button"
								onClick={openDeleteModal}
								className={CardStyle.dp}
							>
								<img src={Delete} alt="" />
								<span className={CardStyle.dt}>Delete Password</span>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className={CardStyle.password}>
				<span className={CardStyle.input}>
					{toggleVisibility ? (
						password
					) : (
						<img className={CardStyle.dash} src={Dash} alt="" />
					)}
				</span>
			</div>
			{showDeleteModal && (
				<DeleteModal
					closeDeleteModal={closeDeleteModal}
					id={id}
					runRemove={handleRemove}
				/>
			)}
			{showEditForm && (
				<EditForm
					handleEdit={handleEdit}
					user={user}
					closeEditForm={closeEditForm}
				/>
			)}
		</div>
	);
}

export default PasswordCard;
