import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';

const NewsletterSubscription = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = () => {
    alert(`Thank you for subscribing with ${email}!`);
    setEmail('');
  };

  return (
    <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white p-8 rounded-lg shadow-lg text-center">
      <h2 className="text-3xl font-bold mb-4">Subscribe to our Newsletter</h2>
      <p className="text-lg mb-6">Stay updated with the latest trends and exclusive offers.</p>

      <div className="flex justify-center items-center space-x-4">
        {/* Envelope Icon */}
        <FaEnvelope className="text-[#6E01B1] text-3xl" />

        {/* Email Input Field */}
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#6E01B1] transition-all duration-300 ease-in-out"
        />

        {/* Subscribe Button */}
        <button
          onClick={handleSubscribe}
          className="px-6 py-2 bg-[#6E01B1] text-white font-semibold rounded-lg hover:bg-[#5a0099] transition-all duration-300"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
