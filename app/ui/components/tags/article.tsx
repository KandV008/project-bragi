interface ArticleProps {
  label: string;
  value: string;
}

export function Article({ label, value }: ArticleProps) {
  return (
    <article className="flex flex-col items-center sm:items-start gap-2">
      <h1 className="font-bold text-2xl sm:text-xl">{label}</h1>
      <p className="px-3 sm:px-10 text-lg">{value}</p>
    </article>
  );
}

export function ArticleSkeleton() {
  return (
    <article className="flex flex-col gap-1">
      <h1 className="md:self-start h-7 sm:h-7 lg:h-8 w-24 rounded-md bg-gray-200" />
      <p className="mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-48 rounded-md bg-gray-200" />
    </article>
  );
}
