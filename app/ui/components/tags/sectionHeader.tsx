import { componentText, componentBorder } from "../../tailwindClasses";

interface SectionHeaderProps {
    text: string
}

export default function SectionHeader({ text }: SectionHeaderProps) {
  return (
    <h1
      className={`${componentText}
            text-xl md:text-2xl lg:text-3xl font-bold w-fit`}
    >
      {text}
      <div className={`w-full border-t mb-3 ${componentBorder}`}></div>
    </h1>
  );
}

export function SectionHeaderSkeleton(){
  return (
    <h1
    className={`w-fit flex flex-col gap-1`}
  >
            <div className="md:self-start h-7 sm:h-8 lg:h-10 w-44 rounded-md bg-gray-200" />
    <div className={`w-full border-t mb-3 border-2`}></div>
  </h1>
  );
}
