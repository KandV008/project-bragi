import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fillDefaultComponentBackground,
  componentText,
  componentBorder,
  negativeComponentBackground,
  negativeComponentText,
  negativeHoverComponentBackground,
} from "../../tailwindClasses";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { BargainEntity } from "@/app/model/entities/Bargain";

interface BargainInputProps {
  bargain: BargainEntity | null,
  updateBargain: (bargain: BargainEntity | null) => void
}

export default function BargainInput({ bargain, updateBargain}: BargainInputProps) {
  
  const formAction = (formData: FormData) => {
    //TODO Validate Bargain
    //TODO Get Bargain
    updateBargain({ code: formData.get("code")!.toString(), title: "", description: ""})
  }
  
  
  return (
    <>
      {bargain ? (
        <section>
          {/* Label */}
          <label
            className="bg-transparent max-w-fit
            font-extrabold text-lg cursor-pointer "
          >
            Código promocional
          </label>
          <article className="font-semibold">Código <span className="font-extrabold text-lg">{bargain.code}</span> está aplicado</article>
          <div className="self-center">
        <button
          type="button"
          onClick={() => updateBargain(null)}
          className={`hover:underline`}
        >
          Quitar opción
        </button>
      </div>
        </section> 
      ) : (
        <form className="flex flex-col w-fit gap-2" action={formAction}>
          {/* Label */}
          <label
            className="bg-transparent max-w-fit
            font-extrabold text-lg cursor-pointer "
          >
            Código promocional
          </label>
          {/* Action */}
          <section className="flex flex-row gap-3">
            {/* Input */}
            <article
              className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
              h-12 w-fit font-semibold
              ${fillDefaultComponentBackground} 
              ${componentText}
              ${componentBorder} rounded-2xl`}
            >
              <div className="flex items-center align-bottom bg-transparent ">
                <FontAwesomeIcon icon={faTag} className="size-5" />
              </div>
              <input
                type="text"
                name="code"
                className="w-20 sm:w-fit h-full text-base font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
                placeholder={"Código"}
                autoComplete="off"
                step="any"
                readOnly={false}
              />
            </article>
            {/* Submit */}
            <button
              type="submit"
              className={`w-fit p-3 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                      ${negativeComponentBackground} ${negativeHoverComponentBackground}
                      ${negativeComponentText}`}
            >
              <div className="flex flex-row place-self-center gap-3">
                <span className="text-base font-black">Aplicar</span>
              </div>
            </button>
          </section>
        </form>
      )}
    </>
  );
}
