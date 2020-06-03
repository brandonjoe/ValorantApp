import React, { Component, useRef } from 'react';
import ScrollToTop from './Animation/ScrollToTop.js';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing.js';
import Bind from './Maps/Bind/Bind.js';
import Haven from './Maps/Haven/Haven.js';
import Split from './Maps/Split/Split.js';
import Ascent from './Maps/Ascent/Ascent.js';
import Logs from './Logs/Logs.js';
function App() {
	return (

		<div className="App">
		

			<ScrollToTop>
				<Switch>
					<Route path={'/'} exact component={Landing} />
					<Route path={'/bind'} exact component={Bind} />
					<Route path={'/haven'}  component={Haven} />
          			<Route path={'/split'}  component={Split} />
					  <Route path={'/ascent'}  component={Ascent} />
					<Route path={'/logs'}  component={Logs} />
				</Switch>
			</ScrollToTop>		

		</div>
	);
}

export default App;
