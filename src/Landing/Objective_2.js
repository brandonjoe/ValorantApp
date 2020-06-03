import React, { useRef } from 'react';
import classes from './Objective_2.module.css';
import bow from '../Media/bow.png'
import {useIntersection} from 'react-use';
import gsap from 'gsap';
const Objective_2 = () => {
    const sectionRef2 = useRef(null);
	const intersection2 = useIntersection(sectionRef2, {
		root: null,
		rootMargin: "0px",
		threshold: .9,
	})

	 
	const fadeIn2 = (element) => {
		gsap.to(element, 1, {
			opacity: 1,
			x: 0,
			ease: 'power4.out',
			stagger: {
				amount: .7
			}
		})
	}
	const fadeOut2 = (element) => {
		gsap.to(element, 1, {
			opacity: 0,
			x: -20,
			ease: 'power4.out'
		})
	}

	intersection2 && intersection2.intersectionRatio < .9 ? fadeOut2(".fadeIn2")
	: fadeIn2(".fadeIn2")
	return (
		<div className={classes.container}>
            <div className={classes.background_text}>huntEr</div>
			<div className={classes.main}>
				<div className={classes.left} >
                    <div  className={`${classes.bow_text} fadeIn2`}>/// You'll have your intel, I promise<span style={{color: "rgb(255,70,85)"}}> _</span></div>
                    <div ref={sectionRef2} className={classes.block}></div>
                    <img src={bow} className={classes.bow}></img>
                </div>
				<div className={classes.right}>
					<p className={classes.text}>
						Nisi eu minim tempor incididunt minim sunt pariatur irure elit aute cupidatat. Excepteur laboris
						consectetur ut cupidatat ex ullamco quis nostrud est labore. Irure aute nisi eiusmod enim
						pariatur. Voluptate anim ad est elit fugiat exercitation. Culpa cillum amet voluptate
						adipisicing minim aute ex. Occaecat et aute proident velit Lorem elit laboris consectetur ea
						nulla qui deserunt. Aute deserunt sunt aliquip non occaecat deserunt excepteur. Excepteur elit
						veniam et irure cupidatat culpa pariatur fugiat laborum est anim. Fugiat duis sit occaecat
						consectetur nulla occaecat adipisicing est tempor cillum ipsum. 
					</p>
				</div>
			</div>
		</div>
	);
};

export default Objective_2;
