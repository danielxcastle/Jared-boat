import React, { useState, useEffect } from "react";
import { Phone } from "../component/phone";
import anchor from "../../front/img/anchor.png";
import anchor2 from "../../img/anchor2.png"; // Import the second anchor image
import middlelogo from "../../img/middlelogo.png";
import { useNavigate } from "react-router-dom";
import "../../styles/index.css"; // Import your CSS file
import BookingEmail from "./bookingEmail";

export const Navbar = () => {
  const navigate = useNavigate();
  const [isAnchorVisible, setIsAnchorVisible] = useState(false);

  useEffect(() => {
    // Delay the visibility of the anchor image after mounting
    const delayTimeout = setTimeout(() => {
      setIsAnchorVisible(true);
    }, 500); // Adjust the delay duration as needed

    // Cleanup the timeout to avoid potential memory leaks
    return () => clearTimeout(delayTimeout);
  }, []);

  const toHome = () => {
    navigate("/");
  };

  const handleMouseOver = () => {
    setIsAnchorVisible(false);
    setTimeout(() => {
      setIsAnchorVisible(true);
    }, 10);
  };

  return (
    <nav className="navbar-custom">
      <div className="row">
        <div className="col-4 top-left">
          {isAnchorVisible ? (
            <img
              src={anchor}
              onClick={toHome}
              alt="Dawn to Dusk Sportfishing"
              className="navbar-logo fade-in"
              onMouseOver={handleMouseOver}
            />
          ) : (
            <img
              src={anchor2} // Use a placeholder image while waiting for visibility
              alt="Dawn to Dusk Sportfishing"
              className="navbar-logo fade-in"
            />
          )}
        </div>
        <div className="col-4 middlelogo">
          <center>Hello!</center>
        </div>
        <div className="col-4 top-right">
          <div className="nav-buttons">
            <Phone />
            <BookingEmail />
          </div>
        </div>
      </div>
    </nav>
  );
};
