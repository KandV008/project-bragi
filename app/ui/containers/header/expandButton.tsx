"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  componentBackground,
  componentText,
  fillDefaultComponentBackground,
  hoverFillDefaultComponentBackground,
} from "../../tailwindClasses";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import SubHeaderButtons from "./subHeaderButtons";

/**
 * This component renders a button that toggles the visibility of a submenu.
 * When clicked, it expands or collapses the menu containing `SubHeaderButtons`.
 * 
 * @returns {JSX.Element} The rendered ExpandButton component.
 */
export default function ExpandButton(): JSX.Element {
  const [isExpanded, setIsExpanded] = useState(false);

  /**
   * Toggles the expansion state of the menu.
   */
  const toggleExpandMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={toggleExpandMenu}
        id="expand-toggle"
        className={`w-fit rounded-2xl border-2 border-transparent p-3 
              ${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}
              ${componentText}`}
      >
        <FontAwesomeIcon icon={faBars} className="size-5" />
      </button>
      
      {/* Dropdown Menu */}
      <div className="pt-2 z-20 absolute right-3 origin-top-right bg-transparent focus:outline-none">
        <div className="flex flex-col gap-1" role="none">
          {isExpanded ? (
            <section className={`flex flex-col w-fit p-2 gap-1 rounded-md ${componentBackground}`}>
              <SubHeaderButtons />
            </section>
          ) : null}
        </div>
      </div>
    </>
  );
}