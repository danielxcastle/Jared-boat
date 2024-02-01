import React from "react";
import "../../styles/index.css";
import boat from "../../img/boat.jpg";
import boat2 from "../../img/boat2.jpg";
import boat3 from "../../img/boat3.jpg";

export const About = () => {
  return (
    <div className="home-page mt-2">
      <div>
        <center>
          <h1 className="home-header">Name of Boat</h1>
        </center>
      </div>
      <div className="row about-upper">
        <div className="row text-center">
          <div className="info">
            <h3>
            Dawn to Dusk is a 27’ 1967 seaway. She is powered by a reliable Detroit diesel engine. With a large back deck she has plenty of fishing space for you and your group. There is a small cabin and galley area to get out of the sun and weather and enjoy your food out of the elements. Stable and well built seaways were made to be workhorses.
            </h3>
          </div>
        </div>
        <div className="row text-center">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="about-image" src={boat} alt="Boat 1" />
              </div>
              <div className="carousel-item">
                <img className="about-image" src={boat2} alt="Boat 2" />
              </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExample" role="button" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExample" role="button" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
