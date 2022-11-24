import React from 'react';
import { Link } from 'react-router-dom';
import notesStyle from './Note.module.css';

function NotesSideBar() {
	return (
		<div className={notesStyle.notesSideBarWrapper}>
			<div className={notesStyle.notesSideBar}>
				<div className={notesStyle.notesSideBarContents}>
					<nav className={notesStyle.notesSideBarNavbar}>
						<Link to="/" className={notesStyle.notesSideBarLink}>
							<h2 className={notesStyle.notesSideBarLogoText}>
								Ops<span id={notesStyle.notesSideBarLogoText}>pad</span>
							</h2>
							<img
								src="servers (3) 4.png"
								alt="logo"
								className={notesStyle.notesSideLogoImg}
							/>
						</Link>
						<div className={notesStyle.notesSideBarServers}>
							<div className={notesStyle.notesSideBarServersFlex}>
								<img
									src="sports_volleyball.png"
									alt="logo"
									className={notesStyle.notesSideServersImg}
								/>
								<span className={notesStyle.notesSideBarServersText}>
									Servers List
								</span>
								<img
									src="Vector.png"
									alt="logo"
									className={notesStyle.notesSideBarServersImg}
								/>
							</div>
							<ul className={notesStyle.notesSideBarServersLists}>
								<li
									className={notesStyle.notesSideBarServersList}
									id="notesSideBarServersList"
								>
									HNG Server
								</li>
								<li className={notesStyle.notesSideBarServersList}>
									AYO Server
								</li>
								<li className={notesStyle.notesSideBarServersList}>
									OMO Server
								</li>
							</ul>
							<button type="button" className={notesStyle.notesServersBtn}>
								<span className={notesStyle.notesServersBtnText}>
									Add Server
								</span>
								<img
									src="Vector2.png"
									alt="img"
									className={notesStyle.notesSideBarServersBtnImg}
								/>
							</button>
							<p>Settings</p>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
}

export default NotesSideBar;
