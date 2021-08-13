import React from 'react';
import './ThemeToggle.css';

const ThemeToggle = () => {
  return(
      <div className="flex items-center justify-center w-full mb-12">
        <label for="toggle" className="flex items-center cursor-pointer">
          <div className="mr-3 text-gray-700 font-medium">
            Light Mode
          </div>
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only"/>
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <div className="ml-3 text-gray-700 font-medium">
            Dark Mode
          </div>
        </label>
      </div>
  )
}

export default ThemeToggle;
