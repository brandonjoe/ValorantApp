import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import classes from './Intro.module.css';
import sova_image from '../Media/intro_sova.png';

import { TweenLite, Expo } from 'gsap/all';
class Intro extends Component {
	constructor(props) {
		super(props);
		// reference to the DOM node
		this.header = null;
		this.title = null;
		this.text = null;
		// reference to the animation
		this.headerAnimation = null;
		this.titleAnimation = null;
		this.textAnimation = null;
	}
	componentDidMount() {
		// use the node ref to create the animation
		this.headerAnimation = TweenLite.from(this.header, 1, { x: -100, opacity: 0, ease: Expo.easeOut });
		this.titleAnimation = TweenLite.from(this.title, 2, { x: -400, ease: Expo.easeOut, delay: 1 });
		this.textAnimation = TweenLite.from(this.text, 2, { x: 1000, ease: Expo.easeOut, delay: 1 });
	}
	render() {
		return (
			<div className={classes.container}>
				<div className={classes.main}>
					<div className={classes.right_line} />
					<div className={classes.background_text}>vALORANT</div>
					<div ref={(div) => (this.header = div)} className={classes.header}>
						<h1 className={classes.title}>
							<span>03/12 &nbsp;&nbsp; //</span>
							<span>INITIATOR</span>{' '}
						</h1>
					</div>
					<div className={classes.main_wrapper}>
						<div className={classes.left}>
							<h1 ref={(div) => (this.title = div)} className={classes.main_title}>
								SOVA
							</h1>
							<div className={classes.info}>
								<div className={classes.origin}> Origin: &nbsp; Russia</div>
								<div className={classes.origin}> Codename: &nbsp; Hunter</div>
								<h2 className={classes.info_text}>
								Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. <br />
									<br />
									An archery expert, he can equip his bow with different bolts that reveal enemy
									locations or shock nearby adversaries. He can also deploy a recon drone to survey
									the battlefield, while his ultimate lets him fire three deadly arrow shots through
									walls.
								</h2>
								<div className={classes.video_player}>
									<ReactPlayer
										width="300"
										className={classes.video}
										url="https://i.imgur.com/Uqp8GCX.mp4"
										muted={true}
										loop={true}
										playing={true}
										playsinline={true}
										controls={false}
									/>
								</div>
							</div>
						</div>
						<div className={classes.right}>
							<div className={classes.sova_image_container}>
								<div className={classes.block} />
								<div className={classes.block2} />

								<img className={classes.sova_image} alt={'sova'} src={sova_image} />
							</div>
							<div className={classes.sova_text}>SOVA</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
