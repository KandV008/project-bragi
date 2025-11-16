/**
 * Props for the Article component.
 *
 * @property {string} label - The title or label of the article section.
 * @property {string} value - The content or value associated with the label.
 */
interface ArticleProps {
  label: string;
  value: string;
}

/**
 * A component that displays a labeled article section with a title and corresponding content.
 *
 * @param {ArticleProps} props - The properties for the Article component.
 * @returns {JSX.Element} The rendered Article component.
 */
export function Article({ label, value }: ArticleProps): JSX.Element {
  return (
    <article className="flex flex-col items-center sm:items-start gap-2 whitespace-pre-wrap">
      {/* Label */}
      <h1 className="font-bold text-2xl sm:text-xl">{label}</h1>
      {/* Value */}
      <p role="contentinfo" className="px-3 sm:px-10 text-lg">{value}</p>
    </article>
  );
}

/**
 * A skeleton loader component for the Article component.
 * Displays placeholder elements mimicking the structure of the Article component
 * while content is loading.
 *
 * @returns {JSX.Element} The skeleton loader for the Article component.
 */
export function ArticleSkeleton(): JSX.Element {
  return (
    <article className="flex flex-col gap-1">
      {/* Placeholder for label */}
      <h1 className="md:self-start h-7 sm:h-7 lg:h-8 w-24 rounded-md bg-gray-200" />
      {/* Placeholder for value */}
      <p className="mx-2 sm:mx-6  lg:mx-10 md:self-start h-7 sm:h-7 lg:h-8 w-32 md:w-44 lg:w-52 rounded-md bg-gray-200" />
    </article>
  );
}
