import React from 'react';
import classes from './Map.module.css';

const Map = (props) => {
    return (
        <div className={classes.container}>
            {props.title}
        </div>
    );
};

export default Map;