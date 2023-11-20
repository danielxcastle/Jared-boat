import React from "react";

export const Phone = () => {
    const phoneNumber = "3108033891";

    const handlePhoneClick = () => {
        window.location.href = `tel:${phoneNumber}`;
    };

    return (
        <button onClick={handlePhoneClick} className="nav-button">Call Us!</button>
    );
};