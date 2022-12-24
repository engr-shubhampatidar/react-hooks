import React, { useState } from "react";

export const ThemeContext = React.createContext();
export const ThemeUpdateContext = React.createContext();

export function useTheme() {
  return React.useContext(ThemeContext);
}

export function useThemeUpdate() {
  return React.useContext(ThemeUpdateContext);
}

export const ThemeProvider = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(false);

  function toggleTheme() {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  }

  return (
    <ThemeContext.Provider value={darkTheme}>
      <ThemeUpdateContext.Provider value={toggleTheme}>
        {children}
      </ThemeUpdateContext.Provider>
    </ThemeContext.Provider>
  );
};
