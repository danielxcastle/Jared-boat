import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import boat3 from "../../img/boat3.jpg"

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-2 home-page">
			<h1 className="home-header">
				Welcome!
				<br />
			</h1>
			<div className="row">
				<i className="bottom-header">Your journey awaits...</i>
			</div>
			<div className="row text-center mt-4">
				<div className="col-6 home-text">
					<h1>
						Dawn to Dusk
					</h1>
					<h3 className="mt-4">
					We offer guided fishing and lobster trips on your boat or ours. All gear is provided but feel free to bring you own. If you are booking for a fishing trip we offer 1/2 day, 3/4 day, and Full day fishing excursions. 
					<br /><br />
					We generally focus on our outstanding local and island fishery, but if the opportunity arises we will target offshore to target migratory pelagic species that venture into our route. If you are looking for lobster trips all the best gear and bait is provided. 
					<br /><br />
					Feel free to contact us for more information and pricing on both guided and charter trips.	
					<br /><br />
					(424) 200-8308
					</h3>
				</div>
				<div className="col-6">

					<img className="home-image" src={boat3} />
					<h5 className="mt-4">
						<i>Our vessel docked in San Pedro, CA.
							<br />
							
						</i>
					</h5>
				</div>

			</div>
			<div className="home-content">
				We are located in San Pedro, California. Our Captain Jared has over 10 years of experience in Sportfishing and would like to invite you to join us aboard the vessel.
			</div>
		</div>
	);
};
