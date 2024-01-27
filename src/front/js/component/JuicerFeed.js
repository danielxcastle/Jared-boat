import React, { useEffect } from "react";
import "../../styles/index.css";

export const JuicerFeed = () => {
    useEffect(() => {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.src = "https://www.juicer.io/embed/danielxcastle/embed-code.js";
        script.async = true;
        script.defer = true;

        script.onload = () => {
            // Juicer script has loaded successfully
            console.log("Juicer script loaded");
        };

        script.onerror = () => {
            // Error loading Juicer script
            console.error("Error loading Juicer script");
        };

        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="juicer-feed-container">
            <div className="juicer-feed" data-feed-id="your-instagram-feed-id"></div>
        </div>
    );
};


