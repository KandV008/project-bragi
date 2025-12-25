"use client";

import { validateFormNovelty } from "@/lib/validations/validations";
import { useState } from "react";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import { NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import {
  endDateName,
  noveltyContextName,
  noveltyDescriptionName,
  noveltyIdName,
  noveltyTitleName,
  noveltyTypeName,
  promotionalImageName,
} from "@/app/config/JSONnames";
import { actionCreateNovelty, actionUpdateNovelty } from "@/db/novelty/novelty";
import { useRouter } from "next/navigation";
import { NoveltyType } from "@/app/model/entities/novelty/enums/NoveltyType";
import { NoveltyContext } from "@/app/model/entities/novelty/enums/NoveltyContext";
import { getDateValue } from "@/lib/utils";
import dynamic from "next/dynamic";
import { Icons } from "@/app/ui/fontAwesomeIcons";

const SectionHeader = dynamic(
  () => import("@/app/ui/components/tags/sectionHeader/sectionHeader").then(mod => mod.default),
  { ssr: false }
);
const SectionHeaderSkeleton = dynamic(
  () => import("@/app/ui/components/tags/sectionHeader/sectionHeader").then(mod => mod.SectionHeaderSkeleton),
  { ssr: false }
);

const TextInput = dynamic(() => import("@/app/ui/components/inputs/textInput/textInput").then(mod => mod.default), { ssr: false });
const TextInputSkeleton = dynamic(() => import("@/app/ui/components/inputs/textInput/textInput").then(mod => mod.TextInputSkeleton), { ssr: false });

const TextAreaInput = dynamic(() => import("@/app/ui/components/inputs/textAreaInput/textAreaInput").then(mod => mod.default), { ssr: false });
const TextAreaInputSkeleton = dynamic(() => import("@/app/ui/components/inputs/textAreaInput/textAreaInput").then(mod => mod.TextAreaInputSkeleton), { ssr: false });

const RadioInput = dynamic(() => import("@/app/ui/components/inputs/radioInput/radioInput").then(mod => mod.default), { ssr: false });
const RadioInputSkeleton = dynamic(() => import("@/app/ui/components/inputs/radioInput/radioInput").then(mod => mod.RadioInputSkeleton), { ssr: false });

const DateInput = dynamic(() => import("@/app/ui/components/inputs/dateInput/dateInput").then(mod => mod.default), { ssr: false });
const DateInputSkeleton = dynamic(() => import("@/app/ui/components/inputs/dateInput/dateInput").then(mod => mod.DateInputSkeleton), { ssr: false });

const SubmitButton = dynamic(() => import("@/app/ui/components/buttons/submitButton/submitButton").then(mod => mod.default), { ssr: false });
const SubmitButtonSkeleton = dynamic(() => import("@/app/ui/components/buttons/submitButton/submitButton").then(mod => mod.SubmitButtonSkeleton), { ssr: false });

const FormValidationPopUp = dynamic(
  () => import("@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp").then(mod => mod.default),
  { ssr: false }
);

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
  const router = useRouter();

  const actionText = novelty ? "Actualizar novedad" : "Crear nueva novedad";
  const actionForm = novelty ? actionUpdateNovelty : actionCreateNovelty;
  const navigateToURL = novelty
    ? `/admin/novelties/${novelty.id}`
    : `/admin/novelties`;
  const succesToastText = novelty
    ? "Se ha actualizado la novedad."
    : "Se ha creado la novedad";
  const errorToastText = novelty
    ? "No se ha podido actualizar la novedad."
    : "No se ha podido crear la novedad";
  const [showModal, setShowModal] = useState(false);

  const dateValue = novelty ? getDateValue(novelty.endDate) : "";

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
  const handleForm = async (formData: FormData) => {
    const isValid = validateFormNovelty(formData);
    if (isValid) {
      const status = await actionForm(formData);

      if (!status) {
        toast.success(succesToastText);
        router.push(navigateToURL);
      } else {
        toast.error(errorToastText);
      }
    } else handleShowModal();
  };

  return (
    <>
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
          icon={Icons.tag}
          value={novelty ? novelty.title : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={noveltyDescriptionName}
          placeholder={"Lore ipsum..."}
          label={"Descripción"}
          icon={Icons.text}
          value={novelty ? novelty.description : ""}
        />
        {/* URL */}
        <TextInput
          name={promotionalImageName}
          type={"text"}
          placeholder={"url-ejemplo.jpg"}
          label={"URL de la imagen promocional"}
          icon={Icons.image}
          value={novelty ? novelty.promotionalImage : ""}
        />
        {/* TYPE */}
        <RadioInput
          name={noveltyTypeName}
          label={"Tipo de Novedad"}
          list={Object.values(NoveltyType)}
          valueOf={(x) => x}
          value={novelty ? novelty.type : ""}
        />
        {/* CONTEXT */}
        <RadioInput
          name={noveltyContextName}
          label={"Contexto de la Novedad"}
          list={Object.values(NoveltyContext)}
          valueOf={(x) => x}
          value={novelty ? novelty.context : ""}
        />
        {/* END DATE */}
        <DateInput
          name={endDateName}
          label={"Fecha de finalización (no incluye el día)"}
          value={novelty ? dateValue : ""}
        />
        {/* Submit Button */}
        <section className="self-center">
          <SubmitButton text={actionText} icon={Icons.upload} isDisable={false} />
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
        {/* Type */}
        <RadioInputSkeleton />
        {/* Context */}
        <RadioInputSkeleton />
        {/* End Date */}
        <DateInputSkeleton />
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}
