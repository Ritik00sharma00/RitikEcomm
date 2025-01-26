import React, { useState } from 'react';

const FAQ = () => {
  const faqs = [
    { question: 'What is your return policy?', answer: 'You can return products within 30 days of purchase.' },
    { question: 'How do I track my order?', answer: 'Use the tracking ID sent to your email to track orders.' },
    { question: 'Do you offer international shipping?', answer: 'Yes, we ship worldwide with additional charges.' },
    { question: 'Can I cancel my order?', answer: 'You can cancel your order within 24 hours of purchase.' },
  ];

  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <div className="faq-container bg-gradient-to-b from-purple-400  to-[#141414] p-12 text-white">
      <h2 className="text-center text-4xl font-bold text-[#FFFFFF] mb-10">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
            className="faq-item bg-white text-gray-800 mb-4 p-6 rounded-lg shadow-lg cursor-pointer transition-all duration-300 ease-in-out hover:shadow-2xl hover:bg-[#F4F4F9]"
          >
            <h4 className="text-xl font-semibold">{faq.question}</h4>
            {activeIndex === index && <p className="mt-4 text-gray-600">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
