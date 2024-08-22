interface ArticleProps {
  label: string;
  value: string;
}

export function Article({ label, value }: ArticleProps) {
  return (
    <article>
      <h1 className="font-bold text-xl">{label}</h1>
      <p className="px-10 text-lg">{value}</p>
    </article>
  );
}
