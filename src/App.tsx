import React, { useState, useEffect } from "react";
import "./App.css";
import ColorChanger from "./components/ColorChanger";
import ThemeToggler from "./components/ThemeToggler";

function App() {
  const getInitialTheme = () => {
    return localStorage.getItem("theme") === "dark";
  };

  const [isDarkMode, setIsDarkMode] = useState<boolean>(getInitialTheme);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      const theme = newMode ? "dark" : "light";
      localStorage.setItem("theme", theme);
      return newMode;
    });
  };

  return (
    <>
      <header>
        <h1>Vitest</h1>
        <ThemeToggler isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      </header>
      <section>
        <ColorChanger />
      </section>
    </>
  );
}

export default App;
