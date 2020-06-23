import React from 'react';
import classes from './Nav.module.css';
import { AppConsumer } from '../State/context';
import { Link } from 'react-router-dom';
import home_icon from '../Media/V_Logomark_White.png';

const Nav = () => {
	let logsButton;
	let faqButton;
	if(window.location.pathname.includes('logs')){
		logsButton = (	<Link  className={classes.links} to={'/logs'} style={{ textDecoration: 'none', color: "tomato" }}>
		<div className={classes.links_text}>Logs</div>
	</Link>)
	
	} else {
		logsButton = (	<Link  className={classes.links} to={'/logs'} style={{ textDecoration: 'none' }}>
		<div className={classes.links_text}>Logs</div>
	</Link>)
	}
	if(window.location.pathname.includes('faq')){
		faqButton = (<Link className={classes.links} to={'/faq'} style={{ textDecoration: 'none', color: "tomato" }}>
		<div className={classes.links_text}>FAQ</div>
	</Link>)
	
	} else {
		faqButton = (	<Link className={classes.links} to={'/faq'} style={{ textDecoration: 'none' }}>
		<div className={classes.links_text}>FAQ</div>
	</Link>)
	}
	return (
		<AppConsumer>
			{(value) => (
				<div className={classes.container}>
					<ul className={classes.nav_buttons}>
						<li className={classes.home_btn}>
							<Link to={'/'}>
								<img src={home_icon} alt={'valorant logo'} />
							</Link>
						</li>
						<li>
							<div className={classes.dropdown}>
								<button className={classes.dropbtn}>Maps</button>
								<div className={classes.dropdowncontent}>
									<Link className={classes.link}  to={'/bind'}>
										<h1>Bind</h1>
									</Link>
									<Link
										className={classes.link}
										to={'/haven'}
									>
										<h1>Haven</h1>
									</Link>
									<Link
										className={classes.link}
						
										to={'/split'}
									>
										<h1>Split</h1>
									</Link>
									<Link
										className={classes.link}
						
										to={'/ascent'}
									>
										<h1>Ascent</h1>
									</Link>
								</div>
							</div>
						</li>
							{logsButton}
							

							{faqButton}
					</ul>
				</div>
			)}
		</AppConsumer>
	);
};

export default Nav;
