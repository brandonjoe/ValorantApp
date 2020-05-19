import React, { Component } from 'react';
import { AppConsumer } from '../State/context';
import classes from './LineupItem.module.css';
import Difficulty from './Icons/Difficulty.js';
import Essential from './Icons/Essential.js';
import { TweenLite, Expo } from 'gsap';
class LineupItem extends Component {
    constructor(props) {
		super(props);
		// cards, elements tha will be used in the tween
		this.lineupItem = null;

		this.lineupItemTweenIn = null;
    }
    animateTweenIn() {
        this.lineupListTween = TweenLite.to(this.lineupItem, 1, {
            height: '100%',
            backgroundColor: "red",
            ease: Expo.easeOut
		});
    }
    animateTweenOut() {
        this.lineupListTween = TweenLite.to(this.lineupItem, 1, {
            height: '100%',
            backgroundColor: "white",
            ease: Expo.easeOut
		});
    }

	render() {

		const limitInfo = (title, limit = 100) => {
			let newTitle = [];
			if (title.length > limit) {
				title.split(' ').reduce((acc, cur) => {
					if (acc + cur.length <= limit || acc == 0) {
						newTitle.push(cur);
					}
					return acc + cur.length;
				}, 0);

				return `${newTitle.join(' ')}...`;
			}
			return title;
		};
		const { id, title, info, essential, difficulty, isActive, side } = this.props.lineup;
		let essential_icon;
		let activeclass;
		let dart_side;
		let information = limitInfo(info);
		if (essential === true) {
			essential_icon = <div className={classes.essential_icon}>Essential</div>;
		}
		if (isActive === true) {
			activeclass = classes.active;
		}
		if (side === 'Attacking') {
			dart_side = <div className={`${classes.essential_icon} ${classes.attacking}`}>Attacking</div>;
		} else if (side === 'Defending') {
			dart_side = <div className={`${classes.essential_icon} ${classes.defending}`}>Defending</div>;
		} else {
			dart_side = '';
		}
		return (
			<AppConsumer>
				{(value) => (
					<div  className={`${classes.container} ${activeclass}`}>
                        <div ref={(div) => (this.lineupItem = div)}  className={classes.background}></div>
						<div className={classes.main} onClick={() => value.setDetailLineup(id)}>
							<h1 className={classes.title}>{title}</h1>
							<div className={classes.filters}>
								<Difficulty color={difficulty} />
								{essential_icon}
								{dart_side}
							</div>
							<h2 className={classes.info_text}>{information}</h2>
						</div>
					</div>
				)}
			</AppConsumer>
		);
	}
}

export default LineupItem;
