import React from 'react';
import {AppConsumer} from '../State/context'
import classes from './Backdrop.module.css'
const backdrop = props => (
    <AppConsumer>
        {(value) => (
            <div className={classes.backdrop} onClick={() => value.backdropClickHandler()} />
        )}
            
    </AppConsumer>
   
);

export default backdrop;