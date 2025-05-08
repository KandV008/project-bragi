"use client";

import {
  faCode,
  faTag,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
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
  bargainTitleName,
} from "@/app/config/JSONnames";
import GoBackButton from "@/app/ui/components/buttons/goBackButton/goBackButton";
import SubmitButton, {
  SubmitButtonSkeleton,
} from "@/app/ui/components/buttons/submitButton/submitButton";
import TextAreaInput, {
  TextAreaInputSkeleton,
} from "@/app/ui/components/inputs/textAreaInput/textAreaInput";
import TextInput, {
  TextInputSkeleton,
} from "@/app/ui/components/inputs/textInput/textInput";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";
import { useRouter } from "next/navigation";

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
    ? `/admin/products/${bargain.id}`
    : `/admin/products`;
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
      <GoBackButton />
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
          icon={faCode}
          value={bargain ? bargain.code : ""}
        />
        {/* Title */}
        <TextInput
          name={bargainTitleName}
          type={"text"}
          placeholder={"Nombre de la oferta"}
          label={"Título de la Oferta"}
          icon={faTag}
          value={bargain ? bargain.title : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={bargainDescriptionName}
          placeholder={"Lore ipsum..."}
          label={"Descripción"}
          icon={faTextHeight}
          value={bargain ? bargain.description : ""}
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
        {/* Submit Button */}
        <SubmitButtonSkeleton />
      </div>
    </div>
  );
}
