import React from 'react';
import classes from './FaqContainer.module.css';
import FaqItem from './FaqItem.js';
import { Link } from 'react-router-dom';
const FaqContainer = () => {
	return (
		<div className={classes.container}>
			<div className={classes.header}>
				<div className={classes.header_left} />
				<div className={classes.header_middle}>
					<div className={classes.header_title}>Frequently Asked Questions</div>
				</div>
				<div className={classes.header_right} />
			</div>
			<div className={classes.main}>
				<div className={classes.background_text}>FaQ</div>
				<div className={classes.left} />
				<div className={classes.middle}>
					<div className={classes.whiteline} />
					<div className={classes.faqList}>
						<FaqItem
							
							question={`What's a good dart?`}
							answer={"Good darts need to be easily repeatable with decently fast executions, need to maximize the area they are cover, as well as cover spots from an angle that can't easily be hidden from. A lot of stress on the last one because a lot of darts, as soon as they land, the defender is hiding in a spot where they can just move around a corner and completely avoid it. Arrows with long travel times (especially ones that travel behind them) can preoccupy the enemy longer than shorter arrows, giving you time to potentially peek/push them if they are distracted. A good dart should also rely more on lining up the crosshair over the HUD. That being said, there are many great darts that make use of the HUD, but they are subject to change since we have no idea how/when Riot will change the HUD. "}
						/>
						<FaqItem
							question={'Will these darts work for me?'}
							answer={
								"I can't answer that question for every computer, but if you're on a 1920x1080, 16:9 resolution, it should work. I also want to say that if a dart positions you in a corner, and lines up with the crosshair, and not the HUD, it should work for you. "
							}
						/>
						<FaqItem
							question={'How frequently will you update this site?'}
							answer={["The plan is to update this site whenever I find more darts, or when Riot makes a UI change where a dart needs to be removed. You can find out if any changes have been made", <Link  className={classes.links} to={'/logs'} style={{ textDecoration: 'none' }}>
							<span className={classes.links_text}> here </span>
						</Link>, "in the logs."]
								
							}
						/>
						<FaqItem
							question={'I have a sick dart, can I show you and showcase it here?'}
							answer={
								["Of course, you can, if it meets the criteria above, feel free to send me screenshots of the location of where it lands, as well as how it lines up, to", <span style={{color: "rgb(246,68,82)"}}> contact@brandonjoe.com</span>, ". I would love to add your dart and credit you in the info."
								]}
						/>
						<FaqItem
							question={"There's a bug on your site."}
							answer={
								["Not a question, but I would highly appreciate it if you email me at", <span style={{color: "rgb(246,68,82)"}}> contact@brandonjoe.com </span>, "regarding it! I don't normally work in React.js, and I thought it would be a fun project for me to make a site using context for state management. Thanks a ton!"]
							}
						/>
						<FaqItem
							question={"I'm hangry."}
							answer={
								["Still not a question, but spaghetti can be found", <span onClick={window.open("https://github.com/brandonjoe/ValorantApp", "_blank")} style={{color: "rgb(246,68,82)"}}> here </span>, "on my Github for the source files."]
							}
						/>
					</div>
				</div>
				<div className={classes.right} />
			</div>
		</div>
	);
};

export default FaqContainer;
