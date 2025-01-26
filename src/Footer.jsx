import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-6 ">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">Haxio Solution</h1>
          </div>

          <ul className="flex space-x-4 mb-4 md:mb-0">
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-blue-400 transition duration-300"
              >
                Contact
              </a>
            </li>
          </ul>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Haxio Solution. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
