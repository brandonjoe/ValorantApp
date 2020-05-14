import React, { Component } from 'react';
import {AppConsumer} from '../State/context';
import classes from './LineupItem.module.css';
import Difficulty from './Difficulty.js'
class LineupItem extends Component {
    render() {
        const {id, title, info, essential, difficulty} = this.props.lineup;
        return (
            <div className={classes.container}>
                <AppConsumer>
                    {(value) => (
                        <div className={classes.main} onClick={() => value.setDetailLineup(id)}>
                            <h1>{title}</h1>
                            <Difficulty color={difficulty} />
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}

export default LineupItem;