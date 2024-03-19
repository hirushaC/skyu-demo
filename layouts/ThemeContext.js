import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  useEffect(() => {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      bodyElement.classList.toggle('bg-theme-dark', darkTheme);
      bodyElement.classList.toggle('text-white', darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    setDarkTheme((prevTheme) => !prevTheme);
  };

  return (
    <ThemeContext.Provider value={{ darkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
