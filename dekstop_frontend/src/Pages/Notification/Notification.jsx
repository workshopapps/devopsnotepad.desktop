/* eslint-disable react/button-has-type */
/* eslint-disable react/self-closing-comp */
import React, { useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import styles from './Notification.module.css';
import red from './assets/red.png';
import yellow from './assets/yellow.png';
import green from './assets/green.png';
import all from './assets/all.png';
import Note from '../notes/Note';

function Notification() {
	const [isOpen, setIsOpen] = useState(false);
	const toggling = () => setIsOpen(!isOpen);

	return (
		<div>
			<Note />

			<section className={styles.main}>
				<div className={styles.container}>
					<p className={styles.today}>Today</p>

					<div className={styles.wrap}>
						<p className={styles.sortBy}>Sort by </p>
						<RiArrowDownSLine
							style={{ cursor: 'pointer' }}
							onClick={toggling}
						/>

						{isOpen && (
							<ul className={styles.dropDown}>
								<li>
									<img
										src={all}
										alt=""
										style={{
											width: '10px',
											height: '10px',
											marginRight: '15px',
										}}
									/>
									<p>All</p>
								</li>

								<li>
									<img
										src={green}
										alt=""
										style={{
											width: '10px',
											height: '10px',
											marginRight: '15px',
										}}
									/>
									<p>Success</p>
								</li>

								<li>
									<img
										src={yellow}
										alt=""
										style={{
											width: '10px',
											height: '10px',
											marginRight: '15px',
										}}
									/>
									<p>Warning</p>
								</li>

								<li>
									<img
										src={red}
										alt=""
										style={{
											width: '10px',
											height: '10px',
											marginRight: '15px',
										}}
									/>
									<p>Critial</p>
								</li>
							</ul>
						)}
					</div>
				</div>

				<div>
					<div className={styles.row}>
						<img
							src={green}
							alt=""
							style={{ width: '10px', height: '10px', marginRight: '20px' }}
						/>

						<p className={styles.hour}>
							The software installation on HNG server was successful
						</p>

						<p className={styles.green}>1 hour ago</p>
					</div>

					<div className={styles.row}>
						<img
							src={red}
							alt=""
							style={{ width: '10px', height: '10px', marginRight: '20px' }}
						/>

						<p className={styles.hour}>
							Server capacity is almost at its maximum capacity
						</p>

						<p className={styles.red}>1 hour ago</p>
					</div>

					<div className={styles.row}>
						<img
							src={yellow}
							alt=""
							style={{ width: '10px', height: '10px', marginRight: '20px' }}
						/>

						<p className={styles.hour}>Password change successful</p>

						<p className={styles.yellow}>52 mins ago</p>
					</div>
				</div>

				<div>
					<p className={styles.yesterday}>Yesterday</p>

					<div className={styles.row1}>
						<img
							src={red}
							alt=""
							style={{ width: '10px', height: '10px', marginRight: '20px' }}
						/>

						<p className={styles.hour1}>
							Server capacity is almost at its maximum capacity
						</p>

						<p className={styles.red1}>1 hour ago</p>
					</div>

					<div className={styles.row1}>
						<img
							src={green}
							alt=""
							style={{ width: '10px', height: '10px', marginRight: '20px' }}
						/>

						<p className={styles.hour1}>Password change successful</p>

						<p className={styles.yellow1}>52 mins ago</p>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Notification;
