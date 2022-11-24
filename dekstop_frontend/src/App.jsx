import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Notes from './Pages/notes/Notes';
import Home from './Pages/home/Home';
import Settings from './Pages/Settings/MainSettings';
// import Sidenav from './Component/SideNav/SideNav';
import EditProfile from './Pages/Settings/EditProfile/EditProfile';


function App() {
	return (
		<div className="App">
			{/* <Sidenav /> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/notes" element={<Notes />} />
				<Route path='/settings' exact element={<Settings />} />
				<Route path='/edit-profile' exact element={<EditProfile />} />
			</Routes>
		</div>
	);
}

export default App;
