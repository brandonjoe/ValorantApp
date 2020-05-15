import React, { Component } from 'react';
import {AppConsumer} from '../State/context';
import classes from './LineupItem.module.css';
import Difficulty from './Icons/Difficulty.js';
import Essential from './Icons/Essential.js';
class LineupItem extends Component {
    render() {
        const {id, title, info, essential, difficulty, isActive, side} = this.props.lineup;
        let essential_icon;
        let activeclass;
        let dart_side;
        if(essential === true){
            essential_icon = <div className={classes.essential_icon}>Essential</div>
        } 
        if(isActive === true){
            activeclass = classes.active
        }
        if(side === "Attacking"){
            dart_side = <div className={`${classes.essential_icon} ${classes.attacking}`}>Attacking</div>
        } else if (side === "Defending"){
            dart_side = <div className={`${classes.essential_icon} ${classes.defending}`}>Defending</div>
        } else{
            dart_side = ""
        }
        return (
             <AppConsumer>
                    {(value) => (
            <div className={`${classes.container} ${activeclass}`}>
               
                        <div className={classes.main} onClick={() => value.setDetailLineup(id)}>
                            <h1>{title}</h1>
                            <Difficulty color={difficulty} />
                            {essential_icon}
                            {dart_side}
                        </div>
                   
            </div>
             )}
             </AppConsumer>
        );
    }
}

export default LineupItem;