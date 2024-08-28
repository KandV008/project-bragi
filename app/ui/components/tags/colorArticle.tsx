import { ProductColor } from "@/app/model/entities/Product";
import { componentBorder } from "@/lib/tailwindClasses";

interface ColorArticleProps {
  label: string;
  colors: ProductColor[];
}

export function ColorArticle({ label, colors }: ColorArticleProps) {
  return (
    <article>
      <h1 className="font-bold text-xl">{label}</h1>
      <ul className="flex flex-col gap-2 px-10 text-sm lg:text-base ">
        {colors.map((color, index) => {
          return (
            <li key={"color-" + index}>
              <div className="flex flex-row gap-5">
                <button
                  key={color.color.name + "-" + index}
                  className={`size-8 md:size-6 lg:size-8 ${componentBorder}`}
                  style={{ backgroundColor: color.color.hex }}
                  title={color.color.name}
                ></button>
                <h2 className="font-semibold">{color.color.name}</h2>
              </div>
              <ol className="px-10">
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
