import React, { Component } from 'react';
import ReactPlayer from 'react-player';
import classes from './Intro.module.css';
import sova_image from '../Media/intro_sova.png';
import { Parallax } from 'react-scroll-parallax';
class Intro extends Component {
	render() {
		let style = {
			width: '100%',
			height: '100%'
		};
		let style2 = {
			margin: "0"
		}
		return (
			<div className={classes.container}>
				<div className={classes.main}>
					<div className={classes.right_line}></div>
					<div className={classes.background_text}>vALORANT</div>
					<div className={classes.header}>
						<h1 className={classes.title}>
							<span>03/12 &nbsp;&nbsp; //</span>
							<span>INITIATOR</span>{' '}
						</h1>
					</div>
					<div className={classes.main_wrapper}>
						<div className={classes.left}>
							<h1 className={classes.main_title}>SOVA</h1>
							<div className={classes.info}>
								<div className={classes.origin}> Origin: &nbsp; Russia</div>
								<div className={classes.origin}> Codename: &nbsp; Hunter</div>
								<h2 className={classes.info_text}>
									Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision.
									His custom bow and incredible scouting abilities ensure that even if you run, you
									cannot hide. <br />
									<br />
									An archery expert, he can equip his bow with different bolts that reveal enemy
									locations or shock nearby adversaries. He can also deploy a recon drone to survey
									the battlefield, while his ultimate lets him fire three deadly arrow shots through
									walls
								</h2>
								<div className={classes.video_player}>
									<ReactPlayer
										width="300"
										className={classes.video}
										url="https://i.imgur.com/Uqp8GCX.mp4"
										muted={true}
										loop={true}
										playing={true}
									/>
								</div>
							</div>
						</div>
						<div className={classes.right}>
							<div className={classes.sova_image_container}>
								<div className={classes.block} />
								<div className={classes.block2} />
								<Parallax
								styleOuter={style2}
									className={classes.sova_image_box}
									styleInner={style}
									y={[ 20, -20 ]}
									tagOuter="figure"
								>
									<img className={classes.sova_image} alt={'sova'} src={sova_image} />
								</Parallax>
							</div>

							<Parallax className={classes.zindex} y={[ -80, 80 ]} tagOuter="figure">
								<div className={classes.sova_text}>SOVA</div>
							</Parallax>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Intro;
