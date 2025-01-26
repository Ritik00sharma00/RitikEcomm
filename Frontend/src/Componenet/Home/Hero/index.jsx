import React from 'react';

function Hero() {
  return (
    <section className="hero bg-gradient-to-r from-purple-500 via-black-500 to-black text-white py-20 px-6 lg:px-16">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center lg:justify-between gap-10">
        {/* Hero Text */}
        <div className="hero-text max-w-lg text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-6">
            Discover <span className="text-yellow-300">Limitless Choices</span>
          </h1>
          <p className="text-lg lg:text-xl font-medium mb-8">
            Elevate your lifestyle with our curated selection of premium products. 
            <span className="text-yellow-300"> Quality you can trust.</span>
          </p>
          <button className="px-6 py-3 bg-yellow-300 text-purple-700 font-semibold rounded-full shadow-md hover:bg-yellow-400 transition duration-300">
            Explore Now
          </button>
        </div>

        {/* Hero Image */}
        <div className="hero-image">
          <img
            src="/heroimg.jpg"
            alt="Ecommerce Hero"
            className="w-full lg:w-3/4 rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
