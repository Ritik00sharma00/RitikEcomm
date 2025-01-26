import React from 'react';

const Latest = () => {
  const trends = [
    { title: 'Summer Collection', image: 'https://via.placeholder.com/150', description: 'Bright and breezy styles for summer.' },
    { title: 'Winter Essentials', image: 'https://via.placeholder.com/150', description: 'Stay cozy with our latest winter collection.' },
    { title: 'Casual Wear', image: 'https://via.placeholder.com/150', description: 'Comfort meets style in casual wear.' },
    { title: 'Ethnic Elegance', image: 'https://via.placeholder.com/150', description: 'Celebrate tradition with modern ethnic wear.' },
  ];

  return (
    <div className=" py-12 text-white">
      <h2 className="text-4xl font-bold text-center text-[#6E01B1] mb-10">Latest Trends</h2>
      <div className="flex flex-wrap justify-center gap-8">
        {trends.map((trend, index) => (
          <div
            key={index}
            className="trend-card  shadow-sm shadow-purple-400 w-[250px] bg-white text-center rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:scale-105"
          >
            <img
              src={trend.image}
              alt={trend.title}
              className="w-full rounded-t-lg"
            />
            <div className="p-4">
              <h4 className="text-[#6E01B1] text-xl font-semibold">{trend.title}</h4>
              <p className="text-gray-700 mt-3">{trend.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Latest;
