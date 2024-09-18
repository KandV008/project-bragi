import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fillDefaultComponentBackground, componentText, componentBorder } from "../../tailwindClasses";

interface TextInputProps {
  name: string;
  type: "text" | "password" | "number";
  placeholder: string;
  label: string;
  icon: IconDefinition;
  value?: string
}

export default function MiniTextInput({
  name,
  type,
  placeholder,
  label,
  icon,
  value,
}: TextInputProps) {
  return (
    <section className="flex flex-col sm:flex-row gap-2 w-full">
      <label
        htmlFor={name}
        className="bg-transparent text-center self-center
            w-fit font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <article
        className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
        h-12 w-full text-base font-semibold
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
          className="w-full h-full bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          placeholder={placeholder}
          autoComplete="off"
          defaultValue={value}
          readOnly={false}
        />
      </article>
    </section>
  );
}

export function MiniTextInputSkeleton() {
  return (
    <section className="flex flex-col sm:flex-row w-full gap-1">
      <label
        className="bg-transparent text-center self-center
            w-fit font-extrabold text-lg cursor-pointer "
      >
        <div className="md:self-start h-5 sm:h-7 lg:h-8 w-full rounded-md bg-gray-200" />
      </label>
      <article
        className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
        h-12 w-full text-base font-semibold rounded-2xl bg-gray-200`}
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <div className="size-6" />
        </div>
        <div className="w-full h-full text-xl font-bold bg-transparent cursor-pointer rounded px-" />
      </article>
    </section>
  );
}