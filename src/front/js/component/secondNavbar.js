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
  const toLocation = () => {
    navigate("/location")
  };


  return (
    <nav className="navbar-lower">
      <div className="row">
        <div className="d-flex flex-wrap">

            <button className="lower-nav-btn">
              <h5 onClick={toAbout}>
                Our Vessel <i className="fa-solid fa-ship"></i>
              </h5>
            </button>



            <button className="lower-nav-btn" aria-labelledby="recentCatchesDropdown">
              <h5 href="#" onClick={toRecentCatches}>
                Recent Catches
              </h5>
            </button>

          <div className="dropdown">
            <button
              className="lower-nav-btn dropdown-toggle"
              id="faqDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              FAQs
            </button>
            <div className="dropdown-menu" aria-labelledby="faqDropdown">
              <h5 className="dropdown-item" href="#" onClick={toFaq}>
                FAQs
              </h5>
              <h5 className="dropdown-item" href="#" onClick={toLocation}>
                Location
              </h5>
            </div>
          </div>
          <a href="https://www.instagram.com/capt_jared_m/" target="_blank" rel="noopener noreferrer" className="lower-nav-btn-insta text-black text-center">
            <h5><i className="fa-brands fa-instagram insta-logo"></i></h5>
          </a>
          </div>
      </div>
    </nav>
  );
};
