import React from "react";
import "../../styles/index.css";

export const Faq = () => {
    const faqData = [
        {
            question: "What is Lorem Ipsum?",
            answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry."
        },
        {
            question: "Why do we use it?",
            answer: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            question: "Where does it come from?",
            answer: "The standard Lorem Ipsum passage, used since the 1500s, is reproduced below for those interested."
        },
        {
            question: "What are the origins of Lorem Ipsum?",
            answer: "Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of 'de Finibus Bonorum et Malorum' (The Extremes of Good and Evil) by Cicero."
        },
        {
            question: "Is it readable content?",
            answer: "Yes, it is a more-or-less normal distribution of letters, making it look like readable English."
        },
        {
            question: "How many variations exist?",
            answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form."
        },
        {
            question: "Can I use Lorem Ipsum for my project?",
            answer: "Yes, Lorem Ipsum is widely used as a placeholder text in the design and typesetting industry."
        },
        {
            question: "What is the main purpose of Lorem Ipsum?",
            answer: "The main purpose of Lorem Ipsum is to create a natural-looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout."
        },
        {
            question: "Are there alternatives to Lorem Ipsum?",
            answer: "Yes, there are alternative placeholder texts, such as 'Bacon Ipsum' and 'Cupcake Ipsum,' each with its unique style."
        },
        {
            question: "Can I generate Lorem Ipsum dynamically?",
            answer: "Yes, there are online tools and libraries that allow you to generate Lorem Ipsum dynamically for your projects."
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
        </div>
    );
};
