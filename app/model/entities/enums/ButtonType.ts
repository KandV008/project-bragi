import { fillDefaultComponentBackground, hoverFillDefaultComponentBackground, fillYellowComponentBackground, hoverFillYellowComponentBackground, fillRedComponentBackground, hoverFillRedComponentBackground } from "@/app/ui/tailwindClasses";

export type ButtonType = "default" | "warning" | "danger"

/**
 * This function checks the button type and returns the corresponding Tailwind CSS classes
 * for the button's background and hover effects.
 *
 * @param type - The button type, which can be "default", "warning", or "danger".
 * @returns The corresponding Tailwind CSS class string for the background and hover states of the button.
 */
export function checkTypeButton(type: "default" | "warning" | "danger") { //TODO Change file location
    if (type === "default") {
      return `${fillDefaultComponentBackground} ${hoverFillDefaultComponentBackground}`;
    }
  
    if (type === "warning") {
      return `${fillYellowComponentBackground} ${hoverFillYellowComponentBackground}`;
    }
  
    if (type === "danger") {
      return `${fillRedComponentBackground} ${hoverFillRedComponentBackground}`;
    }
  }