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
