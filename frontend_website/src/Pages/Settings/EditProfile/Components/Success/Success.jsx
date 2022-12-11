/* eslint-disable react/require-default-props */
import React from 'react';
import PropTypes from 'prop-types';
import style from './Success.module.css';

function Success({ closeModal, onSuccessClick }) {
	return (
		<div className={style.container}>
			<div
				className={style.dark_overlay}
				onClick={closeModal}
				aria-hidden="true"
			/>
			<div className={style.card}>
				<figure>
					<svg
						width="40"
						height="40"
						viewBox="0 0 40 40"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M20.1055 0C9.06047 0 0.105469 8.955 0.105469 20C0.105469 31.045 9.06047 40 20.1055 40C31.1505 40 40.1055 31.045 40.1055 20C40.1055 8.955 31.1505 0 20.1055 0ZM20.1055 37.5C10.4555 37.5 2.60547 29.65 2.60547 20C2.60547 10.35 10.4555 2.5 20.1055 2.5C29.7555 2.5 37.6055 10.35 37.6055 20C37.6055 29.65 29.753 37.5 20.1055 37.5ZM28.8655 12.045C28.6731 11.9192 28.4578 11.8326 28.232 11.7901C28.0061 11.7475 27.7741 11.7498 27.5491 11.797C27.3241 11.8441 27.1107 11.9351 26.9209 12.0647C26.7311 12.1943 26.5687 12.3601 26.443 12.5525L18.003 25.45L13.968 21.715C13.258 21.06 12.1505 21.1025 11.493 21.8125C10.8355 22.5225 10.8805 23.6275 11.5905 24.285L17.168 29.445C17.188 29.4625 17.213 29.4675 17.233 29.485C17.283 29.525 17.313 29.58 17.3655 29.6175C17.4405 29.6675 17.5255 29.6775 17.6055 29.7125C17.7005 29.7575 17.793 29.8 17.893 29.8275C17.9905 29.8525 18.0855 29.865 18.1855 29.8725C18.328 29.8875 18.4655 29.8875 18.6055 29.8675C18.663 29.8575 18.718 29.8425 18.7755 29.8275C18.948 29.785 19.108 29.7175 19.2655 29.6225C19.293 29.605 19.3155 29.585 19.343 29.5675C19.4455 29.4975 19.5555 29.445 19.643 29.35C19.7055 29.2825 19.733 29.195 19.783 29.12C19.7855 29.1175 19.7905 29.115 19.7905 29.1125L29.3705 14.47C29.6248 14.0814 29.7145 13.6077 29.6198 13.153C29.5251 12.6983 29.2538 12.2998 28.8655 12.045Z"
							fill="#219653"
						/>
					</svg>
				</figure>

				<h2>Changes Made Successfully </h2>

				<p>You have successfully made changes to your profile</p>

				<button onClick={onSuccessClick} type="button">
					Change saved
				</button>
			</div>
		</div>
	);
}

Success.propTypes = {
	closeModal: PropTypes.func,
	onSuccessClick: PropTypes.func,
};

export default Success;
