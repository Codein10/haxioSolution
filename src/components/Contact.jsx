import React, { lazy, Suspense } from "react";
const Footer = lazy(() => import("../Footer"));

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white min-h-screen">
      {/* Page Banner */}
      <div className="relative flex items-center justify-center py-20 bg-blue-800">
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        <div className="relative text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Have questions or need assistance? We’re here to help. Reach out to
            us, and our team will get back to you shortly!
          </p>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="py-12 px-4 sm:px-6 md:px-16 lg:px-32">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Contact Form */}
          <div className="w-full lg:w-7/12 bg-white text-gray-800 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Get in Touch
            </h2>
            <form
              action="#"
              method="POST"
              className="space-y-6"
              aria-label="Contact Form"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
                  aria-required="true"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  required
                  aria-required="true"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
                aria-label="Send Message"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="w-full lg:w-4/12 bg-blue-800 text-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
            <p className="mb-4">
              Feel free to reach out to us via phone, email, or visit our office
              during working hours.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold">Phone</h3>
                <p className="text-sm">+91-1234567890</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm">contact@haxiosolution.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-sm">
                  Haxio Solution Pvt. Ltd.,
                  <br />
                  123 Tech Park, Noida, Uttar Pradesh, India.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Working Hours</h3>
                <p className="text-sm">Mon - Fri: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer with Lazy Loading */}
      <Suspense fallback={<div className="text-center py-4">Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Contact;
