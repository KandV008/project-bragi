import { Color } from "@/app/model/entities/enums/Color";
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
      {Object.values(Color).map((element, index) => 
      <div key={element.name + "-" + index}>
              <IncrementalTextInput name={element.name} type={"text"} placeholder={element.name} label={element.name} icon={faPaintBrush} />
      </div>
      )}
    </section>
  );
}
