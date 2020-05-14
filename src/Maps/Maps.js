import React from 'react';
import Map from '../Map/Map.js'
import classes from './Maps.module.css';
import { Link } from "react-router-dom";
import {AppConsumer} from '../State/context.js';
const Maps = () => {
    return (
        <div className={classes.container}>
            <div className={classes.main}>
                <div className={classes.section_title}>
                    <h1 className={classes.title}>Maps</h1>
                </div>
                <div className={classes.map_selection}>
                <AppConsumer>
                    {(value) => (
                        <div>
                            <Link className={classes.link} onClick={() => value.updateBind()} to={"/bind"}>
                          <Map title={'Bind'} />
                            </Link>
                  <Link className={classes.link} onClick={() => value.updateHaven()} to={"/haven"}>
                          <Map title={'Haven'} />
                  </Link>
                        </div>
                          
                    )}
                </AppConsumer>
                  
                        
                </div>
            </div>
        </div>
    );
};

export default Maps;