import React from 'react';
import classes from './Intro.module.css';
import sova_image from '../Media/intro_sova.png';
import { Parallax } from 'react-scroll-parallax';
const Intro = () => {
	return (
		<div className={classes.container}>
			<div className={classes.main}>
	
			<div className={classes.background_text}>vALORANT</div>
				<div className={classes.header}>
				<h1 className={classes.title}><span>03/12  &nbsp;&nbsp;  //</span><span>INITIATOR</span>   </h1>
				</div>
				<div className={classes.main_wrapper}>

					<div className={classes.left}>
						<h1 className={classes.main_title}>SOVA</h1>
						<div className={classes.info}>
							<div className={classes.origin}> Origin: &nbsp; Russia</div>
							<div className={classes.origin}> Codename: &nbsp; Hunter</div>
							<h2 className={classes.info_text}> Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide. <br></br>
							<br></br>
							An archery expert, he can equip his bow with different bolts that reveal enemy locations or shock nearby adversaries. He can also deploy a recon drone to survey the battlefield, while his ultimate lets him fire three deadly arrow shots through walls
							</h2>
							<a href="https://imgur.com/BqCHp4E"><video src="https://i.imgur.com/BqCHp4E.mp4" title="source: imgur.com" /></a>
						</div>
					</div>
					<div className={classes.right}>
					<div className={classes.block}></div>
					<div className={classes.block2}></div>
						<Parallax className={classes.sova_image_box} y={[ 20, -20 ]} tagOuter="figure">
							<img className={classes.sova_image} alt={'sova'} src={sova_image} />
							</Parallax>
						<Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
						<div className={classes.sova_text}>SOVA</div>
						</Parallax>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
