import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Note from './pages/notes/Note';
import Home from './pages/home/Home';
import Settings from './pages/Settings/MainSettings';
// import Sidenav from './Component/SideNav/SideNav';
import EditProfile from './pages/Settings/EditProfile/EditProfile';

function App() {
	return (
		<div className="App">
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/note" element={<Note />} />
				<Route exact path="/settings" element={<Settings />} />
				<Route exact path="/edit-profile" element={<EditProfile />} />
			</Routes>
		</div>
	);
}

export default App;
