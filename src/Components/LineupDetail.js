import React, { Component } from 'react';
import {AppConsumer} from '../State/context.js'
import classes from './LineupDetail.module.css';
class LineupDetail extends Component {
    
    render() {
        const {id, title, info} = this.props.lineupdetails;
        return (
            
            <div className={classes.container}>
                <AppConsumer>
                    {(value) => (

                        <div>
                            {title}
                            {info}
                        </div>
        )}
                </AppConsumer>
                
            </div>
        );
    }
}

export default LineupDetail;