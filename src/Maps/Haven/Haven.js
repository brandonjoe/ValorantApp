import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js'
import {AppContext} from '../../State/context.js';
import Lineups from '../../Components/Lineups.js';
class Haven extends Component {
    
    componentDidMount(){
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