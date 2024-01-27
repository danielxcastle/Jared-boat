import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import boat from "../../img/boat.jpg"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-2 home-page">
		  <h1 className="home-header">
			Welcome!
			<br />
		</h1>
			<i className="bottom-header">Your journey awaits...</i>
	
		  <img className="home-image" src={boat} />
		  <div className="home-content">
			We are located in San Pedro, California. Our Captain Jared has over 10 years of experience in Sportfishing and would like to invite you to join us aboard the vessel.
		  </div>
		</div>
	  );
	};
