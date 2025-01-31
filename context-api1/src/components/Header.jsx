import React, { useContext } from 'react'
import { ThemeContext } from '../ThemeContext'

const Header = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      className={`p-4 ${
        theme === 'light' ? 'bg-gray-200 text-black' : 'bg-gray-800 text-white'
      }`}
    >
      <h1 className="text-2xl">Theme Switcher App</h1>
      <button
        onClick={toggleTheme}
        className={`mt-2 p-2 rounded ${
          theme === 'light' ? 'bg-black text-white' : 'bg-white text-black'
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default Header
