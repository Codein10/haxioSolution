import React, { lazy, Suspense, useState } from "react";
const Footer = lazy(() => import("../Footer"));

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState(null);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null); // Reset status on new submission

    try {
      const response = await fetch(
        "http://localhost:5000/api/message/get-in-touch",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setStatus("error");
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your full name"
                  required
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
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email address"
                  required
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
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Write your message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
              >
                Send Message
              </button>
            </form>

            {/* Status Message */}
            {status === "success" && (
              <p className="mt-4 text-green-600">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="mt-4 text-red-600">
                Failed to send the message. Please try again.
              </p>
            )}
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
                <p className="text-sm">+918960401450</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Email</h3>
                <p className="text-sm">haxiosolution@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Address</h3>
                <p className="text-sm">
                  Haxio Solution Pvt. Ltd.,
                  <br />
                  Tech Park, Mumbai, Maharashtra, India.
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
