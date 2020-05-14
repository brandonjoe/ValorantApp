import React, { Component } from 'react';
import {AppConsumer} from '../State/context';
import classes from './LineupItem.module.css';
class LineupItem extends Component {
    render() {
        const {id, title, info} = this.props.lineup;
        return (
            <div className={classes.container}>
                <AppConsumer>
                    {(value) => (
                        <div className={classes.main} onClick={() => value.setDetailLineup(id)}>
                            {title}
                            {id}
                        </div>
                    )}
                </AppConsumer>
            </div>
        );
    }
}

export default LineupItem;