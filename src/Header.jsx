import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./assets/logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#0A192F] text-white">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 md:px-20">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Haxio Solution Logo" className="h-12" />
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          <Link to="/" className="hover:text-blue-400 transition">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition">
            About
          </Link>
          <Link to="/internship" className="hover:text-blue-400 transition">
            Internship
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition">
            Contact
          </Link>
          <Link to="/login" className="hover:text-blue-400 transition">
            Login
          </Link>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div className="md:hidden">
          <button
            className="focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#0A192F]">
          <ul className="flex flex-col items-center space-y-4 py-4">
            <li>
              <Link to="/" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/internship" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Internship
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </li>
            <li>
              <Link to="/login" className="hover:text-blue-400 transition" onClick={() => setIsMenuOpen(false)}>
                Login
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
