import React, { useState } from "react";

// Define the types for the props of SlideSection
interface SlideSectionProps {
  isFullScreen: boolean;
  toggleFullScreen: () => void;
  isScrolled: boolean;
  closeSlideSection: () => void;
}

// Define the types for the code snippet data
interface CodeSnippet {
  language: string;
  snippet: string;
}

const SlideSection: React.FC<SlideSectionProps> = ({
  isFullScreen,
  toggleFullScreen,
  isScrolled,
  closeSlideSection,
}) => {
  const [isEditable, setIsEditable] = useState(false); // Editable state
  const [heading, setHeading] = useState("Yet another note"); // Heading state
  const [note, setNote] = useState("This is yet another note"); // Note state
  const [codeSnippet, setCodeSnippet] = useState<CodeSnippet>({
    language: "JavaScript",
    snippet: `import React from 'react';

function Function() {
  return <h1>Goodbye, world!</h1>;
}

export default Function;`,
  });

  // Dummy data for tags
  const tags: string[] = ["tag1", "tag2", "tag3", "tag4", "tag5"];

  return (
    <div
      className={`fixed transition-all duration-500 ease-in-out ${
        isScrolled ? "top-0" : "top-22"
      } right-0 h-full ${
        isFullScreen ? "w-full" : "w-1/2"
      } bg-gray-200 dark:bg-gray-800 shadow-lg p-4 transform translate-x-0 z-50`}
    >
      <div className="flex justify-between items-center">
        {/* Close Button */}
        <button
          className="bg-purple text-white px-3 py-1 rounded-md"
          onClick={closeSlideSection}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Full Screen Toggle Button */}
        <button
          className="bg-purple text-white px-3 py-1 rounded-md"
          onClick={toggleFullScreen}
        >
          {isFullScreen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m15.75 9.75-4.5 4.5m0 0 4.5 4.5m-4.5-4.5H3.75m17.5 0A9 9 0 1 0 3.75 12a9 9 0 0 0 17.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9V5.25A2.25 2.25 0 0 1 6 3h3.75m4.5 0H18a2.25 2.25 0 0 1 2.25 2.25V9m0 6v3.75A2.25 2.25 0 0 1 18 21h-3.75m-4.5 0H6a2.25 2.25 0 0 1-2.25-2.25V15"
              />
            </svg>
          )}
        </button>
      </div>

      <div className="p-8">
        {/* Editable Heading */}
        {isEditable ? (
          <input
            type="text"
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className="text-2xl font-bold mb-4 dark:bg-gray-700 bg-white dark:text-white text-black border-b-2 focus:outline-none border-purple"
          />
        ) : (
          <h2 className="text-2xl font-bold mb-4 dark:text-white text-black">
            {heading}
          </h2>
        )}

        {/* Tags Section */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2 py-1 bg-purple rounded-full text-sm text-white"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Editable Note Input */}
        <div className="mb-4">
          <input
            type="text"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            disabled={!isEditable}
            placeholder="This is yet another note"
            className={`w-full px-4 py-2 border border-gray-500 rounded-md ${
              isEditable ? "bg-white dark:bg-gray-800" : "bg-gray-200 dark:bg-gray-700"
            } text-black dark:text-white focus:outline-none focus:border-purple`}
          />
        </div>

        {/* Editable Code Snippet */}
        <div className="relative bg-gray-100 dark:bg-gray-700 border border-purple-500 rounded-md p-4 mb-4">
          <div className="absolute top-2 left-2 bg-purple text-white px-2 py-1 text-xs rounded">
            {isEditable ? (
              <select
                value={codeSnippet.language}
                onChange={(e) =>
                  setCodeSnippet({ ...codeSnippet, language: e.target.value })
                }
                className="bg-purple text-white"
              >
                <option value="JavaScript">JavaScript</option>
                <option value="Python">Python</option>
                <option value="HTML">HTML</option>
              </select>
            ) : (
              codeSnippet.language
            )}
          </div>
          {isEditable ? (
            <textarea
              value={codeSnippet.snippet}
              onChange={(e) =>
                setCodeSnippet({ ...codeSnippet, snippet: e.target.value })
              }
              className="w-full h-40 bg-gray-100 dark:bg-gray-700 text-black dark:text-white focus:outline-none focus:border-purple rounded-md custom-scrollbar overflow-y-auto"
            />
          ) : (
            <pre className="text-sm pt-5 dark:text-white text-black">
              <code>{codeSnippet.snippet}</code>
            </pre>
          )}
        </div>

        {/* Edit Button */}
        <button
          className="bg-purple text-white px-4 py-2 rounded-md"
          onClick={() => setIsEditable(!isEditable)}
        >
          {isEditable ? "Save" : "Edit"}
        </button>
      </div>
    </div>
  );
};

export default SlideSection;
