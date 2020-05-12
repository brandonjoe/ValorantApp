import React from 'react';
import Intro from './Intro.js'
import Nav from '../Nav/Nav.js'
import classes from './Landing.module.css';
const Landing = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <Intro />
        </div>
    );
};

export default Landing;