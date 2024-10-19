"use client";
import React, { useState, useEffect } from "react";
import Logo from "../Logo";
import Link from "next/link";

const Navbar: React.FC = () => {
  // State to check if the user is authenticated
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  // Effect to check authentication status on component mount
  useEffect(() => {
    const token = localStorage.getItem("token");
     // Set true if token exists
    setIsAuthenticated(!!token);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 w-full z-[5001] backdrop-blur-lg"
      style={{
        backdropFilter: "blur(10px)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <div className="text-4xl font-bold text-white">
            <Logo />
          </div>

          {/* Navigation links */}
          <div className="hidden md:flex space-x-8 pt-2">
            {["Home", "About", "Features", "Pricing", "Contact"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white transition duration-200"
                >
                  {item}
                </a>
              )
            )}
          </div>

          {/* Authentication Buttons */}
          <div>
            {isAuthenticated ? (
              <Link
                href="/auth/logout"
                className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-3 rounded-full"
              >
                <span>Logout</span>
                <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
              </Link>
            ) : (
              <>
                <Link
                  href="/auth/login"
                  className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-3 rounded-full mr-4"
                >
                  <span>Login</span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </Link>
                <Link
                  href="/auth/signup"
                  className="border text-sm font-medium relative border-neutral-200 dark:border-white/[0.2] text-black dark:text-white px-5 py-3 rounded-full"
                >
                  <span>Register</span>
                  <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
