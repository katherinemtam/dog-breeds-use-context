import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [mode, setTheme] = useState("dark")
  
  useEffect(() => {
    console.log(mode)
  }, [mode])

  return (
    <ThemeContext.Provider 
      value = {{ 
        mode, 
        setTheme: () => setTheme(mode === "dark" ? "light" : "dark") 
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useThemes = () => {
  const { mode, setTheme } = useContext(ThemeContext);
  return { mode, setTheme };
}

export default ThemeProvider;
