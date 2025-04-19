import React from 'react';

const HeroSection = () => {
  return (
    <section className="bg-white py-16 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 md:flex items-center justify-between gap-8">
        {/* Left Side Content */}
        <div className="md:w-1/2 space-y-6 text-pink-600 ml-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Fast, Simple <br /> & Reliable Loans
          </h1>
          <p className="text-lg font-medium">
            Get access to quick loans with flexible repayments and no hidden fees. Apply online in minutes and get fast approval.
          </p>
          <a
            href="#apply"
            className="inline-block bg-pink-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-pink-700 transition duration-300"
          >
            Apply Now
          </a>
        </div>

        {/* Right Side Image */}
        <div className="md:w-1/2 mt-10 md:mt-0">
          <img
            src="https://images.pexels.com/photos/7579361/pexels-photo-7579361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Hero"
            className="w-full md:w-[80%] h-auto rounded-xl shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

