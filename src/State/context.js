import React, { Component } from 'react';
import {bind_data, bind_detail} from '../Data/bind_data.js'
import {haven_data, haven_detail} from '../Data/haven_data.js'
const AppContext = React.createContext();

class AppProvider extends Component {
    state={
        lineups: [],
        detailLineup: {},
        currentMap: ''
        
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
            return {lineups: tempLineups,
                    currentMap: 'Bind',
                    detailLineup: bind_detail
                    
            }
            
        }) 
    }
    updateHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            const singleItem = {...item};
            tempLineups = [...tempLineups, singleItem];
        })
        this.setState(() => {
            return {lineups: tempLineups,
                    currentMap: 'Haven',
                    detailLineup: haven_detail
                }
            
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
    showEasy = () => {
        const tempLineups = [];
        this.state.lineups.forEach(item => {
            console.log(item)
        })
    }
    
    render() {
        return (
            <AppContext.Provider value={
                {
                    ...this.state,
                    setDetailLineup: this.setDetailLineup,
                    updateBind: this.updateBind,
                    updateHaven: this.updateHaven,
                    showEasy: this.showEasy
                }
            }
           >
               {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;
export {AppProvider, AppConsumer, AppContext};