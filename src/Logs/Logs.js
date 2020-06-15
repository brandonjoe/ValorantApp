import React, { Component } from 'react';
import Nav from '../Nav/Nav.js';
import LogsContainer from './LogsContainer.js';
import Footer from '../Footer/Footer.js';
class Logs extends Component {
    render() {
        return (
            <div style={{height: "100%"}}>
                <Nav />
                <LogsContainer />
                <Footer />
            </div>
        );
    }
}

export default Logs;