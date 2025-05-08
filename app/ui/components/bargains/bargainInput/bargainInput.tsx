import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  fillDefaultComponentBackground,
  componentText,
  componentBorder,
  negativeComponentBackground,
  negativeComponentText,
  negativeHoverComponentBackground,
} from "../../../tailwindClasses";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import { validateBargainInput } from "@/lib/validations/validations";
import { useState } from "react";
import FormValidationPopUp from "../../popUps/formValidationPopUp/formValidationPopUp";
import { getBargain, getBargainByCode } from "@/db/bargain/bargain";
import { bargainCodeName } from "@/app/config/JSONnames";
import toast from "react-hot-toast";

/**
 * Props for the `BargainInput` component.
 */
interface BargainInputProps {
  /** The currently applied bargain, if any. */
  bargain: BargainEntity | null;
  /** Function to update the applied bargain. */
  setBargain: (bargain: BargainEntity | null) => void;
  /** Status of the bargain introduced */
  status: 0 | 1;
}

/**
 * A component that allows users to input and apply a promotional bargain code.
 *
 * @param {BargainInputProps} props - The props for the `BargainInput` component.
 * @returns {JSX.Element} The `BargainInput` component.
 */
export default function BargainInput({
  bargain,
  setBargain,
  status,
}: BargainInputProps): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the modal visibility.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles form submission, validates input, and applies a promotional code.
   *
   * @param {React.FormEvent<HTMLFormElement>} e - The form event.
   */
  const formAction = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const isValid = validateBargainInput(formData);

    if (isValid) {
      getBargainByCode(formData.get(bargainCodeName)?.toString())
        .then((data) => {
          toast.success("Código aplicado.");
          console.log(data);
          setBargain(data);
        })
        .catch((_) => toast.error("No existe el código."));
    } else {
      handleShowModal();
    }
  };

  return (
    <>
      {bargain ? (
        <section>
          <label className="bg-transparent max-w-fit font-extrabold text-lg cursor-pointer">
            Código promocional
          </label>
          {status === 0 ? (
            <article className="font-semibold">
              Código{" "}
              <span className="font-extrabold text-lg">{bargain.code}</span>{" "}
              está aplicado
            </article>
          ) : (
            <>
                        <article className="font-semibold">
              Código{" "}
              <span className="font-extrabold text-lg">{bargain.code}</span>{" "}
              no está aplicado. No se cumplen los requisitos mínimos necesarios.
            </article>
            </>
          )}
          <div className="self-center">
            <button
              type="button"
              onClick={() => setBargain(null)}
              className="hover:underline"
            >
              Quitar opción
            </button>
          </div>
        </section>
      ) : (
        <form className="flex flex-col w-fit gap-2" onSubmit={formAction}>
          <label className="bg-transparent max-w-fit font-extrabold text-lg cursor-pointer">
            Código promocional
          </label>
          <section className="flex flex-row gap-3">
            <article
              className={`flex flex-row gap-2 items-center justify-center cursor-pointer p-3 
              h-12 w-fit font-semibold ${fillDefaultComponentBackground} 
              ${componentText} ${componentBorder} rounded-2xl`}
            >
              <div className="flex items-center align-bottom bg-transparent">
                <FontAwesomeIcon icon={faTag} className="size-5" />
              </div>
              <input
                type="text"
                name="code"
                className="w-20 sm:w-fit h-full text-base font-bold bg-transparent cursor-pointer rounded px-1 placeholder:text-neutral-700"
                placeholder="Código"
                autoComplete="off"
                required
              />
            </article>
            <button
              type="submit"
              className={`w-fit p-3 h-12 flex flex-row place-self-center md:place-self-start justify-center rounded 
                      ${negativeComponentBackground} ${negativeHoverComponentBackground} ${negativeComponentText}`}
            >
              <div className="flex flex-row place-self-center gap-3">
                <span className="text-base font-black">Aplicar</span>
              </div>
            </button>
          </section>
        </form>
      )}
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}
