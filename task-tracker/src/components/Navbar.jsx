import React, { useState } from "react";

const Navbar = () => {

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a href="/about" className="text-2xl font-bold text-gray-800 dark:text-white">
              MyWebsite
            </a>
            <div className="ml-10 space-x-4 hidden md:flex">
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                Contact Us
              </a>
              <a
                href="#"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500"
              >
                Pricing
              </a>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <button
              
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              toggle
            </button>
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-800 dark:text-gray-200 hover:text-blue-500 focus:outline-none"
              >
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
