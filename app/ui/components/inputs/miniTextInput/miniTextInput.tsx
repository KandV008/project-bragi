import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { fillDefaultComponentBackground, componentText, componentBorder } from "@/app/ui/tailwindClasses";

/**
 * Props for the MiniTextInput component.
 *
 * @property {string} name - The name attribute for the input field.
 * @property {"text" | "password" | "number" | "url"} type - The type of input field.
 * @property {string} placeholder - The placeholder text for the input field.
 * @property {string} label - The label text displayed above the input field.
 * @property {IconDefinition} icon - The FontAwesome icon displayed next to the input.
 * @property {string} [value] - The optional default value for the input field.
 */
interface TextInputProps {
  name: string;
  type: "text" | "password" | "number" | "url";
  placeholder: string;
  label: string;
  icon: IconDefinition;
  value?: string;
}

/**
 * Renders an input field with a label and an icon.
 *
 * @param {TextInputProps} props - Component properties.
 * @returns {JSX.Element} The rendered component.
 */
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
          maxLength={255}
        />
      </article>
    </section>
  );
}

/**
 * A skeleton placeholder for MiniTextInput, useful for loading states.
 *
 * @returns {JSX.Element} The rendered skeleton component.
 */
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
