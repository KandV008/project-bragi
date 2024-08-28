import { componentBorder } from "@/lib/tailwindClasses";

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
