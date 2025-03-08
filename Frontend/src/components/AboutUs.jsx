import React from "react";

function AboutUs() {
  return (
    <div className="container mx-auto p-8">
      <div className="bg-white p-10 rounded-lg shadow-2xl">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8">
          About Sharif Online Clothing
        </h1>
        <p className="text-xl text-gray-600 text-center mb-8 max-w-2xl mx-auto">
          Welcome to Sharif Online Clothing – where fashion meets elegance. We are dedicated to providing high-quality, stylish, and affordable clothing to suit all your fashion needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="/images/image10.jpeg"
              alt="About Us"
              className="w-full rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 rounded-lg"></div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At Sharif Online Clothing, our mission is to bring you the latest fashion trends while ensuring comfort and affordability. We believe that style should be accessible to everyone, and our carefully curated collections reflect this philosophy.
            </p>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Why Choose Us?
            </h2>
            <ul className="list-none text-gray-600 space-y-4">
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-2 mr-4">✔</span>
                <span>Premium quality clothing at unbeatable prices</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-2 mr-4">✔</span>
                <span>Latest fashion trends curated for every season</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-2 mr-4">✔</span>
                <span>Seamless online shopping experience</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-2 mr-4">✔</span>
                <span>Fast and reliable delivery</span>
              </li>
              <li className="flex items-start">
                <span className="bg-blue-500 text-white rounded-full p-2 mr-4">✔</span>
                <span>Exceptional customer support</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;