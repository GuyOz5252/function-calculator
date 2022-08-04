import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import Derivetive from './pages/Derivetive';

function App() {
	const [functionToCalculate, setFunction] = useState('');

	const callbackFunction = functionToCalculate => {
		setFunction(functionToCalculate);
	};

	return (
		<Router>
			<div className="App font-Poppins">
				<Header callbackFunction={callbackFunction} />
				<SideBar />
				<div>
					<Routes>
						<Route
							path="/"
							element={<Derivetive functionToCalculate={functionToCalculate} />}
						/>
						<Route
							path="/derivetive"
							element={<Derivetive functionToCalculate={functionToCalculate} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
