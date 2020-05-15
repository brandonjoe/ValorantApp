import React from 'react';
import classes from './Essential.module.css';

const Essential = (props) => {
    const essential = props.essential;
    let icon;

    return (
        
        <div className={classes.container}>
            <h1 className={`${classes.essential_button} ${icon}`}>Essential</h1>
        </div>
    );
};

export default Essential;