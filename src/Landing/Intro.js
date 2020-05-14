import React from 'react';
import classes from './Intro.module.css';
import sova_image from '../Media/intro_sova.png'
const Intro = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.left}>
                    <div className={classes.info}>
                    ds
                    </div>
                </div>
                <div className={classes.right}>
                    <img className={classes.sova_image} alt={"sova"}src={sova_image}></img>
                    <div className={classes.sova_text}>SOVA</div>
                </div>
            </div>
        </div>
    );
};

export default Intro;