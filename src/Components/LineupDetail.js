import React, { Component } from 'react';
import {AppConsumer} from '../State/context.js'
import classes from './LineupDetail.module.css';
import Difficulty from './Icons/Difficulty.js'
class LineupDetail extends Component {
    
    render() {
        const {id, title, info, video, essential, difficulty, isActive, side} = this.props.lineupdetails;
        let essential_icon;
        let activeclass;
        let dart_side;
        if(essential === true){
            essential_icon = <div className={classes.essential_icon}>Essential</div>
        } 
        if(side === "Attacking"){
            dart_side = <div className={`${classes.essential_icon} ${classes.attacking}`}>Attacking</div>
        } else if (side === "Defending"){
            dart_side = <div className={`${classes.essential_icon} ${classes.defending}`}>Defending</div>
        } else{
            dart_side = ""
        }
        return (
            
            <div className={classes.container}>
                <AppConsumer>
                    {(value) => (

                        <div className={classes.main}>
                            <div className={classes.info}>
                                <div className={classes.textbox}>
                                    <h1>{title}</h1>
                                    {info}
                                    <Difficulty color={difficulty} />
                                    {essential_icon}
                                    {dart_side}
                                </div>                                
                            </div>
                            <div className={classes.info_media}>
                            <iframe src={video} className={classes.video} width="640" height="360" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>
                            </div>
                           
                        </div>
        )}
                </AppConsumer>
                
            </div>
        );
    }
}

export default LineupDetail;