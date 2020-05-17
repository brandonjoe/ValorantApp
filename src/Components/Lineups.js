import React, { Component } from 'react';
import classes from './Lineups.module.css';
import { AppConsumer, AppContext } from '../State/context.js';
import LineupItem from './LineupItem.js';
import LineupDetail from './LineupDetail.js';
import Filter from './Filter.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../Animation/detail.css';
import { TweenLite, CSSPlugin, Expo } from "gsap/all";
class Lineups extends Component {
    constructor(props) {
        super(props);
		// cards, elements tha will be used in the tween
        this.lineupList = null;
        
        this.lineupListTween = null;
        
    }
    componentDidMount(){
        this.lineupListTween = TweenLite.from(this.lineupList, 1, { opacity: 0, x: -100, ease: Expo.easeOut, delay: 1});
    }
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.main}>
					<div className={classes.lineup_selector}>
						<Filter />
						<div ref={div => this.lineupList = div} className={classes.lineup_selector_main}>
							<AppConsumer>
								{(value) => {
									return value.lineups.map((lineup) => {
										return <LineupItem key={lineup.id} lineup={lineup} />;
									});
								}}
							</AppConsumer>
						</div>
					</div>

					<div className={classes.lineup_detail}>
						<AppConsumer>
							{(value) => {
								return <h1 className={classes.map_title}>{value.currentMap}</h1>;
							}}
						</AppConsumer>
						<AppConsumer>
							{(value) => {
								return (

											<LineupDetail lineupdetails={value.detailLineup} />
					

								);
							}}
						</AppConsumer>
					</div>
				</div>
			</div>
		);
	}
}

export default Lineups;
