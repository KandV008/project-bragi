"use client";

import { validateFormBargain } from "@/lib/validations/validations";
import { useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import { BargainEntity } from "@/app/model/entities/bargain/Bargain";
import { actionUpdateBargain, actionCreateBargain } from "@/db/bargain/bargain";
import {
  bargainCodeName,
  bargainDescriptionName,
  bargainIdName,
  bargainRequirementsName,
  bargainTitleName,
} from "@/app/config/JSONnames";
import {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton/submitButton";
import {
  TextAreaInputSkeleton,
} from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput/textInput";
import {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { useRouter } from "next/navigation";
import { IncrementalTextInputSkeleton } from "@/app/ui/components/inputs/incrementalTextInput/incrementalTextInput";
import dynamic from "next/dynamic";
import { Icons } from "@/app/ui/fontAwesomeIcons";

const TextInput = dynamic(() => import("@/app/ui/components/inputs/textInput/textInput"));
const TextAreaInput = dynamic(() => import("@/app/ui/components/inputs/textAreaInput/textAreaInput"));
const IncrementalTextInput = dynamic(() => import("@/app/ui/components/inputs/incrementalTextInput/incrementalTextInput"));
const SubmitButton = dynamic(() => import("@/app/ui/components/buttons/submitButton/submitButton"));
const SectionHeader = dynamic(() => import("@/app/ui/components/tags/sectionHeader/sectionHeader"));

/**
 * Interface for form properties used in BargainForm
 */
interface FormProps {
  /** Optional bargain entity to edit an existing bargain */
  bargain?: BargainEntity;
}

/**
 * BargainForm component handles creating and updating bargain offers.
 * It displays a form with fields for code, title, and description.
 *
 * @param {FormProps} props - The component properties.
 * @returns {JSX.Element} The rendered bargain form component.
 */
export default function BargainForm({ bargain }: FormProps) {
  const router = useRouter();

  const actionText = bargain ? "Actualizar oferta" : "Crear nueva oferta";
  const actionForm = bargain ? actionUpdateBargain : actionCreateBargain;
  const navigateToURL = bargain
    ? `/admin/bargains/${bargain.id}`
    : `/admin/bargains`;
  const succesToastText = bargain
    ? "Se ha actualizado la oferta."
    : "Se ha creado la oferta";
  const errorToastText = bargain
    ? "No se ha podido actualizar la oferta."
    : "No se ha podido crear la oferta";
  const [showModal, setShowModal] = useState(false);

  /**
   * Toggles the validation modal visibility.
   */
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  /**
   * Handles the form submission.
   * Validates the form and submits the data to the appropriate action.
   *
   * @param {FormData} formData - The form data containing bargain details.
   */
  const handleForm = async (formData: FormData) => {
    const isValid = validateFormBargain(formData);
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
        {/* Id */}
        {bargain ? (
          <input type="hidden" name={bargainIdName} value={bargain.id} />
        ) : (
          <></>
        )}
        {/* Code */}
        <TextInput
          name={bargainCodeName}
          type={"text"}
          placeholder={"Código"}
          label={"Código de la Oferta"}
          icon={Icons.code}
          value={bargain ? bargain.code : ""}
        />
        {/* Title */}
        <TextInput
          name={bargainTitleName}
          type={"text"}
          placeholder={"Nombre de la oferta"}
          label={"Título de la Oferta"}
          icon={Icons.tag}
          value={bargain ? bargain.title : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={bargainDescriptionName}
          placeholder={"Lore ipsum..."}
          label={"Descripción"}
          icon={Icons.text}
          value={bargain ? bargain.description : ""}
        />
        {/* Requirements */}
        <IncrementalTextInput
          name={bargainRequirementsName}
          type="text"
          placeholder={"Requisito"}
          label={"Requisitos para aplicar la oferta"}
          icon={Icons.exclamation}
          values={bargain ? bargain.requirements : undefined}
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
 * Skeleton loader component for the BargainForm.
 * Displays placeholders while the form is loading.
 *
 * @returns {JSX.Element} The skeleton component.
 */
export function BargainFormSkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm p-5`}
    >
      <div className="flex flex-col gap-5 p-5 sm:p-10">
        <SectionHeaderSkeleton />
        {/* Code */}
        <TextInputSkeleton />
        {/* Title */}
        <TextInputSkeleton />
        {/* Description */}
        <TextAreaInputSkeleton />
        {/* Requirements */}
        <IncrementalTextInputSkeleton />
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}
