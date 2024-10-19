import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUserCircle, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Switch } from '@headlessui/react'; // For public/private toggle, install via `npm install @headlessui/react`

const ProfilePage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('Snippets');
  const [isPublic, setIsPublic] = useState(true); // Toggle for Public/Private Profile
  const [isEditMode, setIsEditMode] = useState(false); // Toggle for Edit Mode
  const [username, setUsername] = useState('SanthoshRaj');
  const [bio, setBio] = useState('Full Stack Developer. Love coding and building projects.');
  const [github, setGithub] = useState('https://github.com/santhoshraj');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/santhoshraj');

  const sections = ['Snippets', 'Languages', 'Favorites'];

  return (
    <div className="min-h-screen bg-white text-purple-700 font-sans flex flex-col items-center justify-center p-4 space-y-6">
      {/* 3D Interactive Profile Card */}
      <motion.div
        whileHover={{ scale: 1.05, rotateY: 10 }}
        className="relative w-60 h-60 rounded-full bg-white shadow-lg flex items-center justify-center border-4 border-purple-300 hover:shadow-2xl"
      >
        <FaUserCircle size={120} className="text-purple-500" />
        <div className="absolute top-4 right-4 bg-purple-600 text-white p-2 rounded-full">
          {isPublic ? 'Public Profile' : 'Private Profile'}
        </div>
      </motion.div>

      {/* Edit Mode Toggle */}
      <div className="flex items-center space-x-4">
        <button
          onClick={() => setIsEditMode(!isEditMode)}
          className="px-4 py-2 bg-purple-500 text-white rounded-lg"
        >
          {isEditMode ? 'Save' : 'Edit Profile'}
        </button>

        <Switch
          checked={isPublic}
          onChange={setIsPublic}
          className={`${
            isPublic ? 'bg-purple-600' : 'bg-gray-200'
          } relative inline-flex items-center h-6 rounded-full w-11`}
        >
          <span
            className={`${
              isPublic ? 'translate-x-6' : 'translate-x-1'
            } inline-block w-4 h-4 transform bg-white rounded-full`}
          />
        </Switch>
        <span>{isPublic ? 'Public' : 'Private'}</span>
      </div>

      {/* Username and Bio */}
      <div className="text-center">
        {isEditMode ? (
          <>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="text-2xl font-bold text-purple-600 border-b-2 border-purple-500 mb-2"
            />
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full text-purple-600 border-2 border-purple-500 rounded-lg p-2"
              rows={3}
            />
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-purple-600">{username}</h1>
            <p className="text-lg text-purple-500">{bio}</p>
          </>
        )}
      </div>

      {/* Social Media Links */}
      <div className="flex space-x-4">
        <a href={github} target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-purple-600" size={30} />
        </a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-purple-600" size={30} />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className="text-purple-600" size={30} />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-purple-600" size={30} />
        </a>
      </div>

      {/* Radial Menu */}
      <div className="relative w-80 h-80">
        <motion.div className="absolute inset-0 flex items-center justify-center">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute"
              style={{
                transform: `rotate(${index * (360 / sections.length)}deg) translate(120px)`,
              }}
            >
              <button
                className={`p-4 text-center bg-purple-600 text-white rounded-full ${
                  activeSection === section ? 'ring ring-purple-300' : ''
                }`}
                onClick={() => setActiveSection(section)}
              >
                {section}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Center Content Area */}
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-6 text-center">
        <h1 className="text-2xl font-bold">{activeSection}</h1>
        {activeSection === 'Snippets' && (
          <p>Your snippets will appear here!</p>
        )}
        {activeSection === 'Languages' && (
          <p>Your favorite programming languages will be displayed here!</p>
        )}
        {activeSection === 'Favorites' && (
          <p>Your favorite snippets will appear here!</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
