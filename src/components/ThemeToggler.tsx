import React, { useState, useEffect } from 'react';

type ThemeTogglerProps = {
  isDarkMode: boolean;
  toggleTheme: () => void;
};

const ThemeToggler: React.FC<ThemeTogglerProps> = ({ isDarkMode, toggleTheme }) => {
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  return (
    <button onClick={toggleTheme}>
      Switch to {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggler;
