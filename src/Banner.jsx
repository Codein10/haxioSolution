import React from "react";
import banner from "./assets/banner.png";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="relative flex items-center justify-center bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900 py-16">
      {/* Background Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black opacity-60"></div>

      {/* Banner Content */}
      <div className="relative w-11/12 max-w-6xl">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Empowering businesses with cutting-edge technology"
          className="w-full max-h-[550px] object-cover rounded-lg shadow-lg"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 sm:px-8">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-4 text-blue-900">
           <span> Welcome to </span> <span >Haxio</span> <span>Solution</span>
          </h1>
          <p className="text-sm sm:text-lg lg:text-xl max-w-4xl text-blue-900">
            Empowering businesses with cutting-edge technology solutions that
            drive innovation, growth, and success.
          </p>
          <Link
            to="/about"
            className="mt-6 inline-block bg-blue-500 hover:bg-blue-400 text-blue-900 font-semibold py-3 px-10 rounded-full shadow-lg transition-transform transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
