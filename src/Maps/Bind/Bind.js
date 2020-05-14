import React, { Component, useContext } from 'react';
import Nav from '../../Nav/Nav.js'
import classes from './Bind.module.css';
import Bindlineups from "./Bindlineups.js"
import Maps from '../Maps.js';
import {AppConsumer} from '../../State/context.js';
import App from '../../App.js';


class Bind extends React.Component {
    
componentWillMount(){
    console.log(this.context)
}
fill = () => {

}

    render() {
        return (
            <div>
            <Nav />
            <Bindlineups />
            <Maps />
        </div>
        );
    }
}



export default Bind;