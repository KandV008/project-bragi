import { colorList } from "@/app/model/entities/enums/Color";
import IncrementalTextInput from "./incrementalTextInput";
import { faPaintBrush } from "@fortawesome/free-solid-svg-icons";

interface TextInputProps {
  name: string;
  label: string;
}

export default function ColorInput({
  name,
  label,
}: TextInputProps) {
  return (
    <section className="flex flex-col w-full">
      <label
        htmlFor={name}
        className="bg-transparent 
                    w-3/4 md:w-9/12 font-extrabold text-lg cursor-pointer "
      >
        {label}
      </label>
      {colorList.map((element, index) => 
      <div key={element + "-" + index}>
              <IncrementalTextInput name={element} type={"text"} placeholder={element + " image ULR"} label={element} icon={faPaintBrush} />
      </div>
      )}
    </section>
  );
}
