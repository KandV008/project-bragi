"use client";

import { pressedButton, fillDefaultComponentBackground, componentText, componentBorder } from "@/app/ui/tailwindClasses";
import { ChangeEvent, useState } from "react";

/**
 * Props for the RadioInput component.
 */
interface RadioInputListProps {
  /** The name attribute for the radio group */
  name: string;
  /** The label for the radio group */
  label: string;
  /** The list of options to display as radio buttons */
  list: any[];
  /** Function to determine the value of a given option */
  valueOf: (type: string) => string;
  /** Optional function to handle radio button changes */
  onChange?: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  /** The selected value (optional) */
  value?: string;
  /** Optional function to update the selected value */
  valueHook?: (type: string) => void;
}

/**
 * A radio button input component that allows single selection.
 *
 * @param {RadioInputListProps} props - The properties for the radio input component.
 * @returns {JSX.Element} The rendered radio button component.
 */
export default function RadioInput({
  name,
  label,
  list,
  valueOf,
  value,
  valueHook,
}: RadioInputListProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  /**
   * Handles changes to the radio buttons, updating the selected value.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event for the radio button.
   */
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    if (valueHook) valueHook(newValue);
    setSelectedValue(newValue);
  };

  /**
   * Determines the CSS class for a radio button based on whether it is selected.
   *
   * @param {string} buttonName - The name of the radio button.
   * @returns {string} The appropriate class name for styling.
   */
  const getRadioButtonStatus = (buttonName: string): string => {
    const baseClasses =
      "flex flex-row gap-2 items-center justify-start cursor-pointer py-1 px-2 rounded-2xl border-2";
    return buttonName === selectedValue
      ? `${baseClasses} ${pressedButton}`
      : `${baseClasses} ${fillDefaultComponentBackground} ${componentText} ${componentBorder}`;
  };

  return (
    <section className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <div className="flex flex-row flex-wrap gap-2 font-semibold">
        {list.map((element, index) => (
          <article
            key={element + "-" + index}
            className={getRadioButtonStatus(valueOf(element))}
          >
            <input
              type="radio"
              id={name + "-" + index}
              name={name}
              value={valueOf(element)}
              checked={selectedValue === valueOf(element)}
              onChange={handleRadioChange}
            />
            <label htmlFor={name + "-" + index}> {element}</label>
            <br />
          </article>
        ))}
      </div>
    </section>
  );
}

/**
 * A skeleton placeholder for the RadioInput component.
 *
 * @returns {JSX.Element} A skeleton structure to simulate loading state.
 */
export function RadioInputSkeleton(): JSX.Element {
  return (
    <section className="flex flex-col w-full gap-1">
      <label
        className="bg-transparent 
          w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-1/4 rounded-md bg-gray-200" />
      </label>
      <div className="flex flex-row flex-wrap gap-2 font-semibold">
        <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
        <div className="md:self-start h-7 sm:h-7 lg:h-8 w-32 rounded-md bg-gray-200" />
      </div>
    </section>
  );
}
