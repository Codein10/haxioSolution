import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between Login and SignUp
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear previous errors
    setSuccessMessage(""); // Clear previous success messages

    try {
      const url = isSignUp
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        // If the response is not OK, set the error message
        setErrorMessage(data.error || "Operation failed. Please try again.");
        return; // Stop execution if there's an error
      }

      if (isSignUp) {
        // Handle sign-up success
        setSuccessMessage("User registered successfully! Please log in.");
        setIsSignUp(false); // Switch to login after successful signup
      } else {
        // Handle login success
        localStorage.setItem("token", data.token);
        setSuccessMessage("Login successful!");
        onLogin(); // Notify the parent component about the login state
      }
    } catch (error) {}
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {isSignUp ? "Sign Up" : "Login"}
        </h2>
        {errorMessage && (
          <div className="mb-4 text-red-600 text-center">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="mb-4 text-green-600 text-center">
            {successMessage}
          </div>
        )}
        <div className="mb-4">
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          {isSignUp ? "Sign Up" : "Login"}
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            onClick={() => setIsSignUp(!isSignUp)}
            className="text-blue-500 hover:underline"
          >
            {isSignUp
              ? "Already have an account? Login"
              : "Don't have an account? Sign Up"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
