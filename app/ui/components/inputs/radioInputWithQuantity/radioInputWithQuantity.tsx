"use client";

import { ChangeEvent, useState } from "react";

/**
 * Props for RadioInputWithQuantity component
 * @property {string} name - The name attribute for the radio input group.
 * @property {any[]} list - The list of options to display.
 * @property {(type: string) => string} valueOf - Function to get the display value of an option.
 * @property {string} type - The type of the filter.
 * @property {(type: string) => (event: ChangeEvent<HTMLInputElement>) => void} [onChange] - Callback function when a selection is made.
 */
interface RadioInputListProps {
  name: string;
  list: Object;
  valueOf: (type: string) => string;
  type: string;
  onChange?: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}

/**
 * RadioInputWithQuantity Component
 *
 * Renders a list of radio buttons with a quantity label.
 *
 * @param {RadioInputListProps} props - Component properties.
 * @returns {JSX.Element} The RadioInputWithQuantity component.
 */
export default function RadioInputWithQuantity({
  name,
  list,
  valueOf,
  type,
  onChange,
}: RadioInputListProps): JSX.Element {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [currentEvent, setCurrentEvent] =
    useState<ChangeEvent<HTMLInputElement> | null>(null);

  /**
   * Handles changes in the radio selection.
   * @param {ChangeEvent<HTMLInputElement>} event - The change event.
   */
  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCurrentEvent(event);
    setSelectedValue(newValue);
    onChange!(type)(event);
  };

  /**
   * Unselects the currently selected radio option.
   */
  const unselect = () => {
    if (currentEvent) {
      onChange!(type)(currentEvent);
    }
    setSelectedValue(null);
  };

  const buttonState = selectedValue ? "block" : "hidden";

  return (
    <form className="flex flex-col px-3">
      {Object.entries(list).map(([key, value], index) => (
        <div key={`radio-input-${key}-${index}`}>
          <input
            type="radio"
            id={name + "-" + index}
            name={name}
            value={key}
            checked={selectedValue === key}
            onChange={handleRadioChange}
          />
          <label htmlFor={name + "-" + index}>{" "}
            {valueOf(key)} ({value})
          </label>
          <br />
        </div>
      ))}
      <div className="self-center">
        <button
          type="button"
          onClick={unselect}
          className={`${buttonState} hover:underline`}
        >
          Quitar opción
        </button>
      </div>
    </form>
  );
}


/**
 * Skeleton version of the RadioInputWithQuantity component for loading states.
 * @returns {JSX.Element} The RadioInputWithQuantitySkeleton component.
 */
export function RadioInputWithQuantitySkeleton(): JSX.Element {
  return (
    <article className="text-lg">
      <h2 className="md:self-start h-6 sm:h-3 xl:h-5 w-36 rounded-md bg-gray-200 mb-1" />
      <form className="px-3">
        <div className="flex flex-row gap-2">
          <div className="size-4 rounded bg-gray-200"></div>
          <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="size-4 rounded bg-gray-200"></div>
          <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="size-4 rounded bg-gray-200"></div>
          <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
        </div>
        <div className="flex flex-row gap-2">
          <div className="size-4 rounded bg-gray-200"></div>
          <span className="md:self-start h-4 w-36 rounded-md bg-gray-200 mb-1"></span>
        </div>
      </form>
    </article>
  );
}
