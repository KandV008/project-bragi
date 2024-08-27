"use client";

import { ChangeEvent, useState } from "react";

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
    const baseClasses = "flex flex-row gap-2 items-center justify-start cursor-pointer py-1 px-2 rounded-2xl border-2";
    return buttonName === selectedValue
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
