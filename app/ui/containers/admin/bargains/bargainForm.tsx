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
import { actionCreateBargain, actionUpdateBargain } from "@/db/action";
import {
    faCode,
  faTag,
  faTextHeight,
  faUpload,
} from "@fortawesome/free-solid-svg-icons";
import { validateFormBargain } from "@/lib/validations";
import { useState } from "react";
import FormValidationPopUp from "@/app/ui/components/popUps/formValidationPopUp";
import {
  componentBackground,
  componentBorder,
  shimmer,
} from "@/app/ui/tailwindClasses";
import toast from "react-hot-toast";
import GoBackButton from "@/app/ui/components/buttons/goBackButton";
import { BargainEntity } from "@/app/model/entities/Bargain";

interface FormProps {
  bargain?: BargainEntity;
}

export default function BargainForm({ bargain }: FormProps) {
  const actionText = bargain ? "Actualizar oferta" : "Crear nueva oferta";
  const actionForm = bargain ? actionUpdateBargain : actionCreateBargain;
  const succesToastText = bargain
    ? "Se ha actualizado la oferta."
    : "Se ha creado la oferta";
  const errorToastText = bargain
    ? "No se ha podido actualizar la oferta."
    : "No se ha podido crear la oferta";
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(!showModal);
  };

  const handleForm = (formData: FormData) => {
    const isValid = validateFormBargain(formData);
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
        {/* Id */}
        {bargain ? <input type="hidden" name="prev_code" value={bargain.code} /> : <></>}
        {/* Code */}
        <TextInput
          name={"code"}
          type={"text"}
          placeholder={"Código"}
          label={"Código de la Oferta"}
          icon={faCode}
          value={bargain ? bargain.code : ""}
        />
        {/* Ttile */}
        <TextInput
          name={"title"}
          type={"text"}
          placeholder={"Nombre de la oferta"}
          label={"Título de la Oferta"}
          icon={faTag}
          value={bargain ? bargain.title : ""}
        />
        {/* Description */}
        <TextAreaInput
          name={"description"}
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