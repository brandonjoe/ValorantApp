import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import Lineups from '../../Components/Lineups.js';
import { AppContext } from '../../State/context.js';

class Bind extends Component {
	componentDidMount() {
		this.context.updateMap('bind', this.context.newDetail);
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

Bind.contextType = AppContext;

export default Bind;
