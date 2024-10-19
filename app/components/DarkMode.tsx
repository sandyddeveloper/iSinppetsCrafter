"use client";
import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  return (
    <div className="flex items-center justify-center  bg-gray-100 dark:bg-gray-900 transition-colors duration-300 rounded-full">
      <div
        onClick={toggleDarkMode}
        className={`relative flex items-center justify-between w-16 h-8 p-1 cursor-pointer bg-gradient-to-r ${
          darkMode
            ? "from-indigo-900 to-purple-700"
            : "from-yellow-300 to-yellow-500"
        } rounded-full shadow-lg transition-all duration-500`}
      >
        <FaSun
          className={`text-yellow-500 ${
            darkMode ? "opacity-0" : "opacity-100"
          } transition-opacity duration-500`}
        />
        <FaMoon
          className={`text-white ${
            darkMode ? "opacity-100" : "opacity-0"
          } transition-opacity duration-500`}
        />

        <div
          className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-lg transform transition-transform duration-500 ${
            darkMode ? "translate-x-8" : ""
          }`}
        />
      </div>
    </div>
  );
}
