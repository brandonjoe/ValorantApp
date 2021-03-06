import React, { Component } from 'react';
import { bind_data, bind_detail } from '../Data/bind_data.js';
import { haven_data, haven_detail } from '../Data/haven_data.js';
import { split_data, split_detail } from '../Data/split_data.js';
import { ascent_data, ascent_detail } from '../Data/ascent_data.js';
import { logs_data} from '../Data/logs_data.js';
const AppContext = React.createContext();

class AppProvider extends Component {
	state = {
		lineups: [],
		detailLineup: {},
		currentMap: 'Bind',
		selectedFilters: {
			easy: false,
			medium: false,
			hard: false
		},
		isEssential: false,
		selectedSide: {
			defending: false,
			attacking: false
		},
		prevTitle: "",
		prevInfo: "",
		loading: true,
		newDetail: 0,
		logs: logs_data,
		sideLineupsOpen: false
	};

	//updates the map, takes the map name as a parameter and loads the correct data
	updateMap = (map, direct) => {

		let tempLineups = [];
        let data_points = this.getCurrentMap();
		data_points.forEach((item) => {
			item.isActive = false;
			tempLineups.push(item);
		});
		tempLineups[direct].isActive = true;
		let setStateMap = '';
		let setStateDetail;
		if (map === 'bind') {
			setStateMap = 'Bind';
			setStateDetail = bind_detail;
		}
		if (map === 'haven') {
			setStateMap = 'Haven';
			setStateDetail = haven_detail;
		}
		if (map === 'split') {
			setStateMap = 'Split';
			setStateDetail = split_detail;
		}
		if (map === 'ascent') {
			setStateMap = 'Ascent';
			setStateDetail = ascent_detail;
		}
		if(direct !== 0) {
			setStateDetail = tempLineups[direct]
		}
		
		this.setState(() => {
			return {
				lineups: tempLineups,
				currentMap: setStateMap,
				detailLineup: setStateDetail,
				selectedFilters: {
					easy: false,
					medium: false,
					hard: false
				},
				isEssential: false,
				selectedSide: {
					defending: false,
					attacking: false
				},
				newDetail: 0
			};
		});
	};
	setLogs = () => {
		let tempLogs = [];
		logs_data.forEach((item) => {
			tempLogs.push(item)
		})
		this.setState(() => {
			return{
				logs: tempLogs
			}
		})

	}
	setDetailLineup = (id) => {
		const lineup = this.getLineup(id);
	
		let tempLineups = [];
		this.state.lineups.forEach((item) => {
			if (item.id === id) {
				item.isActive = true;
			} else {
				item.isActive = false;
			}
			tempLineups.push(item);
		});
		this.setState(() => {
			return {
				lineups: tempLineups,
				detailLineup: lineup,
				prevTitle: this.state.detailLineup.title,
				prevInfo: this.state.detailLineup.info,
				loading: true,
				sideLineupsOpen: false
			};
		});
	};
	// Toggles filters, takes easy, medium, hard, essential, attacking, defending as parameters
	toggleFilter = (filter) => {
		let setFilter;
		let item_filter;
		let stateFilters = {};
		let stateEssential;
		let stateSelectedSide = {};
		if (filter === 'easy') {
			setFilter = this.state.selectedFilters.easy;
			item_filter = 'Easy';
			stateFilters = {
				easy: true,
				medium: false,
				hard: false
			};
			stateEssential = false;
			stateSelectedSide = {
				attacking: false,
				defending: false
			};
		} else if (filter === 'medium') {
			setFilter = this.state.selectedFilters.medium;
			item_filter = 'Medium';
			stateFilters = {
				easy: false,
				medium: true,
				hard: false
			};
			stateEssential = false;
			stateSelectedSide = {
				attacking: false,
				defending: false
			};
		} else if (filter === 'hard') {
			setFilter = this.state.selectedFilters.hard;
			item_filter = 'Hard';
			stateFilters = {
				easy: false,
				medium: false,
				hard: true
			};
			stateEssential = false;
			stateSelectedSide = {
				attacking: false,
				defending: false
			};
		} else if (filter === 'essential') {
			setFilter = this.state.isEssential;
			stateFilters = {
				easy: false,
				medium: false,
				hard: false
			};
			stateEssential = true;
			stateSelectedSide = {
				attacking: false,
				defending: false
			};
		} else if (filter === 'attacking') {
			setFilter = this.state.selectedSide.attacking;
			item_filter = 'Attacking';
			stateFilters = {
				easy: false,
				medium: false,
				hard: false
			};
			stateEssential = false;
			stateSelectedSide = {
				attacking: true,
				defending: false
			};
		} else if (filter === 'defending') {
			setFilter = this.state.selectedSide.defending;
			item_filter = 'Defending';
			stateFilters = {
				easy: false,
				medium: false,
				hard: false
			};
			stateEssential = false;
			stateSelectedSide = {
				attacking: false,
				defending: true
			};
		}
		if (setFilter === false) {
			const tempLineups = [];
			let data_points = this.getCurrentMap();
			data_points.forEach((item) => {
				item.isActive = false;
				if (filter === 'easy' || 'medium' || 'hard') {
					if (item.difficulty === item_filter) {
						tempLineups.push(item);
					}
				}
				if (filter === 'essential') {
					if (item.essential === true) {
						tempLineups.push(item);
					}
				}
				if (filter === 'attacking' || 'defending') {
					if (item.side === item_filter) {
						tempLineups.push(item);
					}
				}
			});
			tempLineups[0].isActive = true;
			this.setState(() => {
				return {
					lineups: tempLineups,
					selectedFilters: stateFilters,
					isEssential: stateEssential,
					detailLineup: tempLineups[0],
					selectedSide: stateSelectedSide
				};
			});
		}
		if (setFilter === true) {
			this.resetPage();
		}
	};
	resetPage = () => {
		if (this.state.currentMap === 'Bind' || window.location.pathname.includes('bind')) {
			this.updateMap('bind', 0);
		} else if (this.state.currentMap === 'Haven' || window.location.pathname.includes('haven')) {
			this.updateMap('haven', 0);
		} else if (this.state.currentMap === 'Split' || window.location.pathname.includes('split')) {
			this.updateMap('split', 0);
		}
	};
	hideSpinner = () => {
        this.setState({
          loading: false
		});

      };
	setDirectDetail = (num) => {
		this.setState({
			newDetail: num
		})
	}
	lineupsToggleClickHandler = () => {
		this.setState(prevState => {
			return{ 
				sideLineupsOpen: !prevState.sideLineupsOpen
			}
		})
	}
	backdropClickHandler = () => {
		this.setState({
			sideLineupsOpen: false
		})
	}


	//functions needed only inside context.js

	//gets the current map name based off of state, or the path title. state doesn't get updated on a link change when you might need the new map
	//so that's why we also check the location. might break if there's bad path management, but there should never be 2 different maps in a single path
	getCurrentMap = () => {
		let data_points;
		if (window.location.pathname.includes('bind')) {
			data_points = bind_data;
		} else if (window.location.pathname.includes('haven')) {
			data_points = haven_data;
		} else if ( window.location.pathname.includes('split')) {
			data_points = split_data;
		}else if ( window.location.pathname.includes('ascent')) {
			data_points = ascent_data;
		}
		return data_points;
	};
	getLineup = (id) => {
		const lineup = this.state.lineups.find((item) => item.id === id);
		return lineup;
	};

	
	render() {

		return (
			<AppContext.Provider
				value={{
					...this.state,
					setDetailLineup: this.setDetailLineup,
					updateMap: this.updateMap,
					toggleFilter: this.toggleFilter,
					resetPage: this.resetPage,
					hideSpinner: this.hideSpinner,
					setDirectDetail: this.setDirectDetail,
					setLogs: this.setLogs,
					lineupsToggleClickHandler: this.lineupsToggleClickHandler,
					backdropClickHandler: this.backdropClickHandler
				}}y
			>
				{this.props.children}
			</AppContext.Provider>
		);
	}
}

const AppConsumer = AppContext.Consumer;
export { AppProvider, AppConsumer, AppContext };