import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import boat from "../../img/boat.jpg"
import ocean from "../../img/homebackground.png"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-2 home-page" style={{ backgroundImage: `url(${ocean})` }}>
		  <h1>Welcome! Your journey awaits!</h1>
	
		  <img className="home-image" src={boat} />
		  <h5>
			We are located in San Pedro, California. Our Captain Jared has over 10 years of experience in Sportfishing and would like to invite you to join us aboard the vessel.
		  </h5>
		</div>
	  );
	};
