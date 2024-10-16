import {
  componentBackground,
  componentBorder,
  componentText,
} from "../../tailwindClasses";

interface BargainProps{
    title: string;
    description: string;
    code: string;
}

export default function Bargain({ title, description, code }: BargainProps) {
  return (
    <section
      className={`flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3
        ${componentBorder} rounded-xl
        ${componentText}
        ${componentBackground}`}
    >
      <article className="text-center sm:text-justify">
        {/* Title */}
        <h1 className="font-extrabold text-xl sm:text-2xl">{title}</h1>
        {/* Description */}
        <p className="font-semibold text-base sm:text-lg">
          {description}
        </p>
      </article>
      {/* Code */}
      <article className="font-bold text-xl sm:text-2xl self-center text-center">
        Código: <span className="font-extrabold">{code}</span>
      </article>
    </section>
  );
}
