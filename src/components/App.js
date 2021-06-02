import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
				<Route path='/' exact component={MainPage} />
				<Route path='/karta' exact>
					<Pdf pdfPath='/pdfs/karta.pdf'/>
				</Route>
				<Route path='/brozura' exact>
					<Pdf pdfPath='/pdfs/brozura.pdf'/>
				</Route>
				<Route path='/vizualizace' exact component={Vizualizace} />
			</Switch>
		</Router>
	);
};

export default App;