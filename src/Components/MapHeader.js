import React, { useRef, useEffect } from 'react';
import classes from './MapHeader.module.css';
import { AppConsumer } from '../State/context.js';
import bind_map from '../Media/bind_map.jpg';
import haven_map from '../Media/haven_map.jpg';
import split_map from '../Media/split_map.jpg';
import ascent_map from '../Media/ascent_map.jpg';
import { TweenLite, Expo } from 'gsap';
const MapHeader = (props) => {
	let backgroundImage = useRef(null);
	useEffect(() => {
		TweenLite.from(backgroundImage, 1.5, {
			opacity: 0,
			ease: Expo.easeOut,
			delay: 1
		});
	}, []);
	let map;
	let location;
	if (props.mapTitle === 'Bind') {
		map = bind_map;
		location = 'Morocco';
	} else if (props.mapTitle === 'Haven') {
		map = haven_map;
		location = 'Bhutan';
	} else if (props.mapTitle === 'Split') {
		map = split_map;
		location = 'Tokyo';
	} else if (props.mapTitle === 'Ascent') {
		map = ascent_map;
		location = 'Venice';
	}
	let background = {
		backgroundImage: `url(${map})`
	};
	return (
		<div
			ref={(el) => {
				backgroundImage = el;
			}}
			style={background}
			className={classes.container}
		>
			<div className={classes.main}>
				<AppConsumer>
					{(value) => (
						<div className={classes.button} onClick={() => value.lineupsToggleClickHandler()}>
							<div className={classes.icon} />
							<div className={classes.icon} />
							<div className={classes.icon} />
						</div>
                    )}
				</AppConsumer>

				<div className={classes.line}>
					<h2 className={classes.title}>
						{props.mapTitle}
						<span className={classes.location}>{location}</span>
					</h2>
				</div>
			</div>
		</div>
	);
};

export default MapHeader;
