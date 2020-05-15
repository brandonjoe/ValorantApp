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
        isEssential: false,
        selectedSide: {
            defending: false,
            attacking: false
        }
    }
    componentDidMount() {
    }

    updateBind = () => {
        let tempLineups = [];
        bind_data.forEach(item => {
            item.isActive = false;
            tempLineups.push(item)
        })
        tempLineups[0].isActive = true;
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
                isEssential: false,
                selectedSide: {
                    defending: false,
                    attacking: false
                }
            }

        })
    }
    updateHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            item.isActive = false;
            tempLineups.push(item)

        })
        tempLineups[0].isActive = true;
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
                isEssential: false,
                selectedSide: {
                    defending: false,
                    attacking: false
                }
            }

        })
    }
    getLineup = (id) => {
        const lineup = this.state.lineups.find(item => item.id === id);
        return lineup;
    }
    setDetailLineup = (id) => {
        const lineup = this.getLineup(id);
        let tempLineups = [];
        this.state.lineups.forEach(item => {
            if (item.id === id) {
                item.isActive = true;
            } else {
                item.isActive = false;
            }
            tempLineups.push(item)
        })
        this.setState(() => {
            return {
                lineups: tempLineups,
                detailLineup: lineup
            }
        })

    }
    toggleEasy = () => {
        if (this.state.selectedFilters.easy === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty === "Easy") {
                    tempLineups.push(item)
                }
            })
            tempLineups[0].isActive = true;

            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: true,
                        medium: false,
                        hard: false
                    },
                    IsEssential: false,
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: false,
                        defending: false
                    }
                }
            })
        } else if (this.state.selectedFilters.easy === true) {
            this.resetPage();
        }
    }
    toggleMedium = () => {
        if (this.state.selectedFilters.medium === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty === "Medium") {
                    tempLineups.push(item)
                }
            })
            tempLineups[0].isActive = true;
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: false,
                        medium: true,
                        hard: false,
                    },
                    isEssential: false,
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: false,
                        defending: false
                    }
                }
            })
        } else if (this.state.selectedFilters.medium === true) {
            this.resetPage();
        }
    }
    toggleHard = () => {
        if (this.state.selectedFilters.hard === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.difficulty === "Hard") {
                    tempLineups.push(item)
                }
            })
            tempLineups[0].isActive = true;

            this.setState(() => {
                return {
                    lineups: tempLineups,
                    selectedFilters: {
                        easy: false,
                        medium: false,
                        hard: true,
                    },
                    isEssential: false,
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: false,
                        defending: false
                    }
                }
            })
        } else if (this.state.selectedFilters.hard === true) {
            this.resetPage();
        }
    }
    toggleEssential = () => {
        if (this.state.isEssential === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.essential === true) {
                    tempLineups.push(item)
                }
            })
            tempLineups[0].isActive = true;
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    isEssential: true,
                    selectedFilters: {
                        easy: false,
                        medium: false,
                        hard: false
                    },
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: false,
                        defending: false
                    }
                }
            })
        } else if (this.state.isEssential === true) {
            this.resetPage();

        }
    }
    toggleAttacking = () => {
        if (this.state.selectedSide.attacking === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.side === "Attacking") {
                    tempLineups.push(item)
                }
            })

            tempLineups[0].isActive = true;
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    isEssential: false,
                    selectedFilters: {
                        easy: false,
                        medium: false,
                        hard: false
                    },
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: true,
                        defending: false
                    }
                }
            })
        } else if (this.state.selectedSide.attacking === true) {
            this.resetPage();

        }
    }
    toggleDefending = () => {
        if (this.state.selectedSide.defending === false) {
            const tempLineups = [];
            let data_points;
            if (this.state.currentMap === 'Bind') {
                data_points = bind_data;
            } else if (this.state.currentMap === 'Haven') {
                data_points = haven_data;
            }
            data_points.forEach(item => {
                if (item.side === "Defending") {
                    tempLineups.push(item)
                }
            })
            tempLineups[0].isActive = true;
            this.setState(() => {
                return {
                    lineups: tempLineups,
                    isEssential: false,
                    selectedFilters: {
                        easy: false,
                        medium: false,
                        hard: false
                    },
                    detailLineup: tempLineups[0],
                    selectedSide: {
                        attacking: false,
                        defending: true
                    }
                }
            })
        } else if (this.state.selectedSide.defending === true) {
            this.resetPage();

        }
    }
    resetPage = () => {
        if (this.state.currentMap === "Bind") {
            this.resetBind();
        } else if (this.state.currentMap === "Haven") {
            this.resetHaven();
        }
    }


    //functions needed only inside context.js
    resetBind = () => {
        let tempLineups = [];
        bind_data.forEach(item => {
            item.isActive = false;
            tempLineups.push(item)

        })

        tempLineups[0].isActive = true;

        this.setState(() => {
            return {
                lineups: tempLineups,
                detailLineup: bind_detail,
                selectedFilters: {
                    easy: false,
                    medium: false,
                    hard: false
                },
                isEssential: false,
                selectedSide: {
                    attacking: false,
                    defending: false
                }
            }
        })
    }
    resetHaven = () => {
        let tempLineups = [];
        haven_data.forEach(item => {
            item.isActive = false;
            tempLineups.push(item)
        })
        tempLineups[0].isActive = true;
        this.setState(() => {
            return {
                lineups: tempLineups,
                detailLineup: haven_detail,
                selectedFilters: {
                    easy: false,
                    medium: false,
                    hard: false
                },
                isEssential: false,
                selectedSide: {
                    attacking: false,
                    defending: false
                }
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
                    toggleEssential: this.toggleEssential,
                    toggleAttacking: this.toggleAttacking,
                    toggleDefending: this.toggleDefending
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