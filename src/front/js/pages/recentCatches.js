import React from "react";
import "../../styles/index.css";
import fish from "../../img/fish.jpg";
import fish2 from "../../img/fish2.jpg";
import fish3 from "../../img/fish3.jpg";
import fish4 from "../../img/fish4.jpg";
import fish5 from "../../img/fish5.jpg";
import fish6 from "../../img/fish6.jpg";
import lobster1 from "../../img/lobster1.jpg";
import lobster2 from "../../img/lobster2.jpg";
import lobster3 from "../../img/lobster3.jpg";
import lobster4 from "../../img/lobster4.jpg";
import lobster5 from "../../img/lobster5.jpg";
import lobster6 from "../../img/lobster6.jpg";

export const RecentCatches = () => {
  const fishImages = [fish, fish2, fish3, fish4, fish5, fish6, lobster1, lobster2, lobster3, lobster4, lobster5, lobster6];

  const localFishing = [
    "Halibut",
    "Bass",
    "Sculpin",
    "Whitefish",
    "Sheepshead",
    "Rockfish",
  ];

  const islandFishing = [
    "Yellowtail",
    "White Sea bass",
    "Halibut",
    "Bass",
    "Whitefish",
    "Sheepshead",
    "Rockfish",
  ];

  const offshoreFishing = [
    "Bluefin tuna",
    "Yellowfin tuna",
    "Dorado",
    "Yellowtail",
    "Striped <arlin",
  ];

  return (
    <div className="home-page mt-2">
      <div className="recent">
        <h1 className="home-header">
          <center>Recent Catches</center>
        </h1>
        <h2 className="what-typical">What We Typically Catch</h2>
        <div className="row what-catch">
          <div className="col-md-4">
            <h3 className="what-catch-headers">Local Fishing</h3>
            <ul className="fish-catch">
              {localFishing.map((fish, index) => (
                <li key={index}>{fish}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="what-catch-headers">Island Fishing</h3>
            <ul className="fish-catch">
              {islandFishing.map((fish, index) => (
                <li key={index}>{fish}</li>
              ))}
            </ul>
          </div>
          <div className="col-md-4">
            <h3 className="what-catch-headers">Offshore Fishing</h3>
            <ul className="fish-catch">
              {offshoreFishing.map((fish, index) => (
                <li key={index}>{fish}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="row">
          {fishImages.map((image, index) => (
            <div className="col-md-4" key={index}>
              <img className="gallery-image" src={image} alt={`Fish ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
