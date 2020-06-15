import React from 'react';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <div className={classes.container}>
            <h1 className={classes.line1}>Designed and developed by <a target="_blank" style={{ textDecoration: 'none' }} className={classes.line2} rel="noopener noreferrer" href="https://brandonjoe.com/">Brandon Joe</a></h1>
            <h2 className={classes.line2}>Inspiration was can be found at <a  target="_blank" style={{ textDecoration: 'none' }} className={classes.line2} rel="noopener noreferrer" href="https://playvalorant.com/en-us/">playValorant.com</a> and the <a style={{ textDecoration: 'none' }} className={classes.line2} target="_blank" rel="noopener noreferrer" href="https://github.com/brandonjoe/ValorantApp/blob/master/README.md">Readme</a></h2>
        </div>
    );
};

export default Footer;