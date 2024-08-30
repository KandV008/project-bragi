import { componentBorder } from "../../tailwindClasses";

interface HeaderProps {
  text: string;
}

export default function ArticleHeader({ text }: HeaderProps) {
  return (
    <h3 className="text-base sm:text-lg lg:text-xl font-bold w-fit">
      {text}
      <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
    </h3>
  );
}

export function ArticleHeaderSkeleton() {
  return (
    <div className="md:self-start h-4 sm:h-5 xl:h-6 w-32 rounded-md bg-gray-200 mb-1" />
  );
}
