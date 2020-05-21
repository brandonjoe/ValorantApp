import React, { Component } from 'react';
import {AppConsumer} from '../../State/context.js'
import classes from './Video.module.css';
var Spinner = require('react-spinkit');
class Video extends Component {

    render() {
        return (
           <AppConsumer>
               {(value) => (
                   <div className={classes.container}>
           
                       <iframe
									src={value.detailLineup.video}
									className={classes.video}
									width="640"
									height="360"
									frameBorder="0"
									allow="autoplay; fullscreen"
									allowFullScreen
								/>
                   </div>
               )}
           </AppConsumer>
        );
    }
}

export default Video;