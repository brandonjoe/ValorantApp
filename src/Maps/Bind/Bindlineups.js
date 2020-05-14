import React, { Component } from 'react';
import classes from "./Bindlineups.module.css";
import {bind_data} from '../../Data/bind_data.js'
import {AppConsumer} from '../../State/context.js'
import LineupItem from '../../Components/LineupItem.js'
import LineupDetail from '../../Components/LineupDetail.js'
import App from '../../App';

class Bindlineups extends Component {

    render() {
        return (
                    <div className={classes.container}>
                            <div className={classes.main}>
                                <div className={classes.lineup_selector}>
                                    <AppConsumer>
                                        {(value)=> {
                                            return value.lineups.map(lineup => {
                                                return <LineupItem key={lineup.id} lineup={lineup}/>
                                            })
                                        }}
                                    </AppConsumer>
                                </div>
                                <div className={classes.lineup_detail}>
                                    <AppConsumer>
                                        {(value) => {
                                            return <LineupDetail lineupdetails={value.detailLineup}/>
                                        }}
                                    </AppConsumer>
                                </div>
                            </div>
                        </div>
                        
    
        );
    }
}

export default Bindlineups;