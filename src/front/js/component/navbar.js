import React from "react";
import { Email } from "../component/email";
import { Phone } from "../component/phone";
import navlogo from "../../img/navlogo.png";
import navbackground from "../../img/navbackground.png";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-custom" style={{ backgroundImage: `url(${navbackground})`, height: '320px' }}>
			<div className="container">
				<div className="row">
					<div className="col-3 top-left">
						<img
							src={navlogo}
							alt="Dawn to Dusk Sportfishing"
							className="navbar-logo"
						/>
					</div>
					<div className="col-6">
						
					</div>
					<div className="col-3 top-right">
						<div className="nav-buttons">
							<Phone />
							<Email />
						</div>
					</div>
				</div>
			</div>
		</nav>

	);
};
