import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';

import Lineups from '../../Components/Lineups.js';
import { AppConsumer, AppContext } from '../../State/context.js';

class Ascent extends Component {
	componentDidMount() {
		this.context.updateMap('ascent', this.context.newDetail);
	}

	render() {
		return (
			<div>
				<Nav />
				<Lineups />
			</div>
		);
	}
}

Ascent.contextType = AppContext;

export default Ascent;
