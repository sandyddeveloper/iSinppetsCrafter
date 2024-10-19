"use client";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown"; // For rendering Markdown
import remarkGfm from "remark-gfm"; // For GitHub-flavored markdown support

const Profile = () => {
  const [activeTab, setActiveTab] = useState("Account Info");
  const [htmlContent, setHtmlContent] = useState<string>(""); // HTML content for bio

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 flex justify-center p-6">
      <div className="w-full max-w-5xl">
        {/* Header Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center space-x-6 mb-8">
          <div className="relative">
            <img
              className="h-32 w-32 rounded-full border-4 border-yellow-500 shadow-lg"
              src="https://via.placeholder.com/150"
              alt="Profile"
            />
            <button className="absolute top-0 right-0 bg-blue-500 hover:bg-blue-700 text-white text-xs font-semibold px-2 py-1 rounded-lg shadow-md transform hover:scale-105 transition-transform">
              Edit
            </button>
          </div>
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-sm text-yellow-300">Web Developer & Designer</p>
          </div>
        </div>

        {/* Tabs Layout */}
        <div className="flex">
          {/* Left Column: Tabs */}
          <div className="w-1/4 bg-gray-800 p-4 rounded-lg mr-6">
            <ul className="space-y-4">
              {["Account Info", "Snippets", "Activity", "HTML Bio"].map((tab) => (
                <li
                  key={tab}
                  className={`cursor-pointer py-2 px-4 rounded-lg ${
                    activeTab === tab
                      ? "bg-yellow-500 text-gray-900"
                      : "bg-gray-700 hover:bg-gray-600"
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Content */}
          <div className="w-3/4 bg-gray-800 p-6 rounded-lg">
            {activeTab === "HTML Bio" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">HTML Bio</h3>
                <textarea
                  className="w-full h-32 p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500 mb-4"
                  placeholder="Enter your bio as HTML here..."
                  value={htmlContent}
                  onChange={(e) => setHtmlContent(e.target.value)}
                />
                <h4 className="text-lg font-semibold mb-2">Preview:</h4>
                <div
                  className="border border-gray-600 rounded-lg p-4 bg-gray-700"
                  dangerouslySetInnerHTML={{ __html: htmlContent }}
                />
              </div>
            )}

            {activeTab === "Account Info" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Account Info</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm">Username</label>
                    <input
                      type="text"
                      className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500"
                      defaultValue="JohnDoe"
                    />
                  </div>
                  <div>
                    <label className="block text-sm">Email</label>
                    <input
                      type="email"
                      className="w-full p-2 rounded-lg bg-gray-700 border border-gray-600 focus:ring-2 focus:ring-yellow-500"
                      defaultValue="john@example.com"
                    />
                  </div>
                  <button className="bg-yellow-500 text-gray-900 py-2 px-4 rounded-lg mt-4 hover:bg-yellow-600 transition-transform transform hover:scale-105">
                    Save/Update
                  </button>
                </div>
              </div>
            )}

            {activeTab === "Snippets" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Snippets</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold">JavaScript Snippet</h4>
                    <p className="text-sm text-gray-400 mt-2">console.log('Hello World')</p>
                  </div>
                  <div className="bg-gray-700 p-4 rounded-lg">
                    <h4 className="font-semibold">CSS Snippet</h4>
                    <p className="text-sm text-gray-400 mt-2">body {`{`} margin: 0; {`}`}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "Activity" && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Activity</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0"></span>
                    <p>Posted a new snippet on JavaScript</p>
                  </li>
                  <li className="flex items-center space-x-3">
                    <span className="w-6 h-6 bg-yellow-500 rounded-full flex-shrink-0"></span>
                    <p>Updated profile picture</p>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
