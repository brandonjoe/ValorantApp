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
							key={1}
							question={`What's a good dart?`}
							answer={["Good darts need to be easily",<span style={{color: "rgb(246,68,82)"}}> repeatable</span>, " with decently",  ", efficiently",<span style={{color: "rgb(246,68,82)"}}> maximize</span>, " the area they are cover, as well as cover spots from an angle that can't easily be hidden from. A lot of stress on the last one because a lot of darts, as soon as they land, the defender is hiding in a spot where they can just move around a corner and completely avoid it. Arrows with long travel times (especially ones that travel behind them) can preoccupy the enemy longer than shorter arrows, giving you time to potentially peek/push them if they are distracted. The downsides to long travel time is that it can immediately be shot on impact, but at least you can have a general idea on where they are.  A good dart should also rely more on lining up the crosshair over the HUD. That being said, there are many great darts that make use of the HUD, but they are subject to change since we have no idea how/when Riot will change the HUD. "]}
						/>
						<FaqItem
							key={2}
							question={`What does green, yellow and red mean on the map for each lineup?`}
							answer={[<span style={{color: "rgb(246,68,82)"}}>Green</span>, " means it scans the area and will reveal them with some reliability given how players natrually play/hold angles. ", <span style={{color: "rgb(246,68,82)"}}>Yellow</span>, " means it scan the area, but it's not reliable since the average person with reactions will hear/see the dart, and lose line of sight easily. Of course it can scan someone who's distracted, has slow reactions, or not paying attention, but this uncertainty that is dependent on how the enemy plays, is why it's yellow. ", <span style={{color: "rgb(246,68,82)"}}>Red</span>, " means it's does not scan that spot, and you need to check the spot when pushing, or tell your teammates where they could be so you aren't baiting them. In short, green is good, yellow and red means be careful. If someone's scanned in a yellow spot, it's a suprise, to be sure, but a welcome one. "]}
						/>
						<FaqItem
						key={3}
							question={'Will these darts work for me?'}
							answer={[
								"I can't answer that question for every computer, but if you're on a", <span style={{color: "rgb(246,68,82)"}}> 1920x1080, 16:9 </span>, "resolution, it should work. I also want to say that if a dart positions you in a corner, and lines up with the crosshair, and not the HUD, it should work for you. There are a couple darts that require material quality to be set to 'medium' those will be mentioned in the description of each dart. "
							]}
						/>
						<FaqItem
						key={4}
							question={'How frequently will you update this site?'}
							answer={["The plan is to update this site whenever more darts are found, or when Riot makes a UI change where a dart needs to be removed. You can find out if any changes have been made", <Link  className={classes.links} to={'/logs'} style={{ textDecoration: 'none' }}>
							<span className={classes.links_text}> here </span>
						</Link>, "in the logs."]
								
							}
						/>
						<FaqItem
						key={5}
							question={'I have a sick dart, can I show you and showcase it here?'}
							answer={
								["Of course, you can, if it meets the criteria above, feel free to send me screenshots of the location of where it lands, as well as how it lines up, to", <span style={{color: "rgb(246,68,82)"}}> contact@sovalineups.com</span>, ". I would love to add your dart and credit you in the info."
								]}
						/>
						<FaqItem
						key={6}
							question={"There's a bug on your site, is there a way I can tell you?"}
							answer={
								["I would highly appreciate it if you email me at", <span style={{color: "rgb(246,68,82)"}}> contact@sovalineups.com </span>, "regarding it! I don't normally work in React.js, and I thought it would be a fun project for me using Context API. Thanks a ton!"]
							}
						/>
						<FaqItem
						key={7}
							question={"I'm hungry."}
							answer={
								["Not a question, but spaghetti can be found", <a target="_blank" style={{ textDecoration: 'none' }} className={classes.line2} rel="noopener noreferrer" href="https://github.com/brandonjoe/ValorantApp"> here </a>, "on my Github in the source files."]
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
