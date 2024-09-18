"use client";

import { ChangeEvent, useState } from "react";
import {
  pressedButton,
  fillDefaultComponentBackground,
  componentText,
  componentBorder,
} from "../../tailwindClasses";

interface RadioInputListProps {
  name: string;
  label: string;
  list: any[];
  valueOf: (type: string) => string;
  onChange?: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export default function RadioInput({
  name,
  label,
  list,
  valueOf,
  value,
}: RadioInputListProps) {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(value);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSelectedValue(newValue);
  };

  const getRadioButtonStatus = (buttonName: string) => {
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

export function RadioInputSkeleton() {
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
