import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, useLocation } from 'react-router-dom';
import Navbar from './Navbar/Navbar';
import Info from './Info/Info';
import Poloha from './Poloha/Poloha';
import Video from './Video/Video';
import Kontakt from './Kontakt/Kontakt';
import Pdf from './Pdf/Pdf';
import Vizualizace from './Vizualizace/Vizualizace';
import './App.scss';

// root route components combined together
const MainPage = () => {
	const location = useLocation()

	console.log(location)

	return (
		<>
			<Info />
			<Poloha />
			<Video />
			<Kontakt />
		</>
	);
}

const App = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path='/' exact>
					<Redirect to='/B60804' />
				</Route>
				<Route path='/:code' exact component={MainPage} />
				<Route path='/:code/karta' exact>
					<Pdf pdfPath={`/dynamic/:code/karta.pdf`} dynamic/>
				</Route>
				<Route path='/:code/brozura' exact>
					<Pdf pdfPath='/static/brozura.pdf'/>
				</Route>
				<Route path='/:code/vizualizace' exact component={Vizualizace} />
			</Switch>
		</Router>
	);
};

export default App;