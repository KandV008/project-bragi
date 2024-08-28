import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fillDefaultComponentBackground, componentText, componentBorder } from "@/lib/tailwindClasses";

interface TextInputProps {
  name: string;
  type: "text" | "password" | "number";
  placeholder: string;
  label: string;
  icon: IconDefinition;
  value?: string
}

export default function TextInput({
  name,
  type,
  placeholder,
  label,
  icon,
  value,
}: TextInputProps) {
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
          type={type}
          id={name}
          name={name}
          className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          placeholder={placeholder}
          autoComplete="off"
          step="any"
          defaultValue={value}
          readOnly={false}
        />
      </article>
    </section>
  );
}
