import { componentBorder, hoverComponentBorder, negativeComponentText, negativeComponentBackground, negativeHoverComponentBackground } from "@/app/ui/tailwindClasses";

/**
 * Props for the MediumButton component.
 */
interface MediumButtonProps {
  /**
   * The text to be displayed inside the button.
   */
  text: string;

  /**
   * Optional click handler for the button.
   */
  onClick?: () => void;
}

/**
 * A medium-sized button component with text and an optional click handler.
 * The button is styled with custom classes and changes appearance on hover.
 * 
 * @param text - The text to display inside the button.
 * @param onClick - An optional click handler for the button.
 * @returns A styled button element with text and optional click functionality.
 */
export default function MediumButton({ text, onClick }: MediumButtonProps) {
  return (
    <button
      className={`flex flex-row gap-2 cursor-pointer w-64 py-1 px-4 h-16 place-content-center lg:text-left md:text-center 
                  ${componentBorder} ${hoverComponentBorder} rounded-2xl
                  ${negativeComponentText}
                  ${negativeComponentBackground} ${negativeHoverComponentBackground}`}
      onClick={onClick}
    >
      <div className="text-2xl font-bold text-center self-center">
        {text}
      </div>
    </button>
  );
}
