import React, { Component } from 'react';
import classes from './Lineups.module.css';
import { AppConsumer} from '../State/context.js';
import LineupItem from './LineupItem.js';
import LineupDetail from './LineupDetail.js';
import Filter from './Filter.js';
import MapHeader from './MapHeader.js';
import '../Animation/detail.css';
import { TweenLite, CSSPlugin, Expo } from 'gsap/all';

class Lineups extends Component {
	constructor(props) {
		super(props);
		// cards, elements tha will be used in the tween
		this.lineupList = null;
		this.lineupListTween = null;
		this.filterList = null;
		this.filterListTween = null;
		this.detailItem = null;
		this.detailItemTween = null;
	}
	componentDidMount() {
		this.lineupListTween = TweenLite.from(this.lineupList, 1, {
			opacity: 0,
			x: -100,
			ease: Expo.easeOut,
			delay: 1
		});
		this.filterListTween = TweenLite.from(this.filterList, 1, {
			opacity: 0,
			y: -100,
			ease: Expo.easeOut,
			delay: .5
		});
	}

	render() {
		return (
			<div className={classes.container}>
				<div className={classes.main}>
					<div  className={classes.lineup_selector}>
						<div ref={(div) => (this.filterList = div)} className={classes.filter}>
							<Filter  />
						</div>
						
						<div ref={(div) => (this.lineupList = div)}  className={classes.lineup_selector_main}>
							<AppConsumer>
								{(value) => {
									return value.lineups.map((lineup) => {
										return <LineupItem className={classes.lineupItem} key={lineup.id} lineup={lineup} />;
									});
								}}
							</AppConsumer>
						</div>
					</div>

					<div className={classes.lineup_detail}>
						<AppConsumer>
							{(value) => {
								return <MapHeader mapTitle={value.currentMap} />
							}}
						</AppConsumer>
						<AppConsumer>
							{(value) => {
								return (<div ref={(div) => (this.detailItem = div)} className={classes.lineupDetailItem}><LineupDetail lineupdetails={value.detailLineup} /></div>)
								
							}}
						</AppConsumer>
					</div>
				</div>
			</div>
		);
	}
}

export default Lineups;
