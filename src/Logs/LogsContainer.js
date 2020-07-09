import React, { Component } from 'react';
import classes from './LogsContainer.module.css';
import { AppConsumer, AppContext } from '../State/context.js';
import LogItem from '../Logs/LogItem.js'

class LogsContainer extends Component {
    componentDidMount = () => {
        this.context.setLogs();
    }
    logFilter = (logItem) => {
        let d = new Date();
        if(logItem.date) {
            let month = parseInt(logItem.date.substring(0,logItem.date.indexOf('/')))
            if(month == d.getMonth()+1){
                return true;
            }
           
        }
    }
    render() {
        return (
           
            <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.left} />
                <div className={classes.middle}>
                    <div className={classes.whiteLine}></div>
                    <div className={classes.header}>Logs</div>
                    <div className={classes.content}>
                        <div className={classes.content_info}>
                           Here you'll find updates and changes to the site regarding content. Any additions of new darts, maps or more content in general (shock darts/ultimates) will all be listed below. Although many of the darts here avoid relying on the in game HUD, darts that are altered due to this will either be removed/updated accordingly. Any logs that are more than 30 days old will also be removed. Site bugs will be listed to a minimum unless they ruin or prevent the UI/UX. 
                        </div>
                        <div className={classes.content_logs}>
                            <div className={classes.log_container}>
                            <AppConsumer>
                            {(value) => {
                                return value.logs.map((item) => {
                                    this.logFilter(item);
                                    return <LogItem className={classes.lineupItem} key={item.id} logs={item} />;
                                });
                            }}
                            </AppConsumer>
                            </div>
                       
                        </div>
                    </div>
                </div>
                <div className={classes.right} />
            </div>
        </div>
 
        );
    }
}
LogsContainer.contextType = AppContext;
export default LogsContainer;