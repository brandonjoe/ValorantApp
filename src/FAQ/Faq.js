import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import FaqContainer from './FaqContainer.js'
class Faq extends Component {
    render() {
        return (
            <div>
                <Nav />
                <FaqContainer />
            </div>
        );
    }
}

export default Faq;