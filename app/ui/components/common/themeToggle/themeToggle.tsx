"use client";

import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { fillDefaultComponentBackground, hoverFillDefaultComponentBackground, componentText } from "@/app/ui/tailwindClasses";

/**
 * ThemeToggle component allows users to switch between light and dark themes.
 * It uses local state to track the current theme and applies the appropriate class to the document.
 * 
 * - The component uses FontAwesome icons to display the current theme: a sun icon for dark mode and a moon icon for light mode.
 * - The button toggles between light and dark mode upon click.
 * - It listens for changes to the `theme` state and updates the document's class accordingly to apply the dark mode styles.
 *
 * @returns JSX.Element - A button that toggles the theme between light and dark.
 */
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
        className={`w-fit rounded-2xl border-2 border-transparent p-3 
                ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
                ${componentText}`}
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
