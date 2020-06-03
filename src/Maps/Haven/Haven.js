import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js'
import classes from './Haven.module.css';
import Maps from '../Maps.js';
import {AppConsumer, AppContext} from '../../State/context.js';
import Lineups from '../../Components/Lineups.js';
class Haven extends Component {
    
    componentWillMount(){
        this.context.updateMap("haven", this.context.newDetail)
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
    
    Haven.contextType = AppContext;
    
    export default Haven;