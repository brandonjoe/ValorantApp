import React from 'react';
import Map from '../Map/Map.js'
import classes from './Maps.module.css';
import { Link } from "react-router-dom";

const Maps = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.section_title}>
                    <h1 className={classes.title}>Maps</h1>
                </div>
                <div className={classes.map_selection}>
                    <Link className={classes.link} to={"/bind"}>
                            <Map title={'Haven'} />
                    </Link>
                        
                </div>
            </div>
        </div>
    );
};

export default Maps;