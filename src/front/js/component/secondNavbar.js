import React from "react";
import { useNavigate } from "react-router-dom";

export const SecondNavbar = () => {
  const navigate = useNavigate();

  const toAbout = () => {
    navigate("/about");
  };
  const toRecentCatches = () => {
    navigate("/recent-catches");
  };
  const toFaq = () => {
    navigate("/faq");
  };

  const toCatchNumbers = () => {
    navigate("/catch-numbers");
  };

  return (
    <nav className="navbar-lower">
      <div className="row">
        <div className="d-flex flex-wrap">
         
            <button
              className="lower-nav-btn"
              
              id="dropdownMenu"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
             
            >
              About us!
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenu">
              <h5 className="dropdown-item" href="#" onClick={toAbout}>
                Our Boat
              </h5>
              <h5 className="dropdown-item" href="#" onClick={toCatchNumbers}>
                Catch Numbers
              </h5>
            </div>
          
          <button
            className="lower-nav-btn"
            onClick={toRecentCatches}
          >
            Recent Catches
          </button>
          <button
            className="lower-nav-btn"
            onClick={toFaq}
          >
            FAQs
          </button>
        </div>
      </div>
    </nav>
  );
};
