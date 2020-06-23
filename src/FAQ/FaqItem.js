import React from 'react';
import classes from './FaqItem.module.css'

const FaqItem = (props) => {
    return (
        <div className={classes.container} >
            <div className={classes.question}><span style={{color: "rgb(246,68,82)"}}>./</span> {props.question}</div>
            <div className={classes.answer}>{props.answer}</div>
        </div>
    );
};

export default FaqItem;