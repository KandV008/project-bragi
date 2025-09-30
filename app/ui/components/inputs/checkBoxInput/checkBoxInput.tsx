"use client";

import { componentBorder, componentText, fillDefaultComponentBackground, pressedButton } from "@/app/ui/tailwindClasses";
import { ChangeEvent, useState } from "react";

/**
 * Props for the CheckBoxInput component.
 */
interface CheckBoxInputProps {
  /** The name attribute for the checkbox group */
  name: string;
  /** The label for the checkbox group */
  label: string;
  /** The list of options to display as checkboxes */
  optionLabels: any[];
  /** The list of options to value as checkboxes */
  optionValues: any[];
  /** The pre-selected values (optional) */
  values?: string[];
}

/**
 * A checkbox input component that allows multiple selections.
 *
 * @param {CheckBoxInputProps} props - The properties for the checkbox component.
 * @returns {JSX.Element} The rendered checkbox component.
 */
export default function CheckBoxInput({
  name,
  label,
  optionLabels,
  optionValues,
  values,
}: CheckBoxInputProps): JSX.Element {
  const [selectedValues, setSelectedValues] = useState<string[]>(values ? values : []);

  /**
   * Handles changes to the checkboxes, updating the selected values.
   *
   * @param {ChangeEvent<HTMLInputElement>} event - The change event for the checkbox.
   */
  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSelectedValues(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value] 
    );
  };

  /**
   * Determines the CSS class for a checkbox based on whether it is selected.
   *
   * @param {string} buttonName - The name of the checkbox button.
   * @returns {string} The appropriate class name for styling.
   */
  const getCheckBoxStatus = (buttonName: string): string => {
    const baseClasses =
      "flex flex-row gap-2 items-center justify-start cursor-pointer py-1 px-2 rounded-2xl border-2";
    return selectedValues.includes(buttonName)
      ? `${baseClasses} ${pressedButton}`
      : `${baseClasses} ${fillDefaultComponentBackground} ${componentText} ${componentBorder}`;
  };

  return (
    <section className="flex flex-col w-full">
      <input type="hidden" name="uses" value={selectedValues.length}/>
      <label
        htmlFor={name}
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <div className="flex flex-row flex-wrap gap-2 font-semibold">
        {optionLabels.map((element, index) => (
          <article
            key={element + "-" + index}
            className={getCheckBoxStatus(optionValues[index])}
          >
            <input
              type="checkbox"
              id={name + "-" + index}
              name={name + "-" + index}
              value={optionValues[index]}
              onChange={handleCheckboxChange}
              checked={selectedValues.includes(optionValues[index])}
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
 * A skeleton placeholder for the CheckBoxInput component.
 *
 * @returns {JSX.Element} A skeleton structure to simulate loading state.
 */
export function CheckBoxInputSkeleton(): JSX.Element {
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
