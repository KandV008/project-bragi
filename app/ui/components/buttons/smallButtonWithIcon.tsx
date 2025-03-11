"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { componentText, hoverComponentText, hoverComponentEmptyBackground, hoverComponentBorder } from "../../tailwindClasses";

/**
 * Props for the SmallButtonWithIcon component.
 */
interface SmallButtonWithIconProps {
  /**
   * The icon to display in the button.
   */
  icon: IconDefinition;

  /**
   * The main text to display inside the button.
   */
  text: string;

  /**
   * The secondary text to display inside the button, usually for larger screens.
   */
  subtext: string;

  /**
   * The URL to navigate to when the button is clicked. Optional.
   */
  href?: string;

  /**
   * Action to execute when the button is clicked. Optional.
   */
  onClick?: () => void;
}

/**
 * A small button component with an icon that navigates to a given URL when clicked.
 * The button displays primary and secondary text, with hover effects and responsive styling.
 * 
 * @param icon - The icon to display in the button.
 * @param text - The main text to display on the button.
 * @param subtext - The secondary text to display on larger screens.
 * @param href - The URL to navigate to when the button is clicked (optional).
 * @param onClick - A custom click handler function (optional).
 * @returns A small button with an icon, primary and secondary text, and hover effects.
 */
export default function SmallButtonWithIcon({
  icon,
  text,
  subtext,
  href,
  onClick: action
}: SmallButtonWithIconProps) {
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (action) action();
    if (!href) e.preventDefault();
  };

  return (
    <Link href={href ? href : ""} onClick={onClick}>
      <button
        className={`flex items-start cursor-pointer py-1 px-2 2xl:h-12  
                    min-w-8 lg:w-28 xl:w-48 lg:text-left md:text-center
                    ${componentText} ${hoverComponentText}
                    ${hoverComponentEmptyBackground}
                    border-2 border-transparent
                    ${hoverComponentBorder} hover:lg:rounded hover:rounded-full 
  `}
      >
        <div className="mr-2 md:mr-0 lg:mr-2">
          <FontAwesomeIcon icon={icon} className="" />
        </div>
        <div className="flex flex-col">
          <div className="text-sm font-semibold md:hidden lg:block">{text}</div>
          <div className="text-xs hidden xl:block">{subtext}</div>
        </div>
      </button>
    </Link>
  );
}
