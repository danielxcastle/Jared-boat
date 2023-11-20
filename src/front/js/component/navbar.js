import React from "react";
import { Email } from "../component/email";
import { Phone } from "../component/phone";
import navlogo from "../../img/navlogo.png";
import navbackground from "../../img/navbackground.png";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-custom" style={{ backgroundImage: `url(${navbackground})`, height: '320px' }}>
      <div className="container d-flex justify-content-align-items-center">
        <img
          src={navlogo}
          alt="Dawn to Dusk Sportfishing"
          className="navbar-logo"
        />

        <div className="nav-buttons">
          <Phone />
          <Email />
        </div>
      </div>
    </nav>
  );
};
