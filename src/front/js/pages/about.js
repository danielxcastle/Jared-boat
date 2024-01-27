import React from "react";
import "../../styles/index.css";
import boat from "../../img/boat.jpg";

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
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
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
        </div>
        <div className="row text-center">
          <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {/* Repeat the same image four times in the carousel */}
              {[...Array(4)].map((_, index) => (
                <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
                  <img className="about-image" src={boat} alt={`Boat ${index + 1}`} />
                </div>
              ))}
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
