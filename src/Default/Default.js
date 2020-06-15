import React from 'react';
import classes from './Default.module.css'
import Nav from '../Nav/Nav';
import { Link } from 'react-router-dom';
const Default = () => {
    return (
        <div className={classes.container}>
            <Nav />
            <div className={classes.main}>
                <div className={classes.tint}></div>
                <h1 className={classes.error}>Oops!</h1>
                <h2 className={classes.error2}>404 Page not found!</h2>
                <h3 className={classes.error3}>The requested URL <span  style={{ color: 'rgb(255, 70, 85)' }} className={classes.text}>{window.location.pathname}</span> was not found.</h3>
                <h3 className={classes.error3}>Please start from the  <Link style={{'textDecoration': 'none', 'display': 'inline-block'}}  className={classes.link} to={`/`}><div>home</div> </Link>, or select a map from the top to get started.</h3>
            </div>
        </div>
    );
};

export default Default;