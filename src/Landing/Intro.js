import React from 'react';
import classes from './Intro.module.css';
import sova_image from '../Media/intro_sova.png';
import { Parallax } from 'react-scroll-parallax';
const Intro = () => {
	return (
		<div className={classes.container}>
			<div className={classes.main}>
	
			<div className={classes.background_text}>VALORANT</div>
				<div className={classes.header}>
				<h1 className={classes.title}><span>SV0  &nbsp;&nbsp;  //</span><span>INITIATOR</span>   </h1>
				</div>
				<div className={classes.main_wrapper}>
					
					<div className={classes.left}>

					</div>
					<div className={classes.right}>
						<Parallax className="custom-class" y={[ 20, -20 ]} tagOuter="figure">
							<img className={classes.sova_image} alt={'sova'} src={sova_image} />
							</Parallax>
						<h1>dasdasd</h1>
						{/* <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
						<div className={classes.sova_text}>SOVA</div>
						</Parallax> */}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Intro;
