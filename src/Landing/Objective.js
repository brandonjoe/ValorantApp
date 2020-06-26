import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Objective.module.css';
import ReactPlayer from 'react-player';
import { AppConsumer } from '../State/context.js';
import dart from '../Media/recon.png';
import Objective2 from './Objective2.js';
import { useIntersection } from 'react-use';
import gsap from 'gsap';

let style3 = {
	width: '100%',
	height: '100%',
	top: "1px"
};
const Objective = () => {
	
	const sectionRef = useRef(null);

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	});

	const fadeIn = (element) => {
		gsap.to(element, 1.5, {
			opacity: 1,
			ease: 'power4.out'
		});
	};
	const fadeOut = (element) => {
		gsap.to(element, 1.5, {
			opacity: 0,
			ease: 'power4.out'
		});
	};

	intersection && intersection.intersectionRatio < 0.5 ? fadeOut('.fadeIn') : fadeIn('.fadeIn');

	const sectionRef3 = useRef(null);

	const intersection3 = useIntersection(sectionRef3, {
		root: null,
		rootMargin: '0px',
		threshold: 0.5
	});

	const fadeIn3 = (element) => {
		gsap.to(element, 1, {
			opacity: 1,
			ease: 'power4.out'
		});
	};
	const fadeOut3 = (element) => {
		gsap.to(element, 1, {
			opacity: 0,
			ease: 'power4.out'
		});
	};

	intersection3 && intersection3.intersectionRatio < 0.5 ? fadeOut3('.fadeIn3') : fadeIn3('.fadeIn3');
	return (
		<div className={classes.container}>
			<div className={classes.background_text}>охотник</div>
			<div className={classes.block}>
				<div className={classes.block_text}>&#47;&#47; defy the limits</div>
			</div>
			<div className={classes.main}>
				<div className={classes.header}>
					<div className={classes.logo_block}>
						<img src={dart} alt="dartimage" className={classes.dart} />
					</div>
				</div>
				<div className={classes.main_wrapper}>
					<div className={classes.whiteline_left} />
					<div className={classes.whiteline_right} />
					<div className={classes.title}>
						<div className={`${classes.title_text_1} fadeIn`}>Wherever they run...</div>
						<div ref={sectionRef} className={`${classes.title_text_2} fadeIn3`}>
							I will find them
						</div>
					</div>
					<div className={classes.first_section}>
						<div className={classes.first_section_left}>
							<div ref={sectionRef3} className={classes.first_text}>
								Sova is currently one of the best agents for gathering information for his team. In a coordinated push, a well placed dart will do nothing but good for your team; it'll either disclose multiple locations on where they are, or tell you exactly where they can't be and limit the corners you need to check. A poorly placed dart will not only reveal little area, but also potentially bait your team into thinking an area is clear. The purpose of this site is to give you quality darts that'll maximize the revealing area, minimize your exposure, and increase the reliability of your scans. 
							</div>
						</div>
						<div className={classes.first_section_right}>
							<div className={classes.first_section_image}>
								<div className={classes.first_section_redbox} />
							</div>
						</div>
					</div>
					<AppConsumer>
						{(value) => (
							<div className={classes.second_section}>
								<div className={classes.video_player}>
									<div className={classes.video_block} />
									<Link
										style={{ textDecoration: 'none' }}
										className={classes.video_textblock}
										to={'/haven'}
										onClick={() => value.setDirectDetail(13)}
									>
										<div className={classes.video_text}>How to... </div>
										<div className={classes.arrow} />
									</Link>
									<ReactPlayer
										className={classes.video}
										style={style3}
										url="https://i.imgur.com/LyUfcpQ.mp4"
										muted={true}
										loop={true}
										playing={true}
										volume={0}
										controls={false}
										playsinline={true}
								
									/>
								</div>
							</div>
						)}
					</AppConsumer>
					<Objective2 />
				</div>
				<div className={classes.right} />
			</div>
		</div>
	);
};

export default Objective;
