import React, { Component } from 'react';
import {AppConsumer} from '../State/context';
import classes from './LineupItem.module.css';
import Difficulty from './Icons/Difficulty.js';
import Essential from './Icons/Essential.js';
class LineupItem extends Component {
    render() {
        const {id, title, info, essential, difficulty} = this.props.lineup;
        let essential_icon;
        if(essential === true){
            essential_icon = <div className={classes.essential_icon}>Essential</div>
        } 
        return (
            <div className={classes.container}>
                <AppConsumer>
                    {(value) => (
                        <div className={classes.main} onClick={() => value.setDetailLineup(id)}>
                            <h1>{title}</h1>
                            <Difficulty color={difficulty} />
                            {essential_icon}
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}

export default LineupItem;