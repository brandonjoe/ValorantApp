import React, { Component } from 'react';
import classes from './LogsContainer.module.css';
import { AppConsumer, AppContext } from '../State/context.js';
import LogItem from '../Logs/LogItem.js'

class LogsContainer extends Component {
    componentWillMount = () => {
        this.context.setLogs();
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
                            Consectetur quis et eiusmod duis eiusmod excepteur adipisicing cupidatat minim non
                            labore laboris consectetur. Aute proident et ex quis occaecat irure reprehenderit quis
                            cillum tempor anim incididunt incididunt est. Id voluptate sint duis minim proident ut
                            laborum. Ex laboris officia id irure labore officia in minim exercitation sunt
                            consectetur. Eu anim proident consectetur qui dolor. Dolor nisi fugiat excepteur sint
                            tempor adipisicing.
                        </div>
                        <div className={classes.content_logs}>
                            <div className={classes.log_container}>
                            <AppConsumer>
                            {(value) => {
                                console.log(value.logs)
                                return value.logs.map((item) => {
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