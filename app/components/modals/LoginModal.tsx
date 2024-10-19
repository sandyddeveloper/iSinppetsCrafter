"use client";
import axios from "axios";
import React, { useState } from "react";

interface ErrorMessages {
  email: string;
  password: string;
  general?: string; // Add general as an optional property
}

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessages, setErrorMessages] = useState<ErrorMessages>({
    email: "",
    password: "",
  });

  const validateInput = (field: keyof ErrorMessages, value: string) => {
    let message = "";
    if (field === "email" && value.trim().length < 3) {
      message = "Email must be valid.";
    }
    setErrorMessages((prev) => ({ ...prev, [field]: message }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Reset general error message
    setErrorMessages((prev) => ({ ...prev, general: "" }));

    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        email,
        password,
      });

      if (response.status === 200) {
        // Handle successful login, e.g., save token, redirect
        const { token } = response.data;
        localStorage.setItem("token", token); // Save token in localStorage

        // Redirect to the dashboard or home page
        window.location.href = "/dashboard";
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
    <div className="flex h-screen w-full items-center justify-center bg-black text-white">
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-8 p-6 md:p-12 bg-gray-800 rounded-lg">
        {/* Left side: Features */}
        <div className="space-y-8">
          <div>
            <h1 className="text-4xl font-bold">iSnippetsCrafter</h1>
          </div>
          <div className="space-y-4">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-4">
                <h2 className="font-bold text-lg">Get started quickly</h2>
                <p className="text-gray-400">
                  Integrate with developer-friendly APIs or choose low-code.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-4">
                <h2 className="font-bold text-lg">Support any business model</h2>
                <p className="text-gray-400">
                  Host code that you don&apos;t want to share with the world in private.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <div className="ml-4">
                <h2 className="font-bold text-lg">Join millions of businesses</h2>
                <p className="text-gray-400">
                  Flowbite is trusted by ambitious startups and enterprises of every size.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Form */}
        <div className="bg-gray-700 p-8 rounded-lg w-[600px]">
          <h2 className="text-4xl font-bold mb-6">Welcome back</h2>

          {/* General Error Message */}
          {errorMessages.general && (
            <p className="text-red-500 text-sm mb-4">{errorMessages.general}</p>
          )}

          <div className="flex space-x-4 mb-4">
            <button className="flex-1 bg-gray-800 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                alt="Google Logo"
                className="w-6 h-6 mr-2"
              />
              Log in with Google
            </button>
            <button className="flex-1 bg-gray-800 p-2 rounded-lg flex items-center justify-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="Apple Logo"
                className="w-6 h-6 mr-2"
              />
              Log in with Github
            </button>
          </div>

          <div className="flex items-center mb-4">
            <div className="border-t border-gray-600 flex-grow"></div>
            <span className="px-4 text-gray-400">or</span>
            <div className="border-t border-gray-600 flex-grow"></div>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium">
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
                className={` p-2 mt-1 w-full rounded-lg bg-gray-800 border ${
                  errorMessages.email ? "border-red-500" : "border-gray-600"
                } focus:border-blue-500 focus:ring-blue-500 focus:outline-none`}
                placeholder="Enter your email"
              />
              {errorMessages.email && (
                <p className="text-red-500 text-sm">{errorMessages.email}</p>
              )}
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block text-sm font-medium">
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
                className={`w-full p-2 mt-1 rounded-lg bg-gray-800 border ${
                  errorMessages.password ? "border-red-500" : "border-gray-600"
                } focus:border-blue-500 focus:ring-blue-500 focus:outline-none`}
                placeholder="Enter your password"
              />
              {errorMessages.password && (
                <p className="text-red-500 text-sm">{errorMessages.password}</p>
              )}
            </div>

            <div className="flex items-center justify-between mb-6">
              <div>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox bg-gray-800 text-blue-500 border-gray-600"
                  />
                  <span className="ml-2 text-sm">Remember me</span>
                </label>
              </div>
              <a href="#" className="text-sm text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded-lg"
            >
              Sign in to your account
            </button>
          </form>

          <div className="text-center mt-4 text-gray-400">
            <p>
              Don’t have an account yet?{" "}
              <a href="/auth/signup" className="text-blue-500 hover:underline">
                Sign up here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
