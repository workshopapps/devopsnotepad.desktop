/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ServerProvider } from './Components/Context/ServerContext';
import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Settings from './Pages/Settings/MainSettings';
import Notification from './Pages/Notification/Notification';
import Password from './Pages/Password/Password';
import AddServer from './Pages/AddServer/AddServer';
import TextResizer from './Pages/Settings/components/TextResizer/TextResizer';
import { About } from './Pages/Settings/About/About';
import Faq from './Pages/Settings/Faq/Faq';
import { useDarkMode } from './Pages/Settings/components/useDarkmode';
import { lightTheme, darkTheme } from './Pages/Settings/components/Theme';
import { GlobalStyles } from './Pages/Settings/components/Global';

import Onboarding from './Components/Onboarding/Onboarding';
import ServerDashBoard from './Pages/ServerDashBoard/ServerDashboard';

function App() {
	const [theme, componentMounted] = useDarkMode();
	const themeMode = theme === 'light' ? lightTheme : darkTheme;

	if (!componentMounted) {
		return <div />;
	}

	return (
		<ThemeProvider theme={themeMode}>
			<>
				<GlobalStyles />
				<ServerProvider>
					<div className="App">
						<div style={{ display: 'none' }}>
							<TextResizer />
						</div>
						<Routes>
							<Route path="/" element={<Home />} />

							{/* <Route path="/server/:name" element={<ServerDashboard />} /> */}

							<Route exact path="/note" element={<Note />} />
							<Route exact path="/settings" element={<Settings />} />
							<Route exact path="/server/password" element={<Password />} />
							<Route exact path="/add-server" element={<AddServer />} />
							<Route exact path="/notification" element={<Notification />} />
							<Route exact path="/onboarding" element={<Onboarding />} />
							<Route exact path="/about" element={<About />} />
							<Route exact path="/faq" element={<Faq />} />
							<Route exact path="/serverDashBoard" element={<ServerDashBoard />} />
						</Routes>
					</div>
				</ServerProvider>
			</>
		</ThemeProvider>
	);
}

export default App;
