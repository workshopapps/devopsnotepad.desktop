import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Notification from './Pages/Notification/Notification'

function App() {
	return (
		<div className="App">
		  <Routes>
			<Route  path="/" element={<Home />} />
			<Route exact path="/note" element={<Note/>}/>
			<Route exact path="/notification" element={<Notification />}/>
		  </Routes>
		</div>
	);
}

export default App;
