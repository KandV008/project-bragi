import { ProductColor } from "@/app/model/entities/Product";
import { componentBorder } from "../../tailwindClasses";

interface ColorArticleProps {
  label: string;
  colors: ProductColor[];
}

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
                  key={color.color.name + "-" + index}
                  className={`size-8 md:size-6 lg:size-8 ${componentBorder}`}
                  style={{ backgroundColor: color.color.hex }}
                  title={color.color.name}
                ></button>
                <h2 className="font-semibold text-xl w-fit">{color.color.name}</h2>
              </div>
              <ol className="flex flex-col px-2 lg:px-10 gap-1">
                {/* Color URLs */}
                {color.images.map((image, index) => {
                  return (
                    <li key={color.color.name + "-" + index}>
                      {index + 1}. {image}
                    </li>
                  );
                })}
              </ol>
            </li>
          );
        })}
      </ul>
    </article>
  );
}

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
