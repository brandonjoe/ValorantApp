import React, { useEffect, useRef } from 'react';
import { AppConsumer } from '../State/context.js';
import classes from './LineupDetail.module.css';
import '../Animation/detail.css';
import { TweenMax, Expo } from 'gsap';
import { Scrambler } from 'react-text-scrambler';
import Images from './Media/Images.js';
import Vimeo from '@u-wave/react-vimeo';

const LineupDetail = (props) => {
	let container = useRef(null);
	useEffect(() => {
		TweenMax.from(container, 2, { opacity: 0, ease: Expo.easeOut, delay: 1 });
	}, []);
	let {
		title,
		info,
		video,
		essential,
		difficulty,
		side,
		image1,
		image2,
		map,
		bounces,
		charges
	} = props.lineupdetails;
	let essential_icon;
	let dart_side;
	if (typeof video === 'undefined') {
		video = '418734606';
	}
	let charge;
	if (charges === 0) {
		charge = (
			<div className={classes.bounce_container}>
				<div className={classes.charge_empty} />
				<div className={classes.charge_empty} />
				<div className={classes.charge_empty} />
			</div>
		);
	} else if (charges === 1) {
		charge = (
			<div className={classes.bounce_container}>
				<div className={classes.charge} />
				<div className={classes.charge_empty} />
				<div className={classes.charge_empty} />
			</div>
		);
	} else if (charges === 2) {
		charge = (
			<div className={classes.bounce_container}>
				<div className={classes.charge} />
				<div className={classes.charge} />
				<div className={classes.charge_empty} />
			</div>
		);
	} else if (charges === 3) {
		charge = (
			<div className={classes.bounce_container}>
				<div className={classes.charge} />
				<div className={classes.charge} />
				<div className={classes.charge} />
			</div>
		);
	}
	let bounce;
	if (bounces === 0) {
		bounce = (
			<div className={classes.bounce_container}>
				<div className={classes.bounce_empty} />
				<div className={classes.bounce_empty} />
			</div>
		);
	} else if (bounces === 1) {
		bounce = (
			<div className={classes.bounce_container}>
				<div className={classes.bounce} />
				<div className={classes.bounce_empty} />
			</div>
		);
	} else if (bounces === 2) {
		bounce = (
			<div className={classes.bounce_container}>
				<div className={classes.bounce} />
				<div className={classes.bounce} />
			</div>
		);
	}
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
						<div className={classes.background_text}>{value.currentMap}</div>
						<div className={classes.main_left}>
							<div className={classes.info}>
								<div className={classes.block} />
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
										<div className={classes.bounces}>
											<h3 className={classes.filter_titles}>Bounces</h3>
											<div className={classes.bounce_container}>{bounce}</div>
										</div>
										<div className={classes.bounces}>
											<h3 className={classes.filter_titles}>Charges</h3>
											<div className={classes.bounce_container}>{charge}</div>
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
								<div className={classes.right_container}>
									<div className={`${classes.videoWrapper} `}>
										<Vimeo
											video={video}
											className={classes.vimeo}
											muted={true}
											responsive={true}
											loop={true}
											showByline={false}
											showPortrait={false}
											showTitle={false}
										/>
									</div>
									<div className={`${classes.map_container}`}>
										<div className={classes.map_wrapper}>
											<div className={classes.map_block} />
											<div className={classes.map_line} />
											<img src={map} alt="map name" className={classes.map} />
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className={classes.main_right}>
							<div className={classes.videoWrapper}>
								<Vimeo
									video={video}
									className={classes.vimeo}
									muted={true}
									responsive={true}
									loop={true}
									showByline={false}
									showPortrait={false}
									showTitle={false}
								/>
							</div>
							<div className={classes.map_container}>
								<div className={classes.map_wrapper}>
									<div className={classes.map_block} />
									<div className={classes.map_line} />
									<img src={map} alt="map" className={classes.map} />
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
