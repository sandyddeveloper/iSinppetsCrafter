"use client";
import axios from "axios";
import React, { useState } from "react";

interface ErrorMessages {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
  general?: string; 
}

const Signup = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordStrength, setPasswordStrength] = useState("");
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const checkPasswordStrength = (password: string) => {
    if (password.length < 6) {
      setPasswordStrength("Too short");
      return "red";
    } else if (password.match(/[A-Z]/) && password.match(/[0-9]/)) {
      setPasswordStrength("Strong");
      return "green";
    } else {
      setPasswordStrength("Weak");
      return "orange";
    }
  };

  const validateInput = (field: keyof ErrorMessages, value: string) => {
    let message = "";
    if (field === "username" && value.trim().length < 3) {
      message = "Username must be at least 3 characters long.";
    } else if (field === "email" && !/\S+@\S+\.\S+/.test(value)) {
      message = "Email is not valid.";
    } else if (field === "password") {
      checkPasswordStrength(value);
    } else if (field === "confirmPassword" && value !== password) {
      message = "Passwords do not match.";
    }
    setErrorMessages((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessages((prev) => ({
        ...prev,
        confirmPassword: "Passwords do not match.",
      }));
      return;
    }

    try {
      const response = await axios.post("http://localhost:8000/api/signup/", {
        username,
        email,
        password,
      });

      if (response.status === 201) {
        // Redirect to login or dashboard
        window.location.href = "/login";
      }
    } catch (error: any) {
      console.error(error);
      setErrorMessages((prev) => ({
        ...prev,
        general: error.response?.data?.message || "An error occurred",
      }));
    }
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-96 relative">
        <h2 className="text-2xl font-bold text-center mb-4">Create Account</h2>

        {/* Display General Error Message */}
        {errorMessages.general && (
          <p className="text-red-500 text-sm mb-4">{errorMessages.general}</p>
        )}

        <form onSubmit={handleSubmit}>
          {/* Username Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="username">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
                validateInput("username", e.target.value);
              }}
              className={`w-full p-2 rounded-lg border ${
                errorMessages.username ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
              placeholder="Enter your username"
            />
            {errorMessages.username && (
              <p className="text-red-500 text-sm">{errorMessages.username}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                validateInput("email", e.target.value);
              }}
              className={`w-full p-2 rounded-lg border ${
                errorMessages.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
              placeholder="Enter your email"
            />
            {errorMessages.email && (
              <p className="text-red-500 text-sm">{errorMessages.email}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                validateInput("password", e.target.value);
              }}
              onBlur={() => checkPasswordStrength(password)}
              className={`w-full p-2 rounded-lg border ${
                errorMessages.password ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
              placeholder="Enter your password"
            />
            <p
              className={`text-sm ${
                passwordStrength === "Strong"
                  ? "text-green-500"
                  : passwordStrength === "Weak"
                  ? "text-orange-500"
                  : "text-red-500"
              }`}
            >
              {passwordStrength}
            </p>
            {errorMessages.password && (
              <p className="text-red-500 text-sm">{errorMessages.password}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="confirm-password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                validateInput("confirmPassword", e.target.value);
              }}
              className={`w-full p-2 rounded-lg border ${
                errorMessages.confirmPassword ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-150 ease-in-out`}
              placeholder="Confirm your password"
            />
            {errorMessages.confirmPassword && (
              <p className="text-red-500 text-sm">{errorMessages.confirmPassword}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-bold py-2 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:scale-105"
          >
            Sign Up
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-center text-sm mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 underline transition duration-200 hover:text-blue-700">
            Log in here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
