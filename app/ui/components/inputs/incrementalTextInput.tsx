'use client';

import { useState } from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import MiniTextInput from "./miniTextInput";

interface TextInputProps {
    name: string;
    type: "text" | "number";
    placeholder: string;
    label: string;
    icon: IconDefinition;
    values?: string[]
}

interface InputCounter{
    id: number;
    counter: number;
}

export default function IncrementalTextInput({
    name,
    type,
    placeholder,
    label,
    icon,
    values,
}: TextInputProps) {
    const [inputs, setInputs] = useState<InputCounter[]>(
        values 
            ? values.map((_, index) => ({ id: index + 1, counter: index + 1 })) 
            : [{ id: 1, counter: 1 }]
    );    
    const [counter, setCounter] = useState(values ? values.length : 1)

    const addInput = () => {
        setInputs([...inputs, { id: inputs.length + 1, counter: inputs.length + 1 }]);
        setCounter(prev => prev + 1)

    };

    const removeInput = () => {
        if (inputs.length > 1) {
            setInputs(inputs.slice(0, -1));
            setCounter(prev => prev - 1)
        }
    };

    return (
        <section>
            <input type="hidden" value={counter} name={name} />
            <label
                htmlFor={name}
                className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
            >
                {label}
            </label>
            <article className="flex flex-col px-5 justify-center">
                {inputs.map(input => (
                    <MiniTextInput
                        key={input.id}
                        name={`${name}-${input.counter}`}
                        type={type}
                        placeholder={`${placeholder} ${input.counter}`}
                        label={`Añadir ${input.counter}`}
                        icon={icon}
                        value={values ? values[input.id-1] : ""}
                    />
                ))}
                <div className="flex flex-row mt-2 gap-2">
                <button type="button" onClick={addInput} className="mr-2 hover:underline">
                    Añadir otro campo
                </button>
                <button type="button" onClick={removeInput} className="hover:underline">
                    Quitar último campo
                </button>
                </div>
            </article>
        </section>
    );
}
