import React, {useRef} from 'react';
import classes from './Images.module.css';
import {TweenLite, Expo} from 'gsap';

const Images = (props) => {
    let background = useRef(null);
    let box = useRef(null)
    let background2 = useRef(null);
    let box2 = useRef(null)
    let background3 = useRef(null);
    let box3 = useRef(null)
    let onHover = () => {
            TweenLite.to(background, 1.5, {
                left: 0,
                ease: Expo.easeOut
            })
            TweenLite.to(box, 0, {
                backgroundSize: "100% 100%"
            })
    }
    let onLeave = () => {
        TweenLite.to(background, 1.5, {
            left: "-170%",
            ease: Expo.easeOut
        })
        TweenLite.to(box, 0, {
            backgroundSize: "0 0"
        })
    }

    let onHover2 = () => {
        TweenLite.to(background2, 1.5, {
            left: 0,
            ease: Expo.easeOut
        })
        TweenLite.to(box2, 0, {
            backgroundSize: "100% 100%"
        })
}
let onLeave2 = () => {
    TweenLite.to(background2, 1.5, {
        left: "-150%",
        ease: Expo.easeOut
    })
    TweenLite.to(box2, 0, {
        backgroundSize: "0 0"
    })
}
let onHover3 = () => {
    TweenLite.to(background3, 1.5, {
        left: 0,
        ease: Expo.easeOut
    })
    TweenLite.to(box3, 0, {
        backgroundSize: "100% 100%"
    })
}
let onLeave3 = () => {
TweenLite.to(background3, 1.5, {
    left: "-150%",
    ease: Expo.easeOut
})
TweenLite.to(box3, 0, {
    backgroundSize: "0 0"
})
}

    
    let image_2 = '';
	if (typeof props.image2 === 'undefined' || props.image2 === "") {
		image_2 = '';
	} else {
		image_2 = (
			<div className={classes.image_container} >
				<div className={classes.main}onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} onClick={() => window.open(props.image2, '_blank')} >
                    <div ref={el => {background = el}}className={classes.image_wrapper}>
                    </div>
					<img className={classes.image} alt='image2' src={props.image2} />
                    <div ref={el => {box = el}} className={classes.box} />
				</div>
                
			</div>
		);
    }
    let image_3 = '';
	if (typeof props.image3 === 'undefined' || props.image3 === "") {
		image_3 = '';
	} else {
		image_3 = (
			<div className={classes.image_container} >
				<div className={classes.main}onMouseEnter={() => onHover3()} onMouseLeave={() => onLeave3()} onClick={() => window.open(props.image3, '_blank')} >
                    <div ref={el => {background3 = el}}className={classes.image_wrapper}>
                    </div>
					<img className={classes.image} alt='image3' src={props.image3} />
                    <div ref={el => {box3 = el}} className={classes.box} />
				</div>
                
			</div>
		);
	}
	return (
		<div className={classes.container} >
            {image_3}
			<div className={classes.image_container} >
				<div className={classes.main} onMouseEnter={() => onHover2()} onMouseLeave={() => onLeave2()} onClick={() => window.open(props.image1, '_blank')}>
                    <div ref={el => {background2 = el}}className={classes.image_wrapper}>
                    </div>
					<img className={classes.image} alt='image2' src={props.image1} />
                    <div ref={el => {box2 = el}} className={classes.box} />
				</div>
                
			</div>
			{image_2}
            
		</div>
	);
};

export default Images;
