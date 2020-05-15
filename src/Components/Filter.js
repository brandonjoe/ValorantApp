import React, { Component } from 'react';
import classes from './Filter.module.css';
import { AppConsumer } from '../State/context';

class Filter extends Component {
    render() {
        return (
            <div className={classes.container}>
                <h1>Filters</h1>

                <AppConsumer>
                    {(value) => {

                        return (
                            <div className={classes.main}>
                                <h1 style={{ backgroundColor: value.selectedFilters.easy ? "green" : "grey" }} onClick={() => value.toggleEasy()}>Easy</h1>
                                <h1 style={{ backgroundColor: value.selectedFilters.medium ? "yellow" : "grey" }} onClick={() => value.toggleMedium()}>Medium</h1>
                                <h1 style={{ backgroundColor: value.selectedFilters.hard ? "red" : "grey" }} onClick={() => value.toggleHard()}>Hard</h1>
                                <h1 style={{ backgroundColor: value.isEssential ? "blue" : "grey" }} onClick={() => value.toggleEssential()}>Essential</h1>
                                <h1 onClick={() => value.resetPage()}>Reset</h1>
                            </div>

                        )
                    }}
                </AppConsumer>

            </div>
        );
    }
}

export default Filter;