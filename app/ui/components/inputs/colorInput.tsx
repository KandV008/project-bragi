import {
  IncrementalTextInputSkeleton,
} from "./incrementalTextInput";
import {
  faBrush,
  faHashtag,
} from "@fortawesome/free-solid-svg-icons";
import { EarphoneColor } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneColor";
import { useState } from "react";
import MiniTextInput from "./miniTextInput";
import { colorHexName, colorTextName } from "@/app/config/JSONnames";

/**
 * Props for the ColorInput component.
 */
interface TextInputProps {
  /** Label for the input section. */
  label: string;
  /** Initial values for the color inputs. */
  values?: EarphoneColor[];
}

/**
 * Represents an input field with an identifier and a counter.
 */
interface InputCounter {
  /** Unique identifier for the input field. */
  id: number;
  /** Counter value used to track the number of inputs. */
  counter: number;
}

/**
 * A dynamic input component for handling multiple color inputs.
 * Allows users to add and remove input fields for color name and color code.
 */
export default function ColorInput({ label, values }: TextInputProps) {
  const initialInputs = values
    ? values.map((_, index) => ({ id: index + 1, counter: index + 1 }))
    : [{ id: 1, counter: 1 }];
  const initialCounter = values 
    ? values.length
    : 1;

  const [inputs, setInputs] = useState<InputCounter[]>(initialInputs);
  const [counter, setCounter] = useState(initialCounter);

  /**
   * Adds a new color input field.
   */
  const addInput = () => {
    setInputs([
      ...inputs,
      { id: inputs.length + 1, counter: inputs.length + 1 },
    ]);
    setCounter((prev) => prev + 1);
  };

  /**
   * Removes the last added color input field.
   */
  const removeInput = () => {
    if (inputs.length > 1) {
      setInputs(inputs.slice(0, -1));
      setCounter((prev) => prev - 1);
    }
  };

  return (
    <section className="flex flex-col w-full">
      <input type="hidden" value={counter} name={colorTextName} />
      <input type="hidden" value={counter} name={colorHexName} />
      <label
        className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      {inputs.map((input, index) => (
        <div key={`input-color-${index}`}>
          <MiniTextInput
            key={`${colorTextName}-${input.id}`}
            name={`${colorTextName}-${input.counter}`}
            type={"text"}
            placeholder={`Color ${input.counter}`}
            label={`Nombre ${input.counter}`}
            icon={faBrush}
            value={values ? values[index].name : ""}
          />
          <MiniTextInput
            key={`${colorHexName}-${input.id}`}
            name={`${colorHexName}-${input.counter}`}
            type={"text"}
            placeholder={`XXXXXX ${input.counter}`}
            label={`Código ${input.counter}`}
            icon={faHashtag}
            value={values ? values[index].hex.slice(1) : ""}
          />
        </div>
      ))}
      <div className="flex flex-row mt-2 gap-2">
        <button
          type="button"
          onClick={addInput}
          className="mr-2 hover:underline"
        >
          Añadir otro campo
        </button>
        <button type="button" onClick={removeInput} className="hover:underline">
          Quitar último campo
        </button>
      </div>
    </section>
  );
}

/**
 * A skeleton loading state for the ColorInput component.
 */
export function ColorInputSkeleton() {
  return (
    <section className="flex flex-col w-full gap-1">
      <label className="bg-transparent w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer ">
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
      </label>
      <IncrementalTextInputSkeleton />
      <IncrementalTextInputSkeleton />
      <IncrementalTextInputSkeleton />
      <IncrementalTextInputSkeleton />
    </section>
  );
}
