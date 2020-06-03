import React from 'react';
import Intro from './Intro.js'
import Nav from '../Nav/Nav.js'
import Maps from '../Maps/Maps.js'
import classes from './Landing.module.css';
import Objective from './Objective.js'

const Landing = () => {
    return (

        <div className={classes.container}>
            
            <Nav />
            <Intro />
            <Objective />
            <Maps />
        </div>
    );
};

export default Landing;