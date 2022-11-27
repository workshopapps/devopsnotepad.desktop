import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Settings from './Pages/Settings/MainSettings';
import EditProfile from './Pages/Settings/EditProfile/EditProfile';
import Joined from './Pages/add_server/Joined/Joined';
import Notification from './Pages/Notification/Notification';
import Language from './Pages/Settings/components/Languages/Language';
import TextResizer from './Pages/Settings/components/TextResizer/TextResizer';

function App() {
	return (
		<div className="App">
		<div style={{display: 'none'}}><TextResizer/></div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/note" element={<Note />} />
				<Route exact path="/settings" element={<Settings />} />
				<Route exact path="/edit-profile" element={<EditProfile />} />
				<Route exact path="/add-server" element={<Joined />} />
				<Route exact path="/notification" element={<Notification />} />
				<Route exact path="/languages" element={<Language />} />
			</Routes>
			
		</div>
	);
}

export default App;
