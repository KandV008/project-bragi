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
