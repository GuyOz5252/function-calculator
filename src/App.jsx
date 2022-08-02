import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import Derivetive from './pages/Derivetive';

function App() {
	return (
		<Router>
			<div className="App font-Poppins">
				<Header />
				<SideBar />
				<div>
					<Routes>
						<Route path="/derivetive" element={<Derivetive />} />
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
