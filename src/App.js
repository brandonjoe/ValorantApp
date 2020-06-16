import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Landing from './Landing/Landing.js';
import Bind from './Maps/Bind/Bind.js';
import Haven from './Maps/Haven/Haven.js';
import Split from './Maps/Split/Split.js';
import Ascent from './Maps/Ascent/Ascent.js';
import Logs from './Logs/Logs.js';
import Faq from './FAQ/Faq.js';
import Default from './Default/Default.js'
function App() {
	return (
		<div className="App">
				<Switch>
					<Route path={'/'} exact component={Landing} />
					<Route path={'/bind'} component={Bind} />
					<Route path={'/haven'} component={Haven} />
					<Route path={'/split'} component={Split} />
					<Route path={'/ascent'} component={Ascent} />
					<Route path={'/logs'} component={Logs} />
					<Route path={'/faq'} component={Faq} />
					<Route component={Default}/>
				</Switch>
		</div>
	);
}

export default App;
