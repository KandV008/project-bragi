interface UnorderedListProps {
  label: string;
  values: string[];
}

export default function UnorderedList({ label, values }: UnorderedListProps) {
  return (
    <article>
      <h1 className="font-bold text-xl">{label}</h1>
      <ul className="px-10 text-sm lg:text-base ">
        {values.map((text, index) => (
          <li key={label + "-" + index}>- {text}</li>
        ))}
      </ul>
    </article>
  );
}

export function UnorderedListSkeleton() {
  return (
    <article className="flex flex-col gap-1">
      <h1 className="md:self-start h-7 sm:h-7 lg:h-8 w-24 rounded-md bg-gray-200" />
      <ul className="flex flex-col px-10 text-sm lg:text-base gap-1">
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
        <li className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
      </ul>
    </article>
  );
}
