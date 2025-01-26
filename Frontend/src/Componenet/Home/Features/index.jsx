import React from 'react';
import { FaTruck, FaHeadset, FaTags, FaUndoAlt, FaLock, FaShippingFast, FaMobileAlt } from 'react-icons/fa';

const Features = () => {
  const features = [
    { title: "Fast Delivery", icon: <FaTruck />, description: "Get your orders quickly with fast delivery service." },
    { title: "24/7 Customer Support", icon: <FaHeadset />, description: "Our team is always available to help you with any issues." },
    { title: "Best Discounts", icon: <FaTags />, description: "Enjoy amazing discounts and deals every day." },
    { title: "Easy Returns", icon: <FaUndoAlt />, description: "Return items easily if you're not satisfied." },
    { title: "Secure Payments", icon: <FaLock />, description: "Your transactions are safe and secure with us." },
    { title: "Quick Shipping", icon: <FaShippingFast />, description: "We ship your items fast to ensure you get them on time." },
    { title: "Mobile Friendly", icon: <FaMobileAlt />, description: "Our website is fully optimized for mobile users." },
  ];

  return (
    <div className="bg-gradient-to-b-r container mx-auto from-purple-500  to-white py-16">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-center text-[#141414] text-5xl font-extrabold  mb-12 transform scale-100 transition-all duration-500 ease-in-out hover:scale-105">
          Why Choose Us?
        </h2>

        {/* Features Grid */}
        <div className=" flex  flex-wrap gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white  rounded-xl shadow-lg shadow-purple-500 p-8 text-center transform transition-all duration-500 ease-in-out hover:shadow-2xl hover:scale-105 group"
            >
              {/* Icon */}
              <div className="text-[#6E01B1] text-6xl mb-5 group-hover:text-[#FF4081] transition-all duration-300 ease-in-out">
                {feature.icon}
              </div>
              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4 group-hover:text-[#6E01B1] transition-colors duration-300">
                {feature.title}
              </h3>
              {/* Description */}
              <p className="text-gray-600 text-lg">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
