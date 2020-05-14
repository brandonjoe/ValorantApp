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

                        <div className={classes.main}>
                            <div className={classes.info}>
                                <h1>{title}</h1>
                            {info}
                            </div>
                            <div>
                            <iframe src="https://player.vimeo.com/video/418358446" width="640" height="360" frameborder="0" allow="autoplay; fullscreen" allowfullscreen></iframe>
                            </div>
                           
                        </div>
        )}
                </AppConsumer>
                
            </div>
        );
    }
}

export default LineupDetail;