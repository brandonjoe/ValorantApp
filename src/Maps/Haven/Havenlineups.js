import React, { Component } from 'react';
import classes from "./Havenlineups.module.css";

import {AppConsumer} from '../../State/context.js'
import LineupItem from '../../Components/LineupItem.js'
import LineupDetail from '../../Components/LineupDetail.js'
import App from '../../App';

class Havenlineups extends Component {

    render() {
        return (
                    <div className={classes.container}>
                            <div className={classes.main}>
                                <div className={classes.lineup_selector}>
                                    <AppConsumer>
                                        {(value)=> {
                                            return value.bindlineups.map(lineup => {
                                                return <LineupItem key={lineup.id} lineup={lineup}/>
                                            })
                                        }}
                                    </AppConsumer>
                                </div>
                                <div className={classes.lineup_detail}>
                                    <AppConsumer>
                                        {(value) => {
                                            console.log(value)
                                            return <LineupDetail lineupdetails={value.detailLineup}/>
                                        }}
                                    </AppConsumer>
                                </div>
                            </div>
                        </div>
                        
    
        );
    }
}

export default Havenlineups;