import Link from "next/link";

interface Props {
  title: string;
  elements: string[];
  links: string[];
}

export default function UnorderedListWithLink({
  title,
  elements,
  links,
}: Props) {
  return (
    <article className="flex flex-col">
      <h1 className="font-bold">{title}</h1>
      <div
        className="flex flex-col text-emerald-400 dark:text-emerald-100
                   px-1 md:px-3 space-y-2 md:space-y-1  text-xs md:text-base"
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
