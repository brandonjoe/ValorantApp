import React, { Component } from 'react';
import Nav from '../../Nav/Nav.js'
import Lineups from '../../Components/Lineups.js'
import { AppContext} from '../../State/context.js';


class Split extends Component {
    
componentDidMount(){
    this.context.updateMap("split", 0)
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

Split.contextType = AppContext;

export default Split;