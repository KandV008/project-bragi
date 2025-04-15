"use client";

import { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import MiniTextInput, { MiniTextInputSkeleton } from "../miniTextInput/miniTextInput";

/**
 * TextInputProps defines the props for the IncrementalTextInput component.
 * It includes the necessary parameters for rendering the input fields dynamically.
 */
interface TextInputProps {
  /**
   * The name of the input fields. Used for form submission.
   */
  name: string;

  /**
   * The type of the input field. Can either be "text" or "number".
   */
  type: "text" | "number";

  /**
   * The placeholder text displayed inside the input field when it is empty.
   */
  placeholder: string;

  /**
   * The label associated with the input fields. This will be displayed above the input.
   */
  label: string;

  /**
   * The icon that will be displayed inside or next to the input field.
   */
  icon: IconDefinition;

  /**
   * An optional array of initial values for the input fields. If provided, the inputs will be pre-filled with these values.
   */
  values?: string[];
}

/**
 * InputCounter defines the structure of each input field's data when rendering dynamic inputs.
 * Each input will have a unique id and a counter to track the order of the inputs.
 */
interface InputCounter {
  /**
   * The unique identifier for the input field.
   */
  id: number;

  /**
   * The counter that represents the order of the input field.
   */
  counter: number;
}


/**
 * IncrementalTextInput component allows dynamic addition and removal of input fields.
 * It accepts a name, type, placeholder, label, icon, and an optional array of initial values.
 * The component renders inputs based on the values array (or defaults to a single input)
 * and provides buttons to add or remove inputs dynamically.
 *
 * @param {string} name - The name of the input fields.
 * @param {"text" | "number"} type - The type of input ("text" or "number").
 * @param {string} placeholder - The placeholder text for each input field.
 * @param {string} label - The label for the input fields.
 * @param {IconDefinition} icon - The icon for the input fields.
 * @param {string[]} [values] - An optional array of initial values for the input fields.
 *
 * @returns JSX.Element - The rendered component.
 */
export default function IncrementalTextInput({
  name,
  type,
  placeholder,
  label,
  icon,
  values,
}: TextInputProps) {
  const [inputs, setInputs] = useState<InputCounter[]>(
    values
      ? values.map((_, index) => ({ id: index + 1, counter: index + 1 }))
      : [{ id: 1, counter: 1 }]
  );
  const [counter, setCounter] = useState(values ? values.length : 1);

  /**
   * Function to add a new input field to the form.
   */
  const addInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length + 1, counter: inputs.length + 1 },
    ]);
    setCounter((prev) => prev + 1);
  };

  /**
   * Function to remove the last input field from the form.
   */
  const removeInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <section>
      <input type="hidden" value={counter} name={name} />
      <label
        htmlFor={name}
        className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <article className="flex flex-col px-5 justify-center">
        {inputs.map((input) => (
          <MiniTextInput
            key={input.id}
            name={`${name}-${input.counter}`}
            type={type}
            placeholder={`${placeholder} ${input.counter}`}
            label={`Añadir ${input.counter}`}
            icon={icon}
            value={values ? values[input.id - 1] : ""}
          />
        ))}
        <div className="flex flex-row mt-2 gap-2">
          <button
            type="button"
            onClick={addInput}
            className="mr-2 hover:underline"
          >
            Añadir otro campo
          </button>
          <button
            type="button"
            onClick={removeInput}
            className="hover:underline"
          >
            Quitar último campo
          </button>
        </div>
      </article>
    </section>
  );
}

/**
 * IncrementalTextInputSkeleton is a skeleton loader for the IncrementalTextInput component.
 * It displays placeholder skeletons for the label and input fields, mimicking the layout of the actual component.
 *
 * @returns JSX.Element - The rendered skeleton component.
 */
export function IncrementalTextInputSkeleton() {
  return (
    <section className="flex flex-col gap-1">
      <label className="bg-transparent w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer">
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-1/4 rounded-md bg-gray-200" />
      </label>
      <article className="flex flex-col px-5 justify-center">
        <MiniTextInputSkeleton />
        <div className="flex flex-row mt-2 gap-2">
          <div className="md:self-start h-4 sm:h-5 lg:h-6 w-16 rounded-md bg-gray-200" />
          <div className="md:self-start h-4 sm:h-5 lg:h-6 w-16 rounded-md bg-gray-200" />
        </div>
      </article>
    </section>
  );
}
