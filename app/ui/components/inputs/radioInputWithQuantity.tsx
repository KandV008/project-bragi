"use client";

import { ChangeEvent, useState } from "react";

interface RadioInputListProps {
  name: string;
  list: any[];
  valueOf: (type: string) => string;
  type: string;
  onChange?: (type: string) => (event: ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioInputWithQuantity({
  name,
  list,
  valueOf,
  type,
  onChange,
}: RadioInputListProps) {
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [currentEvent, setCurrentEvent] =
    useState<ChangeEvent<HTMLInputElement> | null>(null);

  const handleRadioChange = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setCurrentEvent(event);
    setSelectedValue(newValue);
    onChange!(type)(event);
  };

  const unselect = () => {
    onChange!(type)(currentEvent!);
    setSelectedValue(null);
  };

  const buttonState = selectedValue ? "block" : "hidden";

  return (
    <form action="" className="flex flex-col px-3">
      {list.map((element, index) =>
        element.quantity !== 0 ? (
          <div key={element.type}>
            <input
              type="radio"
              id={name + "-" + index}
              name={name}
              value={valueOf(element.type)}
              checked={selectedValue === valueOf(element.type)}
              onChange={handleRadioChange}
            />
            <label htmlFor={name + "-" + index}>
              {" "}
              {element.type} ( {element.quantity} )
            </label>
            <br />
          </div>
        ) : null
      )}
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

export function RadioInputWithQuantitySkeleton() {
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
