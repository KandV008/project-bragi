import { colorList, valueOfColor } from "@/app/model/entities/enums/Color";
import IncrementalTextInput from "./incrementalTextInput";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";
import { ProductColor } from "@/app/model/entities/Product";

interface TextInputProps {
  name: string;
  label: string;
  values?: ProductColor[];
}

export default function ColorInput({ name, label, values }: TextInputProps) {
  return (
    <section className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      {colorList.map((element, index) => (
        <div key={element + "-" + index}>
          <IncrementalTextInput
            name={element}
            type={"text"}
            placeholder={element + " image ULR"}
            label={element}
            icon={faPaintBrush}
            values={values ? getImages(element, values) : []}
          />
        </div>
      ))}
    </section>
  );
}



function getImages(currentElement: string, values: ProductColor[]){
  const currentColor = values.find(x => valueOfColor(x.color.name) === currentElement)
  return currentColor?.images
}