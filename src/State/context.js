import React, { Component } from 'react';
import {bind_data, bind_detail} from '../Data/bind_data.js'
import {haven_data, haven_detail} from '../Data/haven_data.js'
const AppContext = React.createContext();

class AppProvider extends Component {
    state={
        lineups: [],
        detailLineup: {}
    }
    componentWillMount(){
        
    }
    
    updateBind = () => {
        let tempLineups = [];
        bind_data.forEach(item => {
            const singleItem = {...item};
            tempLineups = [...tempLineups, singleItem];
        })
        this.setState(() => {
            return {lineups: tempLineups }
            
        }) 
    }
    updateHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            const singleItem = {...item};
            tempLineups = [...tempLineups, singleItem];
        })
        this.setState(() => {
            return {lineups: tempLineups }
            
        }) 
    }
    getLineup = (id) => {
        const lineup = this.state.lineups.find(item => item.id === id);
        return lineup;
    }
    setDetailLineup = (id) => {
        const lineup = this.getLineup(id);
        this.setState(() => {
            return {
                detailLineup: lineup
            }
        })
    }
    
    render() {
        return (
            <AppContext.Provider value={
                {
                    ...this.state,
                    setDetailLineup: this.setDetailLineup,
                    updateBind: this.updateBind,
                    updateHaven: this.updateHaven
                }
            }
           >
               {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;

export {AppProvider, AppConsumer};