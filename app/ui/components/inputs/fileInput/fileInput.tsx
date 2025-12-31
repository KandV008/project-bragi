"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  fillDefaultComponentBackground,
  componentText,
  componentBorder,
} from "../../../tailwindClasses";
import { UseFormRegisterReturn } from "react-hook-form";

interface FileInputProps {
  name: string;
  label: string;
  icon: IconDefinition;
  register?: UseFormRegisterReturn;
  error?: string;
}

/**
 * A styled file input component with an icon and label.
 *
 * @param {TextInputProps} props - The properties for the file input component.
 * @returns {JSX.Element} The rendered file input component.
 */
export default function FileInput({
  name,
  label,
  icon,
  register,
  error,
}: FileInputProps): JSX.Element {
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
          h-24 w-full font-semibold
          ${fillDefaultComponentBackground} 
          ${componentText}
          ${componentBorder} rounded-2xl`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <input
          type="file"
          id={name}
          name={name}
          className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1
                     file:px-4 file:py-2 file:h-fit file:w-full file:flex file:flex-col
                     file:bg-emerald-900 hover:file:bg-emerald-800 file:text-white
                     file:font-semibold file:text-sm file:border-none file:rounded-lg
                     file:cursor-pointer"
          {...register}
          accept="image/*,.pdf"
        />
      </article>
      {error && <span className="text-pink-600 text-sm mt-1">{error}</span>}
    </section>
  );
}

/**
 * A skeleton loading component for the FileInput.
 *
 * @returns {JSX.Element} The skeleton loading state of the file input.
 */
export function FileInputSkeleton(): JSX.Element {
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
