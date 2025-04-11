"use client";

import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader";
import TextAreaInput, {
  TextAreaInputSkeleton,
} from "@/app/ui/components/inputs/textAreaInput";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput";
import {
  faImage,
  faTag,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormNovelty } from "@/lib/validations/validations";
import { useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import { noveltyDescriptionName, noveltyIdName, noveltyTitleName, promotionalImageName } from "@/app/config/JSONnames";
import { actionCreateNovelty, actionUpdateNovelty } from "@/db/novelty/novelty";

interface FormProps {
  novelty?: NoveltyEntity;
}

/**
 * A form component for creating or updating a novelty (offer).
 * It supports validation, submission handling, and displays appropriate UI elements.
 * 
 * @param {FormProps} props - The component props containing an optional novelty entity.
 * @returns {JSX.Element} The rendered novelty form component.
 */
export default function NoveltyForm({ novelty }: FormProps): JSX.Element {
  const actionText = novelty ? "Actualizar novedad" : "Crear nueva novedad";
  const actionForm = novelty ? actionUpdateNovelty : actionCreateNovelty;
  const succesToastText = novelty
    ? "Se ha actualizado la novedad."
    : "Se ha creado la novedad";
  const errorToastText = novelty
    ? "No se ha podido actualizar la novedad."
    : "No se ha podido crear la novedad";
  const [showModal, setShowModal] = useState(false);
  
  /**
   * Toggles the validation modal visibility.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles form submission and validates input data.
   * 
   * @param {FormData} formData - The form data submitted by the user.
   */
  const handleForm = (formData: FormData) => {
    const isValid = validateFormNovelty(formData);
    if (isValid) {
      actionForm(formData)
        .then((_) => toast.success(succesToastText))
        .catch((_) => toast.error(errorToastText));
    } else handleShowModal();
  };

  return (
    <>
      <GoBackButton />
      <form
        action={handleForm}
        className={`flex flex-col gap-5 p-5 sm:p-10 
                   ${componentBackground}
                   ${componentBorder} rounded-xl`}
      >
        <SectionHeader text={actionText} />
        {/* Id (Hidden input for updating novelties) */}
        {novelty ? (
          <input type="hidden" name={noveltyIdName} value={novelty.id} />
        ) : (
          <></>
        )}
        {/* Title */}
        <TextInput
          name={noveltyTitleName}
          type={"text"}
          placeholder={"Título de la Novedad"}
          label={"Título de la Novedad"}
          icon={faTag}
          value={novelty ? novelty.title : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={noveltyDescriptionName}
          placeholder={"Lore ipsum..."}
          label={"Descripción"}
          icon={faTextHeight}
          value={novelty ? novelty.description : ""}
        />
        {/* URL */}
        <TextInput
          name={promotionalImageName}
          type={"text"}
          placeholder={"url-ejemplo.jpg"}
          label={"URL de la imagen promocional"}
          icon={faImage}
          value={novelty ? novelty.promotionalImage : ""}
        />
        {/* Submit Button */}
        <section className="self-center">
          <SubmitButton text={actionText} icon={faUpload} isDisable={false} />
        </section>
      </form>
      <article className="flex flex-center shrink-0 justify-center h-full">
        {showModal && <FormValidationPopUp handleShowModal={handleShowModal} />}
      </article>
    </>
  );
}

/**
 * Displays a skeleton loader for the novelty form while data is being fetched or processed.
 * 
 * @returns {JSX.Element} The rendered skeleton loader component.
 */
export function NoveltyFormSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col gap-5 p-5 sm:p-10">
        <SectionHeaderSkeleton />
        {/* Title */}
        <TextInputSkeleton />
        {/* Description */}
        <TextAreaInputSkeleton />
        {/* Promotional Image */}
        <TextInputSkeleton />
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}