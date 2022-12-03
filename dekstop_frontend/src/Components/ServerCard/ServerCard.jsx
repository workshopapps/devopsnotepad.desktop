/* eslint-disable react/jsx-no-bind */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from './ServerCard.module.css';
import arrowUp from './Assets/arrow_up.svg';
import arrowDown from './Assets/arrow_down.svg';
import menu from './Assets/menu.svg';
import ServerMenu from '../ServerMenu/ServerMenu';
import EditServer from '../EditServer/EditServer';
import DeleteServer from '../DeleteSever/DeleteServer';

function ServerCard({ name, ipAddress, serverHealth, id, serverId }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isEditOpen, setIsEditOpen] = useState(false);
	const [isDeleteOpen, setIsDeleteOpen] = useState(false);

	useEffect(() => {
		if (isEditOpen || isDeleteOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}
	});

	function closeDelete() {
		setIsMenuOpen(false);
		setIsDeleteOpen(!isDeleteOpen);
	}
	function closeEdit() {
		setIsMenuOpen(false);
		setIsEditOpen(!isEditOpen);
	}

	return (
		<div id="ServerCard" className={style.container} aria-hidden>
			{isEditOpen && (
				<EditServer
					closeEditServer={closeEdit}
					serverId={serverId}
					id={id}
					name={name}
					ipAddress={ipAddress}
				/>
			)}
			{isDeleteOpen && <DeleteServer id={id} closeDelete={closeDelete} />}
			<h2>{name}</h2>
			<div className={style.table_container}>
				{isMenuOpen && (
					<ServerMenu
						toggleEdit={() => setIsEditOpen(!isEditOpen)}
						toggleDelete={() => {
							setIsDeleteOpen(!isDeleteOpen);
						}}
					/>
				)}
				<div className={style.button_container}>
					<button
						type="button"
						onClick={() => {
							setIsMenuOpen(!isMenuOpen);
						}}
					>
						<img src={menu} alt="menu" />
					</button>
				</div>

				<Link to={`/server/${id}`}>
					<table className={style.table}>
						<tbody>
							<tr>
								<th>IP Address:</th>
								<td className={style.data}>{ipAddress}</td>
							</tr>
							<tr>
								<th>Server Health:</th>
								{serverHealth ? (
									<td
										className={`${style.server_health_container} ${style.server_health_excellent}`}
									>
										<div className={style.server_health}>
											<span>Up</span> <img src={arrowUp} alt="" />
										</div>
									</td>
								) : (
									<td
										className={`${style.server_health_container} ${style.server_health_critical} ${style.server_health_critical_container}`}
									>
										<div className={style.server_health}>
											<span>Down</span>{' '}
											<img className={style.rotate} src={arrowDown} alt="" />
										</div>
									</td>
								)}
							</tr>
						</tbody>
					</table>
				</Link>
			</div>
		</div>
	);
}

ServerCard.propTypes = {
	serverId: PropTypes.string,
	name: PropTypes.string,
	ipAddress: PropTypes.string,
	serverHealth: PropTypes.string,
	id: PropTypes.string,
};

ServerCard.defaultProps = {
	serverId: '4439593jf3-0f3-2k200004rf',
	name: 'HNG SERVER',
	ipAddress: '192.168.0.1',
	serverHealth: 'excellent',
	id: '34380302dom',
};

export default ServerCard;
// useEffect(() => {
// 	if (isMenuOpen) {
// 		document.getElementById('home').addEventListener('click', (e) => {
// 			if (e.target.id !== 'ServerMenu') {
// 				setIsMenuOpen(false);
// 			}
// 		});
// 	}
// });
