'use client';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fillDefaultComponentBackground, componentText, componentBorder } from "@/app/ui/tailwindClasses";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

/**
 * Props for the DateInput component.
 */
interface DateInputProps {
  /** Name attribute for the input */
  name: string;
  /** Label text for the input */
  label: string;
  /** Initial value of the input (optional) */
  value?: string;
}

/**
 * A styled date input component with an icon and label.
 *
 * @param {DateInputProps} props - The properties for the date input component.
 * @returns {JSX.Element} The rendered date input component.
 */
export default function DateInput({
  name,
  label,
  value,
}: DateInputProps): JSX.Element {
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
          h-16 w-fit font-semibold
          ${fillDefaultComponentBackground} 
          ${componentText}
          ${componentBorder} rounded-2xl`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <FontAwesomeIcon icon={faCalendar} className="size-6" />
        </div>
        <input
          type="date"
          id={name}
          name={name}
          className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          autoComplete="off"
          step="any"
          required
          defaultValue={value}
          readOnly={false}
          min={new Date().toISOString().split("T")[0]} 
        />
      </article>
    </section>
  );
}

/**
 * A skeleton loading component for the DateInput.
 *
 * @returns {JSX.Element} The skeleton loading state of the date input.
 */
export function DateInputSkeleton(): JSX.Element {
  return (
    <section className="flex flex-col w-full gap-1">
      <label
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-1/4 rounded-md bg-gray-200" />
      </label>
      <article
        className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
          h-16 w-fit font-semibold rounded-2xl bg-gray-200`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <div className="size-6" />
        </div>
        <div className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700" />
      </article>
    </section>
  );
}
