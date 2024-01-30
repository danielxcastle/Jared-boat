import React from "react";
import "../../styles/index.css";
import { QuestionsEmail } from "../component/questionsEmail";

export const Faq = () => {
  const faqData = [
    {
      question: "How do I make a reservation for a fishing trip?",
      answer: "To make a reservation, you can contact our reservation desk directly either by email or phone call to secure your spot on the next available trip. Our friendly staff will guide you through the process and provide any necessary details.",
    },
    {
      question: "What types of fishing trips do you offer?",
      answer: "We offer various fishing trips tailored to different preferences. These include local fishing trips near the coast, island fishing trips targeting specific species, and offshore trips for those seeking bigger game like tuna and marlin.",
    },
    {
      question: "What is included in the cost of a fishing trip?",
      answer: "The cost typically covers your spot on the boat, fishing gear, bait, and the adventure itself. However, please note that participants are required to have a valid fishing license, which is not included in the trip cost. You must obtain a fishing license in advance from the California Department of Fish and Wildlife.",
    },
    {
      question: "Do I need to bring my own fishing gear?",
      answer: "While we provide basic fishing gear, you're welcome to bring your own if you prefer. Our equipment is well-maintained, and our crew will be happy to assist you with any questions or adjustments.",
    },
    {
      question: "Are there age restrictions for participants?",
      answer: "Most of our trips are suitable for participants of all ages. However, some offshore trips may have age or physical fitness requirements due to the nature of the fishing. It's best to check with our staff when making a reservation.",
    },
    {
      question: "What happens if the weather is bad?",
      answer: "Your safety is our top priority. If weather conditions are unfavorable, we may need to reschedule or cancel a trip. We will notify you in advance and work with you to find a suitable alternative.",
    },
    {
      question: "Can I bring my own food and beverages?",
      answer: "Yes, you are welcome to bring your own food and non-alcoholic beverages. We also have onboard concessions available for purchase, offering snacks and drinks.",
    },
    {
      question: "Is gratuity included in the trip cost?",
      answer: "Gratuity is not included in the trip cost, but it is customary to tip the crew based on the level of service provided. Tipping is appreciated and generally ranges from 15% to 20% of the trip cost.",
    },
  ];

  return (
    <div className="home-page mt-2">
      <center>
        <h1 className="home-header">Frequently Asked Questions</h1>
        <br />
      </center>
      {faqData.map((faq, index) => (
        <div key={index} className="faq-item">
          <h2 className="title-faq">{faq.question}</h2>
          <br />
          <h5>{faq.answer}</h5>
          <br />
          <br />
        </div>
      ))}
      <br />
      <div className="row questions">
        <QuestionsEmail />
      </div>
    </div>
  );
};
