import React, { Component } from 'react';
import Nav from '../Nav/Nav'
import FaqContainer from './FaqContainer.js';
import Footer from '../Footer/Footer.js';
class Faq extends Component {
    render() {
        return (
            <div>
                <Nav />
                <FaqContainer />
                <Footer />
            </div>
        );
    }
}

export default Faq;