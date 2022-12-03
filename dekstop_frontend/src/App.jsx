/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ServerProvider } from './Components/Context/ServerContext';
import Note from './Pages/notes/Note';
import Home from './Pages/home/Home';
import Settings from './Pages/Settings/MainSettings';
import Notification from './Pages/Notification/Notification';
import Password from './Pages/Password/Password';
import AddServer from './Pages/AddServer/AddServer';
import TextResizer from './Pages/Settings/components/TextResizer/TextResizer';
import Onboarding from './Components/Onboarding/Onboarding';
import ServerDashBoard from './Pages/ServerDashBoard/ServerDashboard';
import SimpleNotification from './Pages/Notification/SimpleNotification/SimpleNotification';
import AvailabilityNotification from './Pages/Notification/AvailabilityNotification/AvailabilityNotification';

function App() {
	return (
		<ServerProvider>
			<div className="App">
				<div style={{ display: 'none' }}>
					<TextResizer />
				</div>
				<Routes>
					<Route path="/" element={<Home />} />

					<Route path="/server/:id" element={<ServerDashBoard />}>
						<Route index element={<Note />} />
						<Route path="note" element={<Note />} />
						<Route path="password" element={<Password />} />
						<Route path="notification" element={<Notification />} />
					</Route>

					<Route exact path="/note" element={<Note />} />
					<Route exact path="/settings" element={<Settings />} />

					<Route exact path="/add-server" element={<AddServer />} />
					{/* <Route exact path="/notification" element={<Notification />} /> */}
					<Route exact path="/onboarding" element={<Onboarding />} />
					<Route exact path="/serverDashBoard" element={<ServerDashBoard />} />
					<Route
						exact
						path="/simpleNotification"
						element={<SimpleNotification />}
					/>
					<Route
						exact
						path="/availabilityNotification"
						element={<AvailabilityNotification />}
					/>
				</Routes>
			</div>
		</ServerProvider>
	);
}

export default App;
