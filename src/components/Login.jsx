import React, { useState } from "react";
import axios from "axios";

const LoginPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isRegistering, setIsRegistering] = useState(false); // To toggle between login and register

  // Login handler
  const handleLogin = async () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/login", {
        username,
        password,
      });

      // Store JWT token in localStorage
      localStorage.setItem("authToken", response.data.token);

      setIsLoggedIn(true);
      setError("");
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred during login");
    }
  };

  // Register handler
  const handleRegister = async () => {
    if (username.trim() === "" || password.trim() === "") {
      setError("Both fields are required!");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/auth/register", {
        username,
        password,
      });

      setError("");
      alert("User registered successfully! You can now login.");
      setIsRegistering(false); // Switch back to login page after successful registration
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred during registration");
    }
  };

  // Logout handler
  const handleLogout = async () => {
    try {
      // Optional: Send a request to invalidate the token
      await axios.post(
        "http://localhost:5000/api/auth/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("authToken")}`, // Send the stored JWT token
          },
        }
      );

      // Clear localStorage
      localStorage.removeItem("authToken");
      setIsLoggedIn(false);
      setUsername("");
      setPassword("");
    } catch (error) {
      setError(error.response?.data?.error || "An error occurred during logout");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-500 to-purple-600">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
        {isLoggedIn ? (
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Welcome, {username}!</h1>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        ) : (
          <div>
            <h1 className="text-2xl font-bold text-gray-800 mb-6">{isRegistering ? "Register" : "Login"}</h1>
            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
            <input
              type="text"
              placeholder="Enter your email"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              aria-label="Email"
            />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              aria-label="Password"
            />
            <button
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              onClick={isRegistering ? handleRegister : handleLogin}
            >
              {isRegistering ? "Register" : "Login"}
            </button>

            <div className="text-center mt-4">
              <button
                className="text-blue-500 hover:underline"
                onClick={() => setIsRegistering(!isRegistering)} // Toggle between login and register
              >
                {isRegistering ? "Already have an account? Login" : "Don't have an account? Register"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
