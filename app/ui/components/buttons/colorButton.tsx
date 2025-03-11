"use client";

import { useState } from "react";
import { componentBorder } from "../../tailwindClasses";
import { EarphoneColor } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneColor";

/**
 * Props for the ColorButton component.
 */
interface ColorButtonProps {
  /**
   * Array of colors to display on the button.
   * Each color should have a `name` and a `hex` property.
   */
  colors: EarphoneColor[];

  /**
   * Action to be triggered when a color is selected.
   * The index of the selected color is passed to this function.
   * 
   * @param number - The index of the selected color.
   */
  action: (number: number) => void;
}

/**
 * A button component that displays color options.
 * It renders a set of color buttons and allows the user to select a color.
 * The selected color index is passed to the action function.
 * 
 * @param colors - The list of available colors.
 * @param action - The callback function to handle color selection.
 * @returns A JSX element representing the color selection buttons.
 */
export default function ColorButton({ colors, action }: ColorButtonProps) {
  const [colorIndex, setColorIndex] = useState(0);

  /**
   * Returns the appropriate classes for the button based on whether it's selected.
   * 
   * @param buttonName - The index of the button.
   * @returns A string containing the necessary classes for styling the button.
   */
  const getColorButtonClasses = (buttonName: number) => {
    const baseClasses = "size-8 md:size-6 lg:size-8 border-2";
    return buttonName === colorIndex
      ? `${baseClasses} border-rose-600`
      : `${baseClasses} ${componentBorder}`;
  };

  /**
   * Handles the click event for selecting a color.
   * Updates the color index in the state and triggers the action function.
   * 
   * @param index - The index of the clicked color.
   */
  const onClick = (index: number) => {
    setColorIndex(index); // Update the selected color index
    action(index); // Trigger the action with the selected color index
  };

  return (
    <div className="flex flex-row flex-wrap gap-1">
      {/* Render the color buttons */}
      {colors.map((color, index) => (
        <button
          key={color.name + "-button-" + index}
          className={getColorButtonClasses(index)} 
          style={{ backgroundColor: color.hex }}
          title={color.name} 
          onClick={() => onClick(index)}
        ></button>
      ))}
    </div>
  );
}

/**
 * Skeleton component for the ColorButton. 
 * It displays placeholder elements while the actual color buttons are loading.
 */
export function ColorButtonSkeleton() {
  return (
    <div className="flex flex-row flex-wrap gap-1">
      {/* Render placeholder buttons with gray background */}
      {Array.from({ length: 7 }).map((_, index) => (
        <div
          key={`skeleton-button-${index}`}
          className="size-8 md:size-6 lg:size-8 border-2 bg-gray-200"
        />
      ))}
    </div>
  );
}
