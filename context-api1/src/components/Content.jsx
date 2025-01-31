import React, { useContext } from 'react';
import { ThemeContext } from '../ThemeContext';


const Content = () => {
    const { theme } = useContext(ThemeContext);

    return (
      <div
        className={`p-6 ${
          theme === 'light' ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        <p className="text-lg">
          This is the content area. The current theme is{' '}
          <strong>{theme.toUpperCase()}</strong>.
        </p>
      </div>
    );
};

export default Content;
