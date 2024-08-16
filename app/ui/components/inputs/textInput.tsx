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
    <section className="flex flex-col w-72">
      <label
        htmlFor={name}
        className="bg-transparent 
            w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      <article
        className="bg-primary0 flex flex-row items-center justify-center cursor-pointer text-primary2 p-3
                    gap-2 rounded-2xl border-2 border-primary2 h-16 w-full"
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
        />
      </article>
    </section>
  );
}
