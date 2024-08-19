import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface TextInputProps {
  name: string;
  type: "text" | "password" | "number";
  placeholder: string;
  label: string;
  icon: IconDefinition;
}

export default function TextInput({
  name,
  type,
  placeholder,
  label,
  icon,
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
        className="flex flex-row gap-2 items-center justify-center cursor-pointer p-3 h-16 w-full
        bg-emerald-100 dark:bg-emerald-800 
        text-emerald-900 dar:text-emerald-100
        border-emerald-900 dark:border-emerald-100 border-2 rounded-2xl"
      >
        <div className="flex items-center align-bottom bg-transparent ">
          <FontAwesomeIcon icon={icon} className="size-6" />
        </div>
        <input
          type={type}
          id={name}
          name={name}
          className="w-full h-full text-black  text-xl font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
          placeholder={placeholder}
          autoComplete="off"
          required
          step="any"
        />
      </article>
    </section>
  );
}
