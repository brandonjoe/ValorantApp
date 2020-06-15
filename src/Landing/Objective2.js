import React, { useRef } from 'react';
import classes from './Objective2.module.css';
import bow from '../Media/bow.png';
import { useIntersection } from 'react-use';
import gsap from 'gsap';
const Objective2 = () => {
	const sectionRef2 = useRef(null);
	const intersection2 = useIntersection(sectionRef2, {
		root: null,
		rootMargin: '0px',
		threshold: 0.9
	});

	const fadeIn2 = (element) => {
		gsap.to(element, 1, {
			opacity: 1,
			x: 0,
			ease: 'power4.out',
			stagger: {
				amount: 0.7
			}
		});
	};
	const fadeOut2 = (element) => {
		gsap.to(element, 1, {
			opacity: 0,
			x: -20,
			ease: 'power4.out'
		});
	};

	intersection2 && intersection2.intersectionRatio < 0.9 ? fadeOut2('.fadeIn2') : fadeIn2('.fadeIn2');
	return (
		<div className={classes.container}>
			<div className={classes.background_text}>huntEr</div>
			<div className={classes.main}>
				<div className={classes.left}>
					<div className={`${classes.bow_text} fadeIn2`}>
					&#47;&#47;&#47; You'll have your intel, I promise<span style={{ color: 'rgb(255,70,85)' }}> _</span>
					</div>
					<div ref={sectionRef2} className={classes.block} />
					<img src={bow} alt="bow" className={classes.bow} />
				</div>
				<div className={classes.right}>
					<p className={classes.text}>
						Your bow should be your most used ability, and therefore essential lineups should be easily replicable. They should wedge you into a corner and align with your crosshair to execute quickly and repeatably. They should scan as many potential hiding spots while keeping you safe from enemy line of sight. But scanning important angles isn't everything. What's the point of scanning an area where someone holding can easily lose line of sight of your dart before it lands? The collection of darts you'll find here does its best to cover most, if not all of these criteria. Check out the maps below to view them. 
					</p>
				</div>
			</div>
		</div>
	);
};

export default Objective2;
