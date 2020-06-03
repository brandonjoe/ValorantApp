import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import LogsContainer from './LogsContainer.js';
class Logs extends Component {
    render() {
        return (
            <div>
                <Nav />
                <LogsContainer />
            </div>
        );
    }
}

export default Logs;