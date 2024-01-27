import React from "react";
import { JuicerFeed } from "../component/JuicerFeed";
import "../../styles/index.css";
import insta from "../../img/insta.png";

export const RecentCatches = () => {
    return (
        <div className="home-page mt-2">
            <div className="recent">
                <h1 className="home-header">
                    <center>Recent Catches</center>
                </h1>
                <center>
                    <img className="insta" src={insta}/>
                </center>
            </div>
            
        </div>
    );
};


