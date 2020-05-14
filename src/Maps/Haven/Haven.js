import React from 'react';
import Nav from '../../Nav/Nav.js'
import classes from './Haven.module.css';
import Havenlineups from './Havenlineups.js'
import Maps from '../Maps.js';
const Haven = () => {
    return (
        <div>
            <Nav />
            <Havenlineups />
            <Maps />
        </div>
    );
};


export default Haven;