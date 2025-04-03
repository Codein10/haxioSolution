import React from "react";
import about from "../assets/about.jpg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Header Section */}
        <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-10 text-yellow-400">
          About Haxio Solution
        </h1>
        <p className="text-lg sm:text-xl leading-relaxed text-center mb-8">
          Welcome to{" "}
          <span className="font-bold text-yellow-300">Haxio Solution</span>,
          where innovation meets excellence. We specialize in creating
          transformative websites and applications tailored to empower
          businesses in the digital era.
        </p>

        {/* Mission Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl text-center font-bold text-yellow-300">Our Mission</h2>
            <p className="text-lg leading-relaxed text-center">
              {/* To empower businesses by delivering innovative, reliable software solutions that
              foster growth, enhance efficiency, and add lasting value. We aim to bridge the gap
              between vision and reality with precision and creativity. */}
              At Haxio Solution, our mission is to empower businesses with
              cutting-edge technology by delivering high-quality, scalable, and
              user-centric web and mobile solutions. We are committed to 
              <br /><span className="text-lg text-yellow-400 ">Innovating with Excellence<hr className="border-2px m-2 "/></span>
              Crafting modern, efficient, and
              high-performing digital solutions tailored to business needs.
             <br /><span className="text-lg text-yellow-400">Client-Centric Approach<hr className="border-2px m-2" /></span>
             Understanding client requirements deeply
              to provide customized and impactful solutions. 
              <br /><span className="text-lg text-yellow-400"> Quality & Reliability<hr className="border-2px m-2" /></span>
              Ensuring seamless performance, security, and
              scalability in every project we undertake. 
              <br /> <span className="text-lg text-yellow-400">Continuous Growth &Learning<hr className="border-2px m-2"/></span>
              Staying ahead with the latest technologies and trends
              to provide future-proof solutions. 
              <br /><span className="text-lg text-yellow-400">Building Long-Term Partnerships<hr className="border-2px m-2"/></span>
              Establishing trust and transparency with our
              clients through exceptional service and support. At Haxio
              Solution, we don’t just build websites and applications – we build
              digital experiences that drive success!
            </p>
          </div>
          <div>
            <img
              src={about}
              alt="Our Mission"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="mt-16 space-y-8">
          <h2 className="text-3xl font-bold text-center text-yellow-300">
            Why Choose Us?
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-lg text-center">
            <li className="bg-white bg-opacity-10 rounded-lg py-8 px-6 shadow-md hover:scale-105 transition-transform">
              <span className="text-xl font-semibold">Expert Team</span>
              <p>
                Skilled developers and designers ready to bring your ideas to
                life.
              </p>
            </li>
            <li className="bg-white bg-opacity-10 rounded-lg py-8 px-6 shadow-md hover:scale-105 transition-transform">
              <span className="text-xl font-semibold">Custom Solutions</span>
              <p>
                Tailored software solutions to meet your specific business
                needs.
              </p>
            </li>
            <li className="bg-white bg-opacity-10 rounded-lg py-8 px-6 shadow-md hover:scale-105 transition-transform">
              <span className="text-xl font-semibold">Timely Delivery</span>
              <p>
                Fast and efficient project delivery without compromising on
                quality.
              </p>
            </li>
          </ul>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-yellow-300 mb-4">
            Transform Your Vision into Reality
          </h3>
          <p className="text-lg leading-relaxed mb-6">
            Partner with Haxio Solution to elevate your business with
            state-of-the-art technology. Let’s collaborate and create impactful
            solutions together!
          </p>
          <Link
            to="/contact"
            className="inline-block bg-yellow-400 text-blue-900 font-bold py-3 px-8 rounded-full shadow-md hover:bg-yellow-300 transition"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
