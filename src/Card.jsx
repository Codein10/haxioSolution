import React from "react";
import Card1 from "./assets/Card-1.png";
import Card2 from "./assets/Card-2.png";

const Card = () => {
  return (
    <div>
      {/* Free Internship Heading */}
      <section className="text-center py-8 bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900">
        <h1 className="text-4xl sm:text-5xl font-bold text-white">
          Free Internship Opportunities
        </h1>
        <p className="text-lg text-blue-100 mt-4">
          Learn, grow, and excel in web development with Haxio Solution.
        </p>
      </section>

      {/* Cards Section */}
      <section className="py-12 bg-gradient-to-r from-blue-900 via-blue-300 to-blue-900">
        <div className="max-w-7xl mx-auto px-6 sm:px-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              className="w-full h-48 object-cover border-b-4 border-blue-500"
              src={Card2}
              alt="React.js Internship"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                React.js
              </h2>
              <p className="text-gray-700 mb-6">
                <span className="font-bold">
                  Are you ready to dive into the world of React.js development
                  and build a strong foundation for your career?
                </span>{" "}
                Haxio Solution is thrilled to announce a Free Internship in React.js, designed to help aspiring developers gain
                real-world experience, master essential skills, and create
                impactful projects!
              </p>
              <a
                href="https://forms.gle/BX8qpZmqX5ZXvppv5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105">
            <img
              className="w-full h-48 object-cover border-b-4 border-blue-500"
              src={Card2}
              alt="Web Development Internship"
            />
            <div className="p-6 text-center">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Web Development
              </h2>
              <p className="text-gray-700 mb-6">
                {/* <span className="font-bold">
                  Are you ready to dive into the world of web development and
                  build a strong foundation for your career?
                </span>{" "} */}
                <strong>
                  Are you ready to dive into the world of web development and
                  build a strong foundation for your career?
                </strong>{" "}
                Haxio Solution is thrilled to announce a Free Internship in Web
                Development, designed to help aspiring developers gain
                real-world experience, master essential skills, and create
                impactful projects!
              </p>
              <a
                href="https://forms.gle/BX8qpZmqX5ZXvppv5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-500 hover:bg-blue-400 text-white font-semibold py-2 px-6 rounded-full shadow-md transition duration-300"
              >
                Apply Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Card;
