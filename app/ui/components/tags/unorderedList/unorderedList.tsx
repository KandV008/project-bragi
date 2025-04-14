/**
 * Props for the UnorderedList component.
 *
 * @property {string} label - The title or label for the list.
 * @property {string[]} values - The list of string values to be displayed.
 */
interface UnorderedListProps {
  label: string;
  values: string[];
}

/**
 * A component that renders an unordered list with a title.
 *
 * @param {UnorderedListProps} props - The properties for the UnorderedList component.
 * @returns {JSX.Element} The rendered UnorderedList component.
 */
export default function UnorderedList({ label, values }: UnorderedListProps): JSX.Element {
  return (
    <article>
      {/* List Label */}
      <h1 className="font-bold text-xl">{label}</h1>
      {/* Unordered List */}
      <ul className="px-10 text-sm lg:text-base ">
        {values.map((text, index) => (
          <li key={label + "-" + index}>- {text}</li>
        ))}
      </ul>
    </article>
  );
}

/**
 * A skeleton loader for the UnorderedList component.
 * Displays placeholder elements that mimic the appearance of a loading unordered list.
 *
 * @returns {JSX.Element} The skeleton loader for the UnorderedList component.
 */
export function UnorderedListSkeleton(): JSX.Element {
  return (
    <article className="flex flex-col gap-1">
      {/* Placeholder for list label */}
      <h1 className="md:self-start h-7 sm:h-7 lg:h-8 w-24 rounded-md bg-gray-200" />
      {/* Placeholder for list items */}
      <ul className="flex flex-col px-10 text-sm lg:text-base gap-1">
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
      </ul>
    </article>
  );
}
