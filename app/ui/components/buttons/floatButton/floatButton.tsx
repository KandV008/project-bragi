"use client";

import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import {
  ButtonType,
  checkTypeButton,
} from "@/app/model/entities/enums/ButtonType";
import { componentBorder } from "@/app/ui/tailwindClasses";
import MediumButtonWithIcon from "../mediumButtonWithIcon/mediumButtonWithIcon";
import SmallButtonWithIcon from "../smallButtonWithIcon/smallButtonWithIcon";

/**
 * Props for the FloatButton component.
 */
interface FloatButtonProps {
  /**
   * The icon to be displayed on the button.
   */
  icon: IconDefinition;

  /**
   * The primary text displayed on the button.
   */
  text: string;

  /**
   * The secondary text displayed under the primary text on the button.
   */
  subtext: string;

  /**
   * The type of the button (used to determine its color).
   */
  type: ButtonType;

  /**
   * Optional URL for navigation when the button is clicked.
   */
  navigationURL?: string;

  /**
   * The position of the button on the screen.
   * Possible values are "start", "center", or "end".
   */
  position: "start" | "center" | "end";

  /**
   * Optional click handler for the button.
   */
  onClick?: () => void;
}

/**
 * A floating button component that displays either a medium or small button
 * with an icon and text. The button's position, size, and appearance are 
 * customizable based on the provided props.
 * 
 * @param icon - The icon to display on the button.
 * @param text - The main text to display on the button.
 * @param subtext - The subtext displayed below the main text on the button.
 * @param type - The type of the button which determines its color.
 * @param navigationURL - An optional URL to navigate to when the button is clicked.
 * @param position - The position of the button on the screen (start, center, or end).
 * @param onClick - An optional click handler for the button.
 * @returns A JSX element representing the floating button with appropriate styling.
 */
export default function FloatButton({
  icon,
  text,
  subtext,
  type,
  navigationURL,
  onClick,
}: FloatButtonProps) {
  const bgColor = checkTypeButton(type);

  return (
    <article className={`flex flex-center`}>
        {/* Medium button visible on larger screens */}
        <div className="hidden md:block">
          <MediumButtonWithIcon
            icon={icon}
            text={text}
            subtext={subtext}
            type={type}
            navigationURL={navigationURL}
            onClick={onClick}
          />
        </div>

        {/* Small button visible on smaller screens */}
        <div
          className={`w-fit block md:hidden rounded ${bgColor} ${componentBorder}`}
        >
          <SmallButtonWithIcon
            icon={icon}
            text={text}
            subtext={""}
            href={navigationURL}
            onClick={onClick}
          />
        </div>
    </article>
  );
}
