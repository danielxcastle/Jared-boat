import React from "react";

export const Phone = () => {
    const phoneNumber = "4242008308";

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <button onClick={handlePhoneClick} className="lower-nav-btn"><i className="fa-solid fa-phone"></i> Call Us!</button>
    );
};