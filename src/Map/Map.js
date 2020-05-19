import React, {useRef, useEffect, useState } from 'react';
import classes from './Map.module.css';
import { TweenLite, CSSPlugin, Expo } from "gsap/all";


const Map = (props) => {
    const [isShown, setIsShown] = useState(false);
    let map = useRef(null)

    let mouseOver = ()=> {
        TweenLite.to(map, 1, { scale: 1.05, ease: Expo.easeOut});
    }
    let mouseLeave = ()=> {
        TweenLite.to(map, 1, { scale: 1, ease: Expo.easeOut});
    }
	let style = {
        
		backgroundImage: `url(${props.map})`
	};
	return (
		<div ref={el => map = el}  onMouseEnter={mouseOver} onMouseLeave={mouseLeave} className={classes.container} style={style}>
			
			<div className={classes.main}>
		
				<div className={classes.info}>
					<h1  className={classes.map_location}>{props.location}</h1>
					<h1 data-content={props.title} className={classes.map_title}>{props.title}</h1>
				</div>
			</div>
			<div className={classes.box}>
                </div>
		</div>
	);
};

export default Map;
