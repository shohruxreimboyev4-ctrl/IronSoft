import React, { useState } from "react";
import arrow from "../assets/svg/arrow.svg";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Do you have all your team in-house?",
      answer:
        "Yes, our entire team works in-house. This allows us to maintain quality, communication, and seamless collaboration across all projects.",
    },
    {
      question: "How can I get a quote for my project?",
      answer:
        "You can contact us via the form on our website or email us your project details. We'll provide a tailored quote within 24 hours.",
    },
    {
      question: "How can I control the project?",
      answer:
        "We use agile project management tools. You’ll get access to progress updates, reports, and communication with our project manager anytime.",
    },
    {
      question: "Who can recommend your software agency?",
      answer:
        "We have dozens of satisfied clients worldwide. You can check their testimonials or contact them directly for references.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#0B131A] text-white py-20 px-6 flex justify-center">
      <div className="w-full max-w-3xl">
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-10">
          FAQ
        </h2>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <div
              key={index}
              className={`bg-transparent border border-gray-700 rounded-full transition-all duration-300 hover:bg-[#111B25] hover:shadow-lg ${
                openIndex === index ? "rounded-2xl bg-[#0F1A23] shadow-md" : ""
              }`}
            >
              <button
                className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-normal text-[32px] leading-[0.875] text-white transition-colors duration-300 hover:text-[#00AEEF]">
                  {item.question}
                </span>
                <img
                  src={arrow}
                  alt="toggle"
                  className={`w-4 h-4 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  openIndex === index ? "max-h-40 py-2 px-6" : "max-h-0"
                }`}
              >
                <p className="text-sm text-gray-400">{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
