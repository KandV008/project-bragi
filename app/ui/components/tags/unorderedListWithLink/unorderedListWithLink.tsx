import Link from "next/link";

/**
 * Props for the UnorderedListWithLink component.
 *
 * @property {string} title - The title or label for the list.
 * @property {string[]} elements - The list of text elements to be displayed.
 * @property {string[]} links - The corresponding list of URLs for each element.
 */
interface Props {
  title: string;
  elements: string[];
  links: string[];
}

/**
 * A component that renders an unordered list with links.
 *
 * @param {Props} props - The properties for the UnorderedListWithLink component.
 * @returns {JSX.Element} The rendered UnorderedListWithLink component.
 */
export default function UnorderedListWithLink({
  title,
  elements,
  links,
}: Props): JSX.Element {
  return (
    <article className="flex flex-col">
      {/* List Title */}
      <h1 className="font-bold">{title}</h1>
      {/* List of Links */}
      <div
        className="flex flex-col text-emerald-400 dark:text-emerald-100
                   px-1 md:px-3 space-y-2 md:space-y-1 text-xs md:text-base"
      >
        {elements.map((element, index) => (
          <Link key={element} href={links[index]} className="hover:underline">
            {element}
          </Link>
        ))}
      </div>
    </article>
  );
}
