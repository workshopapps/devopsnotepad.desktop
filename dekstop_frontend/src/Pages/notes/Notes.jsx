import React from 'react';
import { Link } from 'react-router-dom';
import notesStyle from './Notes.module.css';

function Notes() {
	return (
		<div className={notesStyle.notesWrapper}>
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
							<img
								src="sports_volleyball.png"
								alt="logo"
								className={notesStyle.notesSideServersImg}
							/>
							<span className="{notesStyle.notesSideBarServersText}">
								Servers List
							</span>
							<img
								src="Vector.png"
								alt="logo"
								className={notesStyle.notesSideBarServersImg}
							/>
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
							<button type="button">
								Add Server
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
export default Notes;
