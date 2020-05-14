import React from 'react';
import classes from './Difficulty.module.css';

const Difficulty = (props) => {
    const difficulty = props.color;
    let icon;
    if (difficulty == "Easy"){
        icon = classes.colorGreen
    } else if (difficulty == "Medium"){
        icon = classes.colorYellow
    } else if (difficulty == "Hard"){
        icon = classes.colorRed
    }
    return (
        <div className={classes.container}>
            <h1 className={`${classes.difficulty_level} ${icon}`}>{props.color}</h1>
        </div>
    );
};

export default Difficulty;