"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { ButtonType, checkTypeButton } from "@/app/model/entities/enums/ButtonType";
import { componentBorder, componentText } from "@/app/ui/tailwindClasses";

/**
 * Props for the MediumButtonWithIcon component.
 */
interface MediumButtonWithIconProps {
  /**
   * The icon to be displayed on the button.
   */
  icon: IconDefinition;

  /**
   * The main text to be displayed inside the button.
   */
  text: string;

  /**
   * The subtext to be displayed under the main text inside the button.
   */
  subtext: string;

  /**
   * The type of the button, used to determine its style.
   */
  type: ButtonType;

  /**
   * An optional URL to navigate to when the button is clicked.
   */
  navigationURL?: string;

  /**
   * An optional function to execute when the button is clicked.
   */
  onClick?: () => void;
}

/**
 * A button component that displays an icon, main text, and subtext.
 * The button is styled based on the provided `type` and can navigate to 
 * a URL or trigger an optional click handler.
 * 
 * @param icon - The icon to display inside the button.
 * @param text - The main text to display inside the button.
 * @param subtext - The subtext to display inside the button.
 * @param type - The type of the button, used to style it.
 * @param navigationURL - An optional URL to navigate to when the button is clicked.
 * @param onClick - An optional function to execute when the button is clicked.
 * @returns A button that displays an icon, text, and subtext, and optionally performs a navigation or an action when clicked.
 */
export default function MediumButtonWithIcon({
  icon,
  text,
  subtext,
  type,
  navigationURL,
  onClick: action,
}: MediumButtonWithIconProps) {
  const bgColorClass = checkTypeButton(type);

  /**
   * Handles the button click event.
   * Executes the `onClick` handler, if provided, and prevents default behavior if no URL is provided.
   * 
   * @param e - The click event object.
   */
  const onClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (action) action();
    if (!navigationURL) e.preventDefault();
  };

  return (
    <Link href={navigationURL ? navigationURL : ""} onClick={onClick}>
      <button
        className={`flex flex-row gap-2 cursor-pointer py-1 px-4 h-16 align-items-center w-64
                  ${componentBorder} rounded-2xl 
                  ${componentText} lg:text-left md:text-center
                  ${bgColorClass}`}
      >
        <div className="mr-2 md:mr-0 lg:mr-2 self-center">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <div className="flex flex-col text-start w-full self-center">
          <div className="text-lg font-bold">{text}</div>
          <div className="text-sm font-semibold ">{subtext}</div>
        </div>
      </button>
    </Link>
  );
}

/**
 * Skeleton component for the MediumButtonWithIcon.
 * It displays a placeholder for the button while the actual component is loading.
 * 
 * @returns A JSX element representing a skeleton loader for the MediumButtonWithIcon.
 */
export function MediumButtonWithIconSkeleton() {
  return (
    <div
      className="w-64 h-16 flex flex-row place-self-center md:place-self-start justify-center
                border-2 rounded bg-gray-200"
    />
  );
}
