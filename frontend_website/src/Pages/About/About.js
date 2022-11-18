import React from "react";
import classes from './About.module.css';
export const About =()=>{
    return(
        <div className={classes.container}>
            <div className={classes.banner}>
                <h1>We’re changing the whole DevOps system.</h1>
                <div className={classes.btnbox}>
                  <button className>Get started</button>    <button>View-blog</button> 
                </div>
            </div>
        </div>
    )
}