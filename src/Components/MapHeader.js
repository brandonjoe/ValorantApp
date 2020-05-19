import React, {useRef, useEffect} from 'react';
import classes from './MapHeader.module.css';

import bind_map from '../Media/bind_map.jpg';
import haven_map from '../Media/haven_map.jpg';
import split_map from '../Media/split_map.jpg';

import { TweenLite, Expo } from 'gsap';
const MapHeader = (props) => {
    let backgroundImage = useRef(null)
    useEffect(() => {
        TweenLite.from(backgroundImage, 1.5, {
            opacity: 0,
            ease: Expo.easeOut, 
            delay: 1
        })
    }, [])
    let map;
    let location;
	if (props.mapTitle === 'Bind') {
        map = bind_map;
        location = "Morroco";
	} else if (props.mapTitle == "Haven"){
        map = haven_map;
        location = "Bhutan";
    } else if (props.mapTitle == "Split"){
        map = split_map
        location = "Tokyo";
    }
	let background = {
		backgroundImage: `url(${map})`
	};
	return (
		<div ref={el => {backgroundImage = el}} style={background} className={classes.container}>
			<div className={classes.main}>
                <div className={classes.line}>
                <h2 className={classes.title}>{props.mapTitle}<span className={classes.location}>{location}</span></h2>
                </div>
				
			</div>
		</div>
	);
};

export default MapHeader;
