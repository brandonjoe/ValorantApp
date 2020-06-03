import React, { useEffect, useRef, useState } from 'react';
import { AppConsumer } from '../State/context.js';
import classes from './LineupDetail.module.css';
import Video from './Media/Video.js';
import '../Animation/detail.css';
import { TweenMax, Expo } from 'gsap';
import { Scrambler } from 'react-text-scrambler';
import Images from './Media/Images.js';

const LineupDetail = (props) => {
	let container = useRef(null);
	useEffect(() => {
		TweenMax.from(container, 2, { opacity: 0, ease: Expo.easeOut, delay: 1 });
	}, []);
	const { id, title, info, video, essential, difficulty, side, image1, image2, map } = props.lineupdetails;
	let essential_icon;
	let dart_side;
	let difficulty_level;
	if (difficulty === 'Easy') {
		difficulty_level = <div className={`${classes.icon} ${classes.colorGreen}`}>{difficulty}</div>;
	} else if (difficulty === 'Medium') {
		difficulty_level = <div className={`${classes.icon} ${classes.colorYellow}`}>{difficulty}</div>;
	} else if (difficulty === 'Hard') {
		difficulty_level = <div className={`${classes.icon} ${classes.colorRed}`}>{difficulty}</div>;
	}
	if (essential === true) {
		essential_icon = <div className={classes.icon}>Essential</div>;
	}
	if (side === 'Attacking') {
		dart_side = <div className={`${classes.icon} ${classes.attacking}`}>Attacking</div>;
	} else if (side === 'Defending') {
		dart_side = <div className={`${classes.icon} ${classes.defending}`}>Defending</div>;
	} else {
		dart_side = '';
	}
	return (
		<div ref={(el) => (container = el)} className={classes.container}>
			<AppConsumer>
				{(value) => (
					<div className={classes.main}>
						<div className={classes.main_left}>
							<div className={classes.info}>
								<div className={classes.block}></div>
								<div className={classes.textbox}>
									<h1 className={classes.title}>
										<Scrambler
											text={title}
											renderIn={600}
											changeFrom={value.prevTitle}
											characters={"!@#$%^&*zxcvbnmasdfghjklqwertyuiop,./;'<>?:"}
										/>
									</h1>
									<div className={classes.filter}>
										<div className={classes.filterbox}>
											<div>{difficulty_level}</div>
											<div>{essential_icon}</div>
											<div>{dart_side}</div>
										</div>
									</div>
									<div className={classes.info_text_container}>
										<p className={classes.info_text}>
											<Scrambler
												text={info}
												renderIn={600}
												changeFrom={value.prevInfo}
												characters={"!@#$%^&*zxcvbnmasdfghjklqwertyuiop,./;'<>?:"}
											/>
										</p>
									</div>
								</div>
								<div className={classes.images}>
									<Images image1={image1} image2={image2} />
								</div>
							</div>
						</div>
						<div className={classes.main_right}>
							<div className={classes.info_media}>
								<Video />
							</div>
							<div classes={classes.map_container}>
								<div className={classes.map_wrapper}>
								<img src={map} className={classes.map}></img>
								</div>
								
							</div>
						</div>
					</div>
				)}
			</AppConsumer>
		</div>
	);
};

export default LineupDetail;
