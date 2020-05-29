import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js';
import classes from './Bind.module.css';
import Lineups from '../../Components/Lineups.js';
import Maps from '../Maps.js';
import { AppConsumer, AppContext } from '../../State/context.js';

class Bind extends Component {
	componentDidMount() {
		this.context.updateMap('bind', this.context.newDetail);
	}

	render() {
		return (
			<div>
				<Nav />
				<Lineups />
				<Maps />
			</div>
		);
	}
}

Bind.contextType = AppContext;

export default Bind;
