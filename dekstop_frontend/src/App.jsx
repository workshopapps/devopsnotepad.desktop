import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Notification from './Pages/Notification/Notification'
import Settings from './Pages/Settings/MainSettings';
// import Sidenav from './Component/SideNav/SideNav';
import EditProfile from './Pages/Settings/EditProfile/EditProfile';

function App() {
	return (
		<div className="App">

		  <Routes>
			<Route  path="/" element={<Home />} />
			<Route exact path="/note" element={<Note/>}/>
			<Route exact path="/notification" element={<Notification />}/>
			<Route exact path="/settings" element={<Settings />} />
			<Route exact path="/edit-profile" element={<EditProfile />} />
		  </Routes>

		</div>
	);
}

export default App;
