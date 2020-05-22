import React from 'react';
import Intro from './Intro.js'
import Nav from '../Nav/Nav.js'
import Maps from '../Maps/Maps.js'
import classes from './Landing.module.css';
import { ParallaxProvider } from 'react-scroll-parallax';
const Landing = () => {
    return (
        <ParallaxProvider>
        <div className={classes.container}>
            
            <Nav />
            <Intro />
            <Maps />
        </div>
        </ParallaxProvider>
    );
};

export default Landing;