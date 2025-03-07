import { EarphoneColor } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneColor";
import { componentBorder } from "../../tailwindClasses";

/**
 * Props for the ColorArticle component.
 * 
 * @interface ColorArticleProps
 * @property {string} label - The label text to display for the color article.
 * @property {EarphoneColor[]} colors - An array of EarphoneColor objects to display in the article.
 */
interface ColorArticleProps {
  label: string;
  colors: EarphoneColor[];
}

/**
 * A component that displays an article with a list of earphone colors.
 * 
 * @param {ColorArticleProps} props - The properties to configure the ColorArticle component.
 * @returns {JSX.Element} A rendered ColorArticle component.
 */
export function ColorArticle({ label, colors }: ColorArticleProps) {
  return (
    <article className="flex flex-col items-center sm:items-start gap-2 sm:gap-0">
      <h1 className="font-bold text-2xl sm:text-xl">{label}</h1>
      <ul className="flex flex-col gap-2 px-3 sm:px-10 text-sm lg:text-base ">
        {colors.map((color, index) => {
          return (
            <li key={"color-" + index}>
              {/* Color title */}
              <div className="flex flex-row gap-5 w-full justify-center lg:justify-start">
                <button
                  key={color.name + "-" + index}
                  className={`size-8 md:size-6 lg:size-8 ${componentBorder}`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                ></button>
                <h2 className="font-semibold text-xl w-fit">{color.name}</h2>
              </div>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

/**
 * A skeleton loader for the ColorArticle component, used when data is loading.
 * 
 * @returns {JSX.Element} A skeleton loader element for the ColorArticle component.
 */
export function ColorArticleSkeleton() {
  return (
    <article className="flex flex-col gap-1">
      <h1 className="md:self-start h-7 sm:h-7 lg:h-8 w-24 rounded-md bg-gray-200" />
      <div className="flex flex-col flex-wrap gap-1 px-5">
        <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
        <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
        <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
        <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
        <div className="md:self-start h-6 sm:h-8 xl:h-10 w-2/3 rounded-md bg-gray-200 mb-1" />
      </div>
    </article>
  );
}
