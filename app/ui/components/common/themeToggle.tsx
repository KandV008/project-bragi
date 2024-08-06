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
        className=" p-3 
                bg-emerald-200 dark:bg-emerald-600   
                text-emerald-900 dark:text-emerald-100
                  w-fit rounded-2xl
                  border-2 border-transparent
                hover:bg-emerald-500 hover:dark:bg-emerald-500"
      >
        {theme === "light" ? (
          <FontAwesomeIcon
            icon={faMoon}
            className="w-7 "
            id="theme-toggle-light-icon"
          />
        ) : (
          <FontAwesomeIcon
            icon={faSun}
            className="w-7"
            id="theme-toggle-dark-icon"
          />
        )}
      </button>
    </>
  );
};

export default ThemeToggle;
