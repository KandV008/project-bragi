"use client";

import { ChangeEvent, useState } from "react";

interface CheckBoxInputProps {
  name: string;
  label: string;
  list: any[];
  type: string;
  onChange?: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function CheckBoxInput({
  name,
  label,
  list,
}: CheckBoxInputProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

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
      ? `${baseClasses} text-rose-600 bg-rose-200 border-rose-600`
      : `${baseClasses} bg-emerald-100 dark:bg-emerald-800  
          text-emerald-900 dark:text-emerald-100
          border-emerald-900 dark:border-emerald-100`;
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
            />
            <label htmlFor={name + "-" + index}> {element}</label>
            <br />
          </article>
        ))}
      </div>
    </section>
  );
}
