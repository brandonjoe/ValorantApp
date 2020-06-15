import React from 'react';
import classes from './LogItem.module.css';


const LogItem = (props) => {
    let style;
   if(props.logs.id%2 === 0){
    style={
        backgroundColor: "rgba(68, 68, 68, 0.473)"
    }
   }
   
    return (
        <div style={style} className={classes.container}>
            <h1 className={classes.log}>{props.logs.date}</h1>
    <h2 className={classes.log}>{props.logs.description}</h2>
        </div>
    );
};

export default LogItem;