'use client';

import { useState } from "react";
import TextInput from "./textInput";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TextInputProps {
    name: string;
    type: "text" | "password" | "number";
    placeholder: string;
    label: string;
    icon: IconDefinition;
}

export default function IncrementalTextInput({
    name,
    type,
    placeholder,
    label,
    icon,
}: TextInputProps) {
    const [inputs, setInputs] = useState([{ id: 1, counter: 1 }]);

    const addInput = () => {
        setInputs([...inputs, { id: inputs.length + 1, counter: inputs.length + 1 }]);
    };

    const removeInput = () => {
        if (inputs.length > 1) {
            setInputs(inputs.slice(0, -1));
        }
    };

    return (
        <section>
            <label
                htmlFor={name}
                className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
            >
                {label}
            </label>
            <div className="px-5">
                {inputs.map(input => (
                    <TextInput
                        key={input.id}
                        name={`${name}-${input.counter}`}
                        type={type}
                        placeholder={`${placeholder} ${input.counter}`}
                        label={`Añadir ${input.counter}`}
                        icon={icon}
                    />
                ))}
                <button type="button" onClick={addInput} className="mr-2 hover:underline">
                    Añadir otro campo
                </button>
                <button type="button" onClick={removeInput} className="hover:underline">
                    Quitar último campo
                </button>
            </div>
        </section>
    );
}
