import React from 'react';
import Map from '../Map/Map.js';
import classes from './Maps.module.css';
import { Link } from 'react-router-dom';
import { AppConsumer } from '../State/context.js';
import map_1 from '../Media/map_1.jpg';
import map_2 from '../Media/map_2.jpg';
import map_3 from '../Media/map_3.jpg';
import map_4 from '../Media/map_4.jpg';
import Fade from 'react-reveal/Fade';
import { Parallax } from 'react-scroll-parallax';
const Maps = () => {
	return (
		<div className={classes.container}>
			<div className={classes.main}>
				<div className={classes.section_title}>
					<h1 className={classes.title}>Maps</h1>
				</div>

				<AppConsumer>
					{(value) => (
						<div className={classes.map_selection}>
							<div className={classes.whiteline_left} />
							<div className={classes.whiteline_right} />
							<div className={classes.map_container}>
							
							
							<Link
								className={classes.link}
								style={{ textDecoration: 'none' }}
								to={'/bind'}
							>
								<Map title={'Bind'} location={'Morocco'} map={map_1} />
							</Link>

							<Link
								className={classes.link}
								style={{ textDecoration: 'none' }}
								to={'/haven'}
							>
								<Map title={'Haven'} location={'Bhutan'} map={map_2} />
							</Link>

							<Link
								className={classes.link}
								style={{ textDecoration: 'none' }}
								to={'/split'}
							>
								<Map title={'Split'} location={'Tokyo'} map={map_3} />
							</Link>
							<Link
								className={classes.link}
								style={{ textDecoration: 'none' }}
								to={'/ascent'}
							>
								<Map title={'Ascent'} location={'Venice'} map={map_4} />
							</Link>
							</div>
						</div>
					)}
				</AppConsumer>
				<div className={classes.right}></div>
			</div>
		</div>
	);
};

export default Maps;
