import React from 'react';
import { useThemes } from '../state/ThemeProvider';
import './ThemeToggle.css';

const ThemeToggle = () => {
  const { mode, setTheme } = useThemes();

  return(
      <div>
        <label for="toggle" className="flex items-center cursor-pointer">
          <p className="mr-3 font-medium">
            Dark Mode
          </p>
          <div className="relative">
            <input type="checkbox" id="toggle" className="sr-only" checked={mode === "light" ? true : false} onChange={setTheme}/>
            <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
            <div className="dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition"></div>
          </div>
          <p className="ml-3 font-medium">
            Light Mode
          </p>
        </label>
      </div>
  )
}

export default ThemeToggle;
