import React, { useEffect, useRef, useState } from 'react';
import { AppConsumer } from '../State/context.js';
import classes from './LineupDetail.module.css';
import Difficulty from './Icons/Difficulty.js';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '../Animation/detail.css'
import {TweenMax, Expo} from 'gsap';


const LineupDetail = (props) => {
	let container = useRef(null)
	useEffect(() => {
		TweenMax.from(container, 2, {opacity: 0, y: -20, ease: Expo.easeOut, delay: 1 })
	},[])
	const { id, title, info, video, essential, difficulty, isActive, side } = props.lineupdetails;
		let essential_icon;
		let activeclass;
		let dart_side;
		if (essential === true) {
			essential_icon = <div className={classes.essential_icon}>Essential</div>;
		}
		if (side === 'Attacking') {
			dart_side = <div className={`${classes.essential_icon} ${classes.attacking}`}>Attacking</div>;
		} else if (side === 'Defending') {
			dart_side = <div className={`${classes.essential_icon} ${classes.defending}`}>Defending</div>;
		} else {
			dart_side = '';
		}
	return (
		<div  ref={el => container = el} className={classes.container}>
				<AppConsumer>
					{(value) => (

								<div className={classes.main}>
									<div className={classes.info}>
										<div className={classes.textbox}>
											<h1>{title}</h1>
											{info}
											<Difficulty color={difficulty} />
											{essential_icon}
											{dart_side}
										</div>
									</div>
									<div className={classes.info_media}>
										<iframe
											src={video}
											className={classes.video}
											width="640"
											height="360"
											frameBorder="0"
											allow="autoplay; fullscreen"
											allowFullScreen
										/>
									</div>
								</div>

					)}
				</AppConsumer>
			</div>
	);
};

export default LineupDetail;