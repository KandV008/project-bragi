'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fillDefaultComponentBackground, componentText, componentBorder } from "@/app/ui/tailwindClasses";

/**
 * Props for the TextAreaInput component.
 */
interface TextInputProps {
  /** Name attribute for the textarea input */
  name: string;
  /** Placeholder text displayed inside the textarea */
  placeholder: string;
  /** Label text for the input */
  label: string;
  /** Icon displayed alongside the textarea */
  icon: IconDefinition;
  /** Initial value of the textarea (optional) */
  value?: string;
}

/**
 * A styled textarea input component with an icon and label.
 *
 * @param {TextInputProps} props - The properties for the textarea input component.
 * @returns {JSX.Element} The rendered textarea input component.
 */
export default function TextAreaInput({
  name,
  placeholder,
  label,
  icon,
  value,
}: TextInputProps): JSX.Element {
  return (
    <section className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <article
        className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
          size-full text-base font-semibold
          ${fillDefaultComponentBackground} 
          ${componentText}
          ${componentBorder} rounded-2xl`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <textarea
          id={name}
          name={name}
          className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          placeholder={placeholder}
          autoComplete="off"
          defaultValue={value}
          readOnly={false}
          maxLength={1024}
        />
      </article>
    </section>
  );
}

/**
 * A skeleton loading component for the TextAreaInput.
 *
 * @returns {JSX.Element} The skeleton loading state of the textarea input.
 */
export function TextAreaInputSkeleton(): JSX.Element {
  return (
    <section className="flex flex-col w-full gap-1">
      <label
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        <div className="md:self-start h-7 lg:h-8 w-28 lg:w-1/4 rounded-md bg-gray-200" />
      </label>
      <article
        className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
          h-20 sm:h-16 lg:h-20 w-full font-semibold rounded-2xl bg-gray-200`}
      >
        <div className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded" />
      </article>
    </section>
  );
}
