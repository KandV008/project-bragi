"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <>
      <button
        onClick={toggleTheme}
        id="theme-toggle"
        className="absolute p-3 dark:bg-secondary0 bg-primary0  
                  border-2 border-transparent top-5 right-5 w-fit rounded-2xl
                  hover:bg-gray-400 hover:border-primary2 hover:border-2
                  hover:dark:bg-gray-700 hover:dark:border-secondary0"
      >
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="w-7  text-primary2"
            id="theme-toggle-light-icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className=" w-7 text-secondary2"
            id="theme-toggle-dark-icon"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
