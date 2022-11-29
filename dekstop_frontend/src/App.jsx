/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { useDarkMode } from './Pages/Settings/components/useDarkmode';
import { lightTheme, darkTheme } from './Pages/Settings/components/Theme';
import { GlobalStyles } from './Pages/Settings/components/Global';
import './App.css';

import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Settings from './Pages/Settings/MainSettings';
import EditProfile from './Pages/Settings/EditProfile/EditProfile';
// import Joined from './Pages/add_server/Joined/Joined';
import Notification from './Pages/Notification/Notification';

import Password from './Pages/Password/Password'
import TextResizer from './Pages/Settings/components/TextResizer/TextResizer';
import { About } from './Pages/Settings/About/About';
import Faq from './Pages/Settings/Faq/Faq';

function App() {
	const [theme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;
  
	if (!componentMounted) {
	  return <div />
	};
  

	return (
		<div className="App">
		<ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
			<div style={{ display: 'none' }}>
				<TextResizer />
			</div>
			
			<Routes>
				<Route path="/" element={<Home />} />
				<Route exact path="/note" element={<Note />} />
				<Route exact path="/settings" element={<Settings />} />
				<Route exact path="settings/edit-profile" element={<EditProfile />} />
				<Route exact path="/server/password" element={<Password />}/> 
				{/* <Route exact path="/add-server" element={<Joined />} /> */}
				<Route exact path="/notification" element={<Notification />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/faq" element={<Faq />} />
				
			</Routes>
			</>
			</ThemeProvider>
		</div>
	);
}

export default App;
