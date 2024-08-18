import React, { useState } from 'react';

export default function Header() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center text-center h-32 bg-fuchsia-200 dark:bg-black">
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
        Welcome to Fairshare
      </h1>
      <p className="font-serif text-gray-700 dark:text-gray-300">
        To get started, enter all of your friends' names one by one in the text box below
      </p>
      
      {/* Toggle Switch */}
      <div className="mt-4">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-indigo-500 dark:peer-focus:ring-indigo-500 rounded-full peer dark:bg-gray-700 peer-checked:bg-indigo-600"></div>
          <span className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5 dark:bg-gray-300"></span>
          <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
            Dark Mode
          </span>
        </label>
      </div>
    </div>
  );
}
