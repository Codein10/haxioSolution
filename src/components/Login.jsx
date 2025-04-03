import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import SignUp from "./SignUp";
import Home from "./Home";

const Login = () => {

  const { register, handleSubmit, formState: { errors } } = useForm();
  const [message, setMessage] = useState("")
  const navigate = useNavigate()
  const onSubmit = (data) => {
    const saveData = localStorage.getItem("userData");
    if (saveData) {
      const { userName, password } = JSON.parse(saveData);
      if (data.userName == userName && data.password == password) {
        alert("Login successful! ✅")
        setTimeout(() => navigate("/"), 1000);
        setMessage("Login successful! ✅");
      } else {
        alert("Invalid email or password ❌")
        setMessage("Invalid Username or password ❌");
      }
    } else {
      alert("No user found. Please sign up first.")
      setMessage("No user found. Please sign up first.");
    }

  }
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-8 rounded-lg shadow-lg w-96"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
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
            required
            {...register("userName")}
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
            autoComplete="password"
            required
            {...register("password")}
            className="w-full mt-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-blue-500 transition duration-300"
        >
          Login
        </button>
        <div className="mt-4 text-center">
          <button
            type="button"
            className="text-blue-500 hover:underline"
          >
            <span>Don't have an account? <Link to="/SignUp">Sign Up</Link></span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
