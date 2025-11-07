import { useContext, ChangeEvent, MouseEvent } from "react";
import {
  componentBorder,
  componentText,
  fillDefaultComponentBackground,
  pressedButton,
} from "../../../tailwindClasses";
import { DeletingContext } from "../../contexts/deletingContext";

/**
 * Props for the `Bargain` component.
 */
interface BargainProps {
  /** Unique identifier for the bargain. */
  id: string;
  /** Title of the bargain. */
  title: string;
  /** Description of the bargain. */
  description: string;
  /** Promotional code associated with the bargain. */
  code: string;
  /** Indicates if the component is displayed as a preview. */
  isPreview?: boolean;
}

/**
 * A component to display a bargain offer.
 *
 * @param {BargainProps} props - The props for the `Bargain` component.
 * @returns {JSX.Element} The `Bargain` component.
 */
export default function BargainCheck({
  id,
  title,
  description,
  code,
}: BargainProps): JSX.Element {
  const { selectedValues, setSelectedValues } = useContext(DeletingContext);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const toggleSelection = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName.toLowerCase() === "input") return;

    setSelectedValues((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getCheckBoxStatus = (productId: string): string => {
    const baseClasses = `flex flex-col items-center p-3 gap-3
        ${componentBorder} rounded-xl`;
    return selectedValues.includes(productId)
      ? `${baseClasses} ${pressedButton}`
      : `${baseClasses} ${fillDefaultComponentBackground} ${componentText}`;
  };

  return (
    <section className={getCheckBoxStatus(id)}>
      <div
        className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3"
        onClick={toggleSelection}
      >
        <input
          type="checkbox"
          id={`delete-check-${id}`}
          name={`delete-check-${id}`}
          value={id}
          onChange={handleCheckboxChange}
          checked={selectedValues.includes(id)}
          className="cursor-pointer"
        />
        <article className="text-center sm:text-justify">
          {/* Title */}
          <h1 className="font-extrabold text-xl sm:text-2xl">{title}</h1>
          {/* Description */}
          <p role="contentinfo" className="font-semibold text-base sm:text-lg">
            {description}
          </p>
        </article>
        {/* Code */}
        <article className="font-bold text-xl sm:text-2xl self-center text-center">
          Código:{" "}
          <span role="definition" className="font-extrabold">
            {code}
          </span>
        </article>
      </div>
    </section>
  );
}
