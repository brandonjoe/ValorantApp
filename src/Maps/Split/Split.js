import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js'
import classes from './Split.module.css';
import Lineups from '../../Components/Lineups.js'
import Maps from '../Maps.js';
import {AppConsumer, AppContext} from '../../State/context.js';


class Split extends Component {
    
componentWillMount(){
    this.context.updateMap("split", 0)
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

Split.contextType = AppContext;

export default Split;