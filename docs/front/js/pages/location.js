import React from "react";
import map from "../../img/map.png"

export const Location = () => {
    return (
        <div className="home-page mt-2">
            <h3 className="home-header">
                <center>Location Info</center>
            </h3>
            <div className="row location mt-4 text-center">
                <div className="col-6 location-info">
                    <br />
                    We are located off the 25th street landing in San Pedro, CA. 
                    We are located south of the 110, down Gaffey st. and then left on 24th until you reach the entrance. 
                    <br />
                    <br />
                    <br />
                    <br />
                    Location info:
                    <br />
                    Dawn to Dusk Sportfishing
                    <br />
                    1234 23rd st.
                    <br />
                    San Pedro, CA. 90222
                    <br />
                    Phone:
                    <br />
                    (310) 310-3333
                    <br />
                    Email:
                    <br />
                    sailorjerry@gmail.com
                </div>
                <div className="col-6">
                    <img src={map} className="map-image"/>
                </div>
            </div>
        </div>
    )
}