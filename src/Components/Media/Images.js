import React, {useRef} from 'react';
import classes from './Images.module.css';
import {TweenLite, Expo} from 'gsap';

const Images = (props) => {
    let imagesloaded = () => {
        if(props.image2 ===""){

        }
    }
    let background = useRef(null);
    let box = useRef(null)
    let background2 = useRef(null);
    let box2 = useRef(null)
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

    
	let image_2 = '';
	if (props.image2 === '') {
		image_2 = '';
	} else {
		image_2 = (
			<div className={classes.image_container} >
				<div className={classes.main}onMouseEnter={() => onHover()} onMouseLeave={() => onLeave()} onClick={() => window.open(props.image2, '_blank')} >
                    <div ref={el => {background = el}}className={classes.image_wrapper}>
                    </div>
					<img className={classes.image} alt='image2' onLoad={() => imagesloaded()} src={props.image2} />
                    <div ref={el => {box = el}} className={classes.box} />
				</div>
                
			</div>
		);
	}
	return (
		<div className={classes.container} >
			<div className={classes.image_container} >
				<div className={classes.main} onMouseEnter={() => onHover2()} onMouseLeave={() => onLeave2()} onClick={() => window.open(props.image1, '_blank')}>
                    <div ref={el => {background2 = el}}className={classes.image_wrapper}>
                    </div>
					<img className={classes.image} alt='image2' onLoad={() => imagesloaded()} src={props.image1} />
                    <div ref={el => {box2 = el}} className={classes.box} />
				</div>
                
			</div>
			{image_2}
		</div>
	);
};

export default Images;
