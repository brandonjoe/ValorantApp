import React, { Component } from 'react';
import { bind_data, bind_detail } from '../Data/bind_data.js'
import { haven_data, haven_detail } from '../Data/haven_data.js'
const AppContext = React.createContext();

class AppProvider extends Component {
    state = {
        lineups: [],
        detailLineup: {},
        currentMap: '',
        selectedFilters: {
            easy: false,
            medium: false,
            hard: false
        },
        isEssential: false
    }
    componentWillMount() {

    }

    updateBind = () => {
        let tempLineups = [];
        bind_data.forEach(item => {
            const singleItem = { ...item };
            tempLineups = [...tempLineups, singleItem];
        })
        this.setState(() => {
            return {
                lineups: tempLineups,
                currentMap: 'Bind',
                detailLineup: bind_detail,
                selectedFilters: {
                    easy: false,
                    medium: false,
                    hard: false
                },
                isEssential: false
            }

        })
    }
    updateHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            const singleItem = { ...item };
            tempLineups = [...tempLineups, singleItem];
        })
        this.setState(() => {
            return {
                lineups: tempLineups,
                currentMap: 'Haven',
                detailLineup: haven_detail,
                selectedFilters: {
                    easy: false,
                    medium: false,
                    hard: false
                },
                isEssential: false
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
    toggleEasy = () => {
        if(this.state.selectedFilters.easy === false){
            const tempLineups = [];
            let data_points;
            if(this.state.currentMap === 'Bind'){
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven'){
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty == "Easy") {
                    tempLineups.push(item)
                }
            })
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: true,
                        medium: false,
                        hard: false
                    },
                    IsEssential: false
                }
            })
        } else if (this.state.selectedFilters.easy === true) {
            this.resetPage();
        }
    }
    toggleMedium = () => {
        if(this.state.selectedFilters.medium === false){
            const tempLineups = [];
            let data_points;
            if(this.state.currentMap === 'Bind'){
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven'){
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty == "Medium") {
                    tempLineups.push(item)
                }
            })
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: false,
                        medium: true,
                        hard: false,
                    }, 
                    isEssential: false
                }
            })
        } else if (this.state.selectedFilters.medium === true) {
            this.resetPage();
        }
    }
    toggleHard = () => {
        if(this.state.selectedFilters.hard === false){
            const tempLineups = [];
            let data_points;
            if(this.state.currentMap === 'Bind'){
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven'){
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty == "Hard") {
                    tempLineups.push(item)
                }
            })
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: false,
                        medium: false,
                        hard: true,
                    },
                    isEssential: false
                }
            })
        } else if (this.state.selectedFilters.hard === true) {
            this.resetPage();
            console.log(this.state.isEssential)
        }
    }
    toggleEssential = () => {
        if(this.state.isEssential === false) {
            const tempLineups = [];
            let data_points;
            if(this.state.currentMap === 'Bind'){
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven'){
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.essential == true) {
                    tempLineups.push(item)
                }
            })
            this.setState(() => {
                return{
                    lineups: tempLineups,
                    isEssential: true
                }
            })
        } else if(this.state.isEssential === true){
            this.resetPage();
            
        }
    }
    resetPage = () => {
        if (this.state.currentMap == "Bind") {
            this.resetBind();
        } else if (this.state.currentMap == "Haven"){
            this.resetHaven();
        }   
    }


    //functions needed only inside context.js
    resetBind = () => {
        let tempLineups = [];
        bind_data.forEach(item => {
            tempLineups.push(item)
            
        })
        this.setState(() => {
            return {
                lineups: tempLineups,
                detailLineup: bind_detail,
                selectedFilters: {
                    easy: false, 
                    medium: false,
                    hard: false
                }, 
                isEssential: false
            }
        })
    }
    resetHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            tempLineups.push(item)
        })
        this.setState(() => {
            return {
                lineups: tempLineups,
                detailLineup: haven_detail,
                selectedFilters: {
                    easy: false, 
                    medium: false,
                    hard: false
                },
                isEssential: false
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
                    updateHaven: this.updateHaven,
                    toggleEasy: this.toggleEasy,
                    toggleMedium: this.toggleMedium,
                    toggleHard: this.toggleHard,
                    resetPage: this.resetPage,
                    toggleEssential: this.toggleEssential
                }
            }
            >
                {this.props.children}
            </AppContext.Provider>
        );
    }
}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer, AppContext };