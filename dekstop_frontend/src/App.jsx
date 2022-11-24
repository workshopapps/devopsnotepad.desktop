import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Notes from './Pages/notes/Notes';
import Home from './Pages/home/Home';

function App() {
	return (
		<div className="App">
		  <Routes>
			<Route  path="/" element={<Home />} />
			<Route exact path="/notes" element={<Notes/>}/>
		  </Routes>
		</div>
	);
}

export default App;
