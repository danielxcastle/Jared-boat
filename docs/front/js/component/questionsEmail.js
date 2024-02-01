import React from "react";

export const QuestionsEmail = () => {
    const handleEmailClick = () => {
      const emailAddress = "jmalottj@gmail.com"; // Replace with your email address
      const subject = "Dawn To Dusk Questions"; // Replace with the desired subject
      const body = "Hello, I have a question about trip info!"; // Replace with the desired body
  
      const mailtoLink = `mailto:${encodeURIComponent(emailAddress)}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      window.location.href = mailtoLink;
    };
  
    return (
      <button onClick={handleEmailClick} className="questions-button">Questions? Email Us!</button>
    );
  };
  export default QuestionsEmail;