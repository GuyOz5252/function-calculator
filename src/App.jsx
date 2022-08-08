import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import SideBar from './components/side-bar/SideBar';
import Derivative from './pages/Derivetive';
import InterceptionPoints from './pages/InterceptionPoints';

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
							element={<Derivative functionToCalculate={functionToCalculate} />}
						/>
						<Route
							path="/interception-points"
							element={
								<InterceptionPoints functionToCalculate={functionToCalculate} />
							}
						/>
						<Route
							path="/derivative"
							element={<Derivative functionToCalculate={functionToCalculate} />}
						/>
					</Routes>
				</div>
			</div>
		</Router>
	);
}

export default App;
