import Link from "next/link";
import { hoverComponentEmptyBackground, hoverComponentBorder, componentText, hoverComponentText } from "../../tailwindClasses";

/**
 * Props for the NavButton component.
 */
interface NavButtonProps {
  /**
   * The text to display inside the navigation button.
   */
  text: string;

  /**
   * The URL to navigate to when the button is clicked.
   */
  href: string;
}

/**
 * A navigation button component that navigates to a given URL when clicked.
 * The button displays a text label and is styled with hover effects.
 * 
 * @param text - The text to display on the button.
 * @param href - The URL to navigate to when the button is clicked.
 * @returns A button that navigates to the provided URL with hover effects.
 */
export default function NavButton({ text, href }: NavButtonProps) {
  return (
    <Link href={href}>
      <button
        className={`py-1 px-2 h-10 w-28 min-h-4 min-w-4 hover:rounded                    
                    ${hoverComponentEmptyBackground}
                    ${hoverComponentBorder}
                    ${componentText} ${hoverComponentText}`}
      >
        <div className="text-md font-semibold text-center">{text}</div>
      </button>
    </Link>
  );
}
