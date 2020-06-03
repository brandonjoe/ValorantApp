import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import classes from './Objective.module.css';
import { Parallax } from 'react-scroll-parallax';
import ReactPlayer from 'react-player';
import image_1 from '../Media/objective_2.jpg';
import { AppConsumer } from '../State/context.js';
import dart from '../Media/recon.png';
import Objective_2 from './Objective_2.js';
import {useIntersection} from 'react-use';
import gsap from 'gsap';
import { fadeOutEnabled } from 'react-reveal/globals';
let style = {
	width: '100%',
	height: '100%'
};
let style2 = {
	margin: '0'
};
let style3= {
	width: '100%',
	height: '100%',
}
const Objective = () => {
	const sectionRef = useRef(null);

	const intersection = useIntersection(sectionRef, {
		root: null,
		rootMargin: "0px",
		threshold: .5,
	})
	 
	const fadeIn = (element) => {
		gsap.to(element, 1.5, {
			opacity: 1,
			ease: 'power4.out',
		})
	}
	const fadeOut = (element) => {
		gsap.to(element, 1.5, {
			opacity: 0,
			ease: 'power4.out'
		})
	}

	intersection && intersection.intersectionRatio < .5 ? fadeOut(".fadeIn")
	: fadeIn(".fadeIn")

	const sectionRef3 = useRef(null);

	const intersection3 = useIntersection(sectionRef3, {
		root: null,
		rootMargin: "0px",
		threshold: .5,
	})
	 
	const fadeIn3 = (element) => {
		gsap.to(element, 1, {
			opacity: 1,
			ease: 'power4.out',
		})
	}
	const fadeOut3 = (element) => {
		gsap.to(element, 1, {
			opacity: 0,
			ease: 'power4.out'
		})
	}

	intersection3 && intersection3.intersectionRatio < .5 ? fadeOut3(".fadeIn3")
	: fadeIn3(".fadeIn3")
	return (
		<div className={classes.container}>
			<div className={classes.background_text}>охотник</div>
			<div className={classes.block}> 
				<div className={classes.block_text}>// defy the limits</div>
			</div>
			<div className={classes.main}>
				<div className={classes.header}>
					<div className={classes.logo_block}>
						<img src={dart} className={classes.dart}></img>
					</div>
				</div>
				<div className={classes.main_wrapper}>
					<div className={classes.whiteline_left} />
					<div className={classes.whiteline_right}></div>
					<div className={classes.title}>
						<div  className={`${classes.title_text_1} fadeIn`}>Wherever they run...</div>
						<div ref={sectionRef}  className={`${classes.title_text_2} fadeIn3`}>I will find them</div>
					</div>
					<div  className={classes.first_section}>
						<div className={classes.first_section_left}>
						<Parallax 
								styleOuter={style2}
									styleInner={style}
									y={[ 20, -20 ]}
									tagOuter="figure"
								>
							<div ref={sectionRef3}  className={classes.first_text}>
								Reprehenderit qui sit ullamco consequat officia magna irure esse deserunt aliqua
								consectetur eu mollit id. Tempor dolore consectetur tempor enim id est consectetur eu
								laboris laboris duis laborum pariatur. Adipisicing labore labore sit excepteur Lorem
								proident quis. Deserunt do excepteur consectetur cillum sunt deserunt voluptate quis
								nostrud ad. Cillum commodo voluptate cupidatat sint ullamco amet exercitation sit.
								Ullamco labore sit esse exercitation officia adipisicing. Eiusmod laboris elit nostrud
								ea do nulla officia quis adipisicing aute laboris.
							</div>
							</Parallax>
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
										to={'/bind'}
										onClick={() => value.setDirectDetail(4)}
									>	
										<div className={classes.video_text}>How to... </div>
										<div className={classes.arrow}></div>
									</Link>
									<ReactPlayer
										className={classes.video}
										style={style3}
										url="https://i.imgur.com/3F5FB0a.mp4"
										muted={true}
										loop={true}
										playing={true}
									/>
								</div>
							</div>
						)}
					</AppConsumer>
					<Objective_2 />
				</div>
				<div className={classes.right} />
				
			</div>
		
		</div>
	);
};

export default Objective;
