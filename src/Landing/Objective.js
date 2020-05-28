import React from 'react';
import classes from './Objective.module.css';
import { Parallax } from 'react-scroll-parallax';
import hunter from '../Media/hunter.png';
let style = {
    width: '100%',
    height: '100%'
};
let style2 = {
    margin: "0"
}
const Objective = () => {
	return (
		<div className={classes.container}>
            
            <div className={classes.background_text}>охотник</div>
            <div className={classes.block}></div>
			<div className={classes.main}>
				<div className={classes.header}> 
                <div className={classes.logo_block}>
                    
                </div>
                </div>
				<div className={classes.main_wrapper} >
                <div className={classes.whiteline_left}></div>
                    <div className={classes.title}>
                        <div className={classes.title_text_1}>Wherever they run...</div>
                        <div className={classes.title_text_2}>I will find them</div>
                    </div>
                    <div className={classes.first_section}>
                        <div className={classes.first_section_left}>
                            <div className={classes.first_text}>
                                Reprehenderit qui sit ullamco consequat officia magna irure esse deserunt aliqua consectetur eu mollit id. Tempor dolore consectetur tempor enim id est consectetur eu laboris laboris duis laborum pariatur. Adipisicing labore labore sit excepteur Lorem proident quis. Deserunt do excepteur consectetur cillum sunt deserunt voluptate quis nostrud ad. Cillum commodo voluptate cupidatat sint ullamco amet exercitation sit. Ullamco labore sit esse exercitation officia adipisicing. Eiusmod laboris elit nostrud ea do nulla officia quis adipisicing aute laboris.
                            </div>
                        </div>
                        <div className={classes.first_section_right}>
                            
                        </div>
                    </div>
                </div>
				<div className={classes.right}> </div>
			</div>
		</div>
	);
};

export default Objective;
