"use client";

import { ChangeEvent, useState } from "react";
import { pressedButton, fillDefaultComponentBackground, componentText, componentBorder } from "../../tailwindClasses";

interface CheckBoxInputProps {
  name: string;
  label: string;
  list: any[];
  values?: string[];
}

export default function CheckBoxInput({
  name,
  label,
  list,
  values,
}: CheckBoxInputProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>(values ? values : []);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setSelectedValues(
      (prev) =>
        prev.includes(value)
          ? prev.filter((item) => item !== value)
          : [...prev, value] 
    );
  };

  const getCheckBoxStatus = (buttonName: string) => {
    const baseClasses =
      "flex flex-row gap-2 items-center justify-start cursor-pointer py-1 px-2 rounded-2xl border-2";
    return selectedValues.includes(buttonName)
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
            className={getCheckBoxStatus(element)}
          >
            <input
              type="checkbox"
              id={name + "-" + index}
              name={element}
              value={element}
              onChange={handleCheckboxChange}
              checked={selectedValues.includes(element)}
            />
            <label htmlFor={name + "-" + index}> {element}</label>
            <br />
          </article>
        ))}
      </div>
    </section>
  );
}

export function CheckBoxInputSkeleton(){
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