import React from "react";

export const Email = () => {
  const handleEmailClick = () => {
    const emailAddress = "danwcunningham@yahoo.com"; // Replace with your email address
    const subject = "Dawn To Dusk Booking Info"; // Replace with the desired subject
    const body = ""; // Replace with the desired body

    const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
  };

  return (
    <button onClick={handleEmailClick} className="nav-button">Email Us!</button>
  );
};

export default Email;