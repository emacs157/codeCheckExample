import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/home';

const App: React.FC = () => (
	<Router>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</Router>
);

export default App;
