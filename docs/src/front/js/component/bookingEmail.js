import React from "react";

export const BookingEmail = () => {
  const handleEmailClick = () => {
    const emailAddress = "jmalottj@gmail.com"; // Replace with your email address
    const subject = "Dawn To Dusk Booking Info"; // Replace with the desired subject
    const body = "Hello, I would like more info on trips departing soon!"; // Replace with the desired body

    const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleEmailClick} className="lower-nav-btn"><i className="fa-solid fa-envelope"></i> Email Us!</button>
  );
};

export default BookingEmail;