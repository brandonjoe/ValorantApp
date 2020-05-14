import React, { Component } from 'react';
import classes from "./Lineups.module.css";
import {AppConsumer, AppContext} from '../State/context.js'
import LineupItem from './LineupItem.js'
import LineupDetail from './LineupDetail.js'
import Filter from './Filter.js'

class Lineups extends Component {

    componentWillMount () {
        console.log(window.location.pathname)
    }
    render() {
        return (

                     <div className={classes.container}>
                     <div className={classes.main}>
                         <div className={classes.lineup_selector}>
                             <Filter />
                            <div className={classes.lineup_selector_main }>
                                <AppConsumer>
                                    {(value)=> {
                                        return (value.lineups.map(lineup => {
                                            return <LineupItem key={lineup.id} lineup={lineup}/>
                                        })
                                        )
                                    }}
                                </AppConsumer>
                            </div>
                         </div>
                         
                         <div className={classes.lineup_detail}>
                             <AppConsumer>
                                 {(value) => {
                                     return <h1 className={classes.map_title}>{value.currentMap}</h1>
                                 }}
                             </AppConsumer>
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

export default Lineups;