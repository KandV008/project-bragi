"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  fillDefaultComponentBackground,
  componentText,
  componentBorder,
} from "@/app/ui/tailwindClasses";
import { UseFormRegisterReturn } from "react-hook-form";

interface TextInputProps {
  name: string;
  type: "text" | "password" | "number" | "url";
  placeholder: string;
  label: string;
  icon: IconDefinition;
  value?: string;
  register?: UseFormRegisterReturn;
  error?: string; // nuevo prop
}
/**
 * A styled text input component with an icon and label.
 *
 * @param {TextInputProps} props - The properties for the text input component.
 * @returns {JSX.Element} The rendered text input component.
 */
export default function TextInput({
  name,
  type,
  placeholder,
  label,
  icon,
  value,
  register,
  error,
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
          h-16 w-full font-semibold
          ${fillDefaultComponentBackground} 
          ${componentText}
          ${componentBorder} rounded-2xl`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          defaultValue={value}
          {...register}
          className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          autoComplete="off"
          step="any"
          maxLength={255}
          readOnly={false}
        />
      </article>
      {error && <span className="text-pink-600 text-sm mt-1">{error}</span>}
    </section>
  );
}

/**
 * A skeleton loading component for the TextInput.
 *
 * @returns {JSX.Element} The skeleton loading state of the text input.
 */
export function TextInputSkeleton(): JSX.Element {
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
          h-16 w-full font-semibold rounded-2xl bg-gray-200`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <div className="size-6" />
        </div>
        <div className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700" />
      </article>
    </section>
  );
}
